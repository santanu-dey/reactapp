module.exports = {
  "classes" : {
    "input" : "form-control",
    "select" : "form-control",
    "question" : "form-group",
    "radioListItem" : "radio",
    "radioList" : "clean-list",
    "checkboxInput" : "checkbox",
    "checkboxListItem" : "checkbox",
    "checkboxList" : "clean-list",
    "controlButton" : "btn btn-primary pull-right",
    "backButton" : "btn btn-default pull-left",
    "errorMessage" : "alert alert-danger",
    "questionPostText" : "push-top",
    "buttonBar" : "button-bar"
  },
  "formPanels" : [{
    "index" : 1,
    "panelId" : "intro-panel"
  }, {
    "index" : 2,
    "panelId" : "register-panel"
  }, {
    "index" : 3,
    "panelId" : "final-panel"
  }],
  "questionPanels" : [{
    "panelId" : "intro-panel",
    "panelHeader" : "Health Monitoring Data",
    "panelText" : "Please submit your records",
    "action" : {
      "conditions" : [{
        "questionId" : "existing-user",
        "value" : "no",
        "action" : "GOTO",
        "target" : "register-panel"
      }],
      "default" : {
        "action" : "GOTO",
        "target" : "final-panel"
      }
    },
    "button" : {
      "text" : "Next"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "intro-set"
    }]
  }, {
    "panelId" : "register-panel",
    "panelHeader" : "Register for Health Monitoring",
    "panelText" : "We don't have a record for you yet. Please register",
    "action" : {
      "conditions" : [],
      "default" : {
        "action" : "SUBMIT",
        "target" : "http://google.com"
      }
    },
    "button" : {
      "text" : "Subscribe"
    },
    "backButton" : {
      "disabled" : true
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "register-set"
    }]
  }, {
    "panelId" : "final-panel",
    "panelHeader" : "My Awesome Form",
    "panelText" : "Did you even check the console yet? Keep going though!",
    "action" : {
      "conditions" : [],
      "default" : {
        "action" : "SUBMIT",
        "target" : "http://google.com"
      }
    },
    "button" : {
      "text" : "Submit"
    },
    "questionSets" : [{
      "index" : 1,
      "questionSetId" : "info-set"
    }, {
      "index" : 2,
      "questionSetId" : "survey-set"
    }]
  }],
  "questionSets" : [{
    "questionSetId" : "intro-set",
    "questionSetHeader" : "Let us identify your records",
    "questionSetText" : "Your data is safe with us",
    "questions" : [{
      "questionId" : "existing-user",
      "question" : "Are you currently subscribed?",
      "validations" : [{
        "type"    : "isIn",
        "params" : [
          ["yes", "no"]
        ]
      }],
      "input" : {
        "type" : "radioOptionsInput",
        "options" : [{
          "text"  : "Yes",
          "value" : "yes",
          "conditionalQuestions" : [{
            "questionId" : "register-user-email",
            "question" : "Please enter your registered email ",
            "input" : {
              "type" : "emailInput",
              "placeholder" : "Email Address"
            },
            "validations" : [{
              "type" : "isEmail"
            }]
          }]
        }, {
          "text"  : "No",
          "value" : "no",
          "conditionalQuestions" : []
        }]
      }
    }]
  }, {
    "questionSetId" : "register-set",
    "questions" : [{
      "questionId" : "reg-first-name",
      "question" : "First Name",
      "text" : "This name will appear in your reports",
      "input" : {
        "type" : "textInput",
        "placeholder" : "First Name"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "reg-last-name",
      "question" : "Last Name",
      "input" : {
        "type" : "textInput",
        "placeholder" : "Last Name"
      },
      "validations" : [{
        "type" : "isLength",
        "params" : [1]
      }]
    }, {
      "questionId" : "reg-email",
      "question" : "Email Address",
      "postText" : "We won't spam you",
      "input" : {
        "type" : "emailInput",
        "placeholder" : "Email Address"
      },
      "validations" : [{
        "type" : "isEmail"
      }]
    }, {
      "questionId" : "reg-accept",
      "question" : "",
      "input" : {
        "default" : "yes",
        "type" : "checkboxInput",
        "text" : "Do you accept the terms and conditions?"
      },
      "validations" : [{
        "type"   : "isAccepted",
        "params" : [
          "yes"
        ]
      }]
    }]
  }, {
    "questionSetId" : "info-set",
    "questions" : [{
      "questionId" : "gender",
      "question" : "Gender",
      "input" : {
        "type" : "selectInput",
        "options" : [{
          "text" : "Male",
          "value" : "male"
        }, {
          "text" : "Female",
          "value" : "female"
        }]
      }
    }]
  }, {
    "questionSetId" : "survey-set",
    "questions" : [{
      "questionId" : "age-group",
      "question" : "How many hours do you spend on a computer weekly?",
      "input" : {
        "type" : "radioOptionsInput",
        "options" : [{
          "text" : "21-35 years",
          "value" : "1"
        }, {
          "text" : "36-45 years",
          "value" : "2"
        }, {
          "text" : "46-55 years",
          "value" : "3"
        }, {
          "text" : "55+ years",
          "value" : "4"
        }]
      },
      "validations" : [{
        "type" : "isIn",
        "params" : [
          [1, 2, 3, 4]
        ]
      }]
    }, {
      "questionId" : "survey-devices-owned",
      "question" : "Please enter your Health  records",
      "text" : "Try playing around the the laptop or none options!",
      "input" : {
        "type" : "checkboxOptionsInput",
        "options" : [{
          "text" : "Diabetic",
          "value" : "diabetic",
          "conditionalQuestions" : [{
            "questionId" : "laptop-os",
            "question" : "What is your fasting blood sugar",
            "text" : "Enter recent data",
            "postText" : "Unit mmol/L, less than 100 is normal",
            "input" : {
              "type" : "radioOptionsInput",
              "options" : [{
                "text" : "Less than 100",
                "value" : "normal"
              }, {
                "text" : "100 to 120",
                "value" : "pre-diabetic"
              }, {
                "text" : "Over 120",
                "value" : "diabetic"
              }, {
                "text" : "Over 200",
                "value" : "highly-diabetic",
                "conditionalQuestions" : [{
                  "questionId" : "diabetic-years",
                  "question" : "Enter years of diabetic symptoms",
                  "input" : {
                    "type" : "textInput",
                    "placeholder" : "Years of diabetic symptoms"
                  },
                  "validations" : [{
                    "type" : "isLength",
                    "params" : [1]
                  }]
                }, {
                  "questionId" : "diabetic-family-history",
                  'question' : "Are any of your parents diabetic?",
                  "input" : {
                    "type" : "textareaInput",
                    "placeholder" : "Please enter family history of diabetes"
                  },
                  "validations" : [{
                    "type" : "isLength",
                    "params" : [1]
                  }]
                }]
              }]
            }
          }]
        }, {
          "text" : "High Blood Pressure",
          "value" : "high-bp"
        }, {
          "text" : "Obesity",
          "value" : "obesity"
        }, {
          "text" : "Heart conditions",
          "value" : "heart"
        }, {
          "text" : "Renal problems",
          "value" : "renal"
        }, {
          "text" : "Allergy",
          "value" : "allergy",
          "conditionalQuestions" : [{
            "questionId" : "allergic-to",
            "question" : "Mention your allergies",
            "input" : {
              "type" : "textInput",
              "placeholder" : "Allergies"
            }
          }]
        }]
      },
      "validations" : [{
        "type" : "isAllIn",
        "params" : [
          [
            "diabetic",
            "high-bp",
            "obesity",
            "heart",
            "renal",
            "allergy"
          ]
        ]
      }]
    }]
  }]
};