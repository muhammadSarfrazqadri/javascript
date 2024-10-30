alert ("This is a Student's Information Form ")
alert ("Please Enter Your Information")  


var first_name = prompt("Enter Your First Name")
var last_name = prompt("Enter Your Last Name")
var full_name = first_name + " " + last_name
var age = prompt("Enter Your Age")
var rollNum = Number(prompt("Enter Your Roll Number"))
var phone = Number(prompt("Enter Your Mobile Number"))

alert ("!Thanks to Give us Your Information!  Now check your given Information")
alert ("Information Form" + " " + "Your Name is :" + " " + full_name + " " + "Your Age is :" + " " + age + " " + "Your Roll Number is :" + " " + rollNum + " " + "Your Mobile Number is :" + " " + phone
)

var Morething = prompt("Do you Want to give Feedback ? Write Here.")
if (Morething){
            alert("Thanks To give us Feedback")
        }else{
            alert("Thanks to use our Services")
        }