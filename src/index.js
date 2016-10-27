import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var Winterfell = require('winterfell');
import NotificationSystem from 'react-notification-system';

var MyComponent = React.createClass({
  _notificationSystem: null,

  _addNotification: function(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Data is submitted',
      level: 'success',
      onRemove: function (){
          window.location.href = '/';
      }
    });

  },

  componentDidMount: function() {
    this._notificationSystem = this.refs.notificationSystem;
  },

  render: function() {
    return (
      <div>
        <button hidden="true" onClick={this._addNotification}></button> 
        <NotificationSystem ref="notificationSystem" />
      </div>
      );
  }
});

var schema      = require('./schema');
var loginSchema = require('./loginSchema');

var onRender = () => {
  console.log('Great news! Winterfell rendered successfully');
};

var onUpdate = (questionAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAnswers);
};

var onSwitchPanel = (panel) => {
  console.log('Moving on to the panel that is identified as "' + panel.panelId + '"');
};


var onSubmit = (questionAnswers, target) => {
  console.log('Form submitted!', questionAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');

  var http = new XMLHttpRequest();
  var url = "http://datasterix-test.apigee.net/testa";
  var params = "lorem=ipsum&name=binny";
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/json");


  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
      // alert("Thanks your data is submitted "http.responseText);

    }
  }
  http.send(JSON.stringify(questionAnswers));
  document.getElementById('notificationElement').childNodes[0].childNodes[0].click();

    // MyComponent._addNotification({
    //   message: 'Notification message',
    //   level: 'success'
    // });  

  // window.location.href = '/'
  
   
};




window.onload = function() {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
		);
	
  // ReactDOM.render(
  //   <Winterfell schema={loginSchema}
  //               onRender={onRender}
  //               onUpdate={onUpdate}
  //               renderRequiredAsterisk={() => <span>{'*'}</span>} />,
  //   document.getElementById('login-form')
  // );

  ReactDOM.render(
    <Winterfell schema={schema}
                disableSubmit={true}
                onRender={onRender}
                onUpdate={onUpdate}
                onSwitchPanel={onSwitchPanel}
                onSubmit={onSubmit} />,
    document.getElementById('form1')
  );

ReactDOM.render(
  React.createElement(MyComponent),
  document.getElementById('notificationElement')
);
  
};
