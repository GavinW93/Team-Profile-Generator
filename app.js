//main application
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require("fs");
var http = require('http');
var createHTML = require('create-html')
var Mname;
var eid;

var question1 = [{
    type: 'input',
    name: 'name',
    message: "What's your Manager's name?",
  }]
  
    inquirer.prompt(question1).then(answers => {
      
        console.log(answers);
        //var createHTML = require('create-html')

Mname=answers.name;

        question2()
       
    })
function question2(){
var question2 = [{
    type: 'input',
    name: 'name',
    message: "What's your Employee id?",
    }]
    
    inquirer.prompt(question2).then(answers => {
        
          console.log(answers);
          eid=answers.name;
          question3()
         
      })
    }

    function question3(){
      var question3 = [{
          type: 'input',
          name: 'name',
          message: "What's your Manager's email?",
          }]
          
          inquirer.prompt(question3).then(answers => {
              
                console.log(answers);
                Memail=answers.name;
                question4()
               
            })
          }
function question4(){
    var question4 = [{
        type: 'input',
        name: 'name',
        message: "What's your Manager's office number?",
                    }]
                    
        inquirer.prompt(question4).then(answers => {
                        
        console.log(answers);
        Mnum=answers.name;
        question5()
                        
                      })
                }
function question5(){
      var question5 = [{
      type: 'list',
      name: 'name',
      message: "what type team member would you like to add?",
      choices: ["Intern","Engineer",],
                      }]
                                  
    inquirer.prompt(question5).then(answers => {
                                      
      console.log(answers);
      E1Type=answers.name;
      E1question1()
                                      
      })
      }


//first employee
      function E1question1(){
        var E1question1 = [{
            type: 'input',
            name: 'name',
            message: "What's the employee's name?",
                        }]
                        
            inquirer.prompt(E1question1).then(answers => {
                            
            console.log(answers);
            E1Name=answers.name;
            E1question2()
                            
                          })
                    }

    //first employee
  function E1question2(){
    var E1question2 = [{
  type: 'input',
  name: 'name',
  message: "What's the employee's id?",
                                      }]
                                      
  inquirer.prompt(E1question2).then(answers => {
                                          
  console.log(answers);
   eid1=answers.name;
  E1question3()
                                          
                                        })
                                  }


   //first employee
function E1question3(){
var E1question3 = [{
type: 'input',
 name: 'name',
 message: "What's the employee's email?",
     }]
 inquirer.prompt(E1question3).then(answers => {
                                                        
 console.log(answers);
  E1email=answers.name;
 E1question4()
                                                        
    })
   }

   function E1question4(){
    var E1question4 = [{
        type: 'input',
        name: 'name',
        message: "What's your employee's office number?",
                    }]
                    
        inquirer.prompt(E1question4).then(answers => {
                        
        console.log(answers);
        E1num=answers.name;
        E1question5()
                        
                      })
                }

   //first employee
   function E1question5(){
    var E1question5 = [{
      type: 'list',
      name: 'name',
      message: "what type team member would you like to add?",
      choices: ["Intern","Engineer",],
         }]
     inquirer.prompt(E1question5).then(answers => {
                                                            
     console.log(answers);
      E2Type=answers.name;
      E2question1()
                                                            
        })
       }


//second employee
function E2question1(){
  var E2question1 = [{
      type: 'input',
      name: 'name',
      message: "What's the employee2's name?",
                  }]
                  
      inquirer.prompt(E2question1).then(answers => {
                      
      console.log(answers);
      E2Name=answers.name;
      E2question2()
                      
                    })
              }

//second employee
function E2question2(){
var E2question2 = [{
type: 'input',
name: 'name',
message: "What's the employee2's id?",
                                }]
                                
inquirer.prompt(E2question2).then(answers => {
                                    
console.log(answers);
eid2=answers.name;
E2question3()
                                    
                                  })
                            }


//second employee
function E2question3(){
var E2question3 = [{
type: 'input',
name: 'name',
message: "What's the employee2's email?",
}]
inquirer.prompt(E2question3).then(answers => {
                                                  
console.log(answers);
E2email=answers.name;
E2question4()
                                                  
})
}


function E2question4(){
  var E2question4 = [{
      type: 'input',
      name: 'name',
      message: "What's your employee2's office number?",
                  }]
                  
      inquirer.prompt(E2question4).then(answers => {
                      
      console.log(answers);
      E2num=answers.name;
      E2question5()
                      
                    })
              }
//second employee
function E2question5(){
var E2question5 = [{
type: 'list',
name: 'name',
message: "what type team member would you like to add?",
choices: ["Intern","Engineer",],
   }]
inquirer.prompt(E2question5).then(answers => {
                                                      
console.log(answers);
E3Type=answers.name;
E3question1()
                                                      
  })
 }








//third employee
function E3question1(){
  var E3question1 = [{
      type: 'input',
      name: 'name',
      message: "What's the employee3's name?",
                  }]
                  
      inquirer.prompt(E3question1).then(answers => {
                      
      console.log(answers);
      E3Name=answers.name;
      E3question2()
                      
                    })
              }

//third employee
function E3question2(){
var E3question2 = [{
type: 'input',
name: 'name',
message: "What's the employee3's id?",
                                }]
                                
inquirer.prompt(E3question2).then(answers => {
                                    
console.log(answers);
eid3=answers.name;
E3question3()
                                    
                                  })
                            }


//third employee
function E3question3(){
var E3question3 = [{
type: 'input',
name: 'name',
message: "What's the employee3's email?",
}]
inquirer.prompt(E3question3).then(answers => {
                                                  
console.log(answers);
E3email=answers.name;
E3question4()
                                                  
})
}


function E3question4(){
  var E3question4 = [{
      type: 'input',
      name: 'name',
      message: "What's your employee3's office number?",
                  }]
                  
      inquirer.prompt(E3question4).then(answers => {
                      
      console.log(answers);
      E3num=answers.name;
      E3question5()
                      
                    })
              }


//third employee
function E3question5(){
var E3question5 = [{
type: 'list',
name: 'name',
message: "what type team member would you like to add?",
choices: ["Intern","Engineer",],
   }]
inquirer.prompt(E3question5).then(answers => {
                                                      
console.log(answers);
E4Type=answers.name;
E4question1()
                                                      
  })
 }













//forth employee
function E4question1(){
  var E4question1 = [{
      type: 'input',
      name: 'name',
      message: "What's the employee4's name?",
                  }]
                  
      inquirer.prompt(E4question1).then(answers => {
                      
      console.log(answers);
      E4Name=answers.name;
      E4question2()
                      
                    })
              }

//forth employee
function E4question2(){
var E4question2 = [{
type: 'input',
name: 'name',
message: "What's the employee4's id?",
                                }]
                                
inquirer.prompt(E4question2).then(answers => {
                                    
console.log(answers);
eid4=answers.name;
E4question3()
                                    
                                  })
                            }


//forth employee
function E4question3(){
var E4question3 = [{
type: 'input',
name: 'name',
message: "What's the employee4's email?",
}]
inquirer.prompt(E4question3).then(answers => {
                                                  
console.log(answers);
E4email=answers.name;
E4question4()
                                                  
})
}



function E4question4(){
  var E4question4 = [{
      type: 'input',
      name: 'name',
      message: "What's your employee4's office number?",
                  }]
                  
      inquirer.prompt(E4question4).then(answers => {
                      
      console.log(answers);
      E4num=answers.name;
      E4question5()
                      
                    })
              }

//forth employee
function E4question5(){
var E4question5 = [{
type: 'list',
name: 'name',
message: "what type team member would you like to add?",
choices: ["Intern","Engineer",],
   }]
inquirer.prompt(E4question5).then(answers => {
                                                      
console.log(answers);
E5Type=answers.name;
E5question1()
                                                      
  })
 }







//fifth employee
function E5question1(){
  var E5question1 = [{
      type: 'input',
      name: 'name',
      message: "What's the employee5's name?",
                  }]
                  
      inquirer.prompt(E5question1).then(answers => {
                      
      console.log(answers);
      E5Name=answers.name;
      E5question2()
                      
                    })
              }

//fifth employee
function E5question2(){
var E5question2 = [{
type: 'input',
name: 'name',
message: "What's the employee5's id?",
                                }]
                                
inquirer.prompt(E5question2).then(answers => {
                                    
console.log(answers);
eid5=answers.name;
E5question3()
                                    
                                  })
                            }


//fifth employee
function E5question3(){
var E5question3 = [{
type: 'input',
name: 'name',
message: "What's the employee5's email?",
}]
inquirer.prompt(E5question3).then(answers => {
                                                  
console.log(answers);
E5email=answers.name;
E5question4()
                                                  
})
}
function E5question4(){
  var E5question4 = [{
      type: 'input',
      name: 'name',
      message: "What's your employee5's office number?",
                  }]
                  
      inquirer.prompt(E5question4).then(answers => {
                      
      console.log(answers);
      E5num=answers.name;
      E5question5()
                      
                    })
              }
//fifth employee
function E5question5(){

buildingHTML()
                                                      
  
 }




      function buildingHTML(){
  var html =  `<!DOCTYPE html>
        
        <head>
        <style>
        div.a {
          outline: 2px dashed blue;
        }
        </style>
        </head>
        <body>
        <h1></h1> 

        <div class="a">
        <div id="manager">Manager's name:${Mname}</div>
        <div id="EMPLOYEEID">Employee ID:${eid}</div>
        <div id="Memail">Manager mail:${Memail}</div>
        <div id="MNum">Manager number:${Mnum}</div>
        </div>

        <div class="a">
        <div id="E1Name">${E1Type} 1 name:${E1Name}</div>
        <div id="EMPLOYEEID">Employee ID:${eid1}</div>
        <div id="Eemail">Manager mail:${E1email}</div>
        <div id="ENum">Manager number:${E1num}</div>
        </div>

        <div class="a">
        <div id="E1Name">${E2Type} 2 name:${E2Name}</div>
        <div id="EMPLOYEEID">Employee ID:${eid2}</div>
        <div id="Eemail">Manager mail:${E2email}</div>
        <div id="ENum">Manager number:${E2num}</div>
        </div>


        <div class="a">
        <div id="E1Name">${E3Type} 3 name:${E3Name}</div>
        <div id="EMPLOYEEID">Employee ID:${eid3}</div>
        <div id="Eemail">Manager mail:${E3email}</div>
        <div id="ENum">Manager number:${E3num}</div>
        </div>
        
        <div class="a">
        <div id="E1Name">${E4Type} 4 name:${E4Name}</div>
        <div id="EMPLOYEEID">Employee ID:${eid4}</div>
        <div id="Eemail">Manager mail:${E4email}</div>
        <div id="ENum">Manager number:${E4num}</div>
        </div>

        <div class="a">
        <div id="E1Name">${E5Type} 5 name:${E5Name}</div>
        <div id="EMPLOYEEID">Employee ID:${eid5}</div>
        <div id="Eemail">Manager mail:${E5email}</div>
        <div id="ENum">Manager number:${E5num}</div>
        </div>

        </body></html>`
      
       
      fs.writeFile('./output/index.html', html, function (err) {
        if (err) console.log(err)
      })
      let handleRequest = (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./output/index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    };
     
    http.createServer(handleRequest).listen(8000);
    console.log('localhost:8000')
    }