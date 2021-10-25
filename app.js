// alert("hello world");
// var a = 30;
// var b = 50;
// var c = a + b;
// document.write(c);

// var a = 20;
// var b = ++a + --a + ++a + a++ + --a + ++a 
//         //21 + 20 + 21 + 21 + 21 + 22 = 126
// alert(b);

// var Name = prompt("enter you name");
// var Age = prompt("enter your age");
// var gender = prompt("Enter Your Gender");

// var English = prompt("Enter Your English Marks");
// var Urdu = prompt("Enter Your Urdu Marks");
// var Islamiat = prompt("Enter Your Islamiat Marks");
// var Maths = prompt("Enter Your Math Marks");
// var Physics = prompt("Enter Your English Marks");
// var Obtained = parseInt(English) + parseInt(Urdu) + parseInt(Islamiat) + parseInt(Math) + parseInt(Physics) ;
// var percentage = Obtained *100 / 500;

// document.write("Your Name Is:" + "" + Name + "<br/>");
// document.write("Your Age Is:"+ "" + Age + "<br/>");
// document.write("Your Gender Is:"+"" + gender + "<br/>");
// document.write("Your English Marks Is:" + "" + English + "<br/>");
// document.write("Your Urdu Marks Is:" +"" + Urdu + "<br/>");
// document.write("Your Islamiat Marks Is:" + "" + Islamiat + "<br/>");
// document.write("Your Math Marks Is:" + "" + Math + "<br/>");
// document.write("Your Physics Marks Is:" + "" + Physics + "<br/>");
// document.write("Your Total Marks Is:" + "" + Obtained + "<br/>");
// document.write("Your percentage Is:" + "" + percentage + "<br/>");



// if(percentage >= 80)
// {
//     document.write("A+" + "<br/>");
// }
// else if(percentage >= 70)
// {
//     document.write("A" + "<br/>");
// }
// else if(percentage >= 60)
// {
//     document.write("B" + "<br/>");
// }
// else if(percentage >= 50)
// {
//     document.write("C" + "<br/>");
// }
// else if(percentage >= 40)
// {
//     document.write("D" + "<br/>");
// }
// else if(percentage >= 33)
// {
//     document.write("E"+ "<br/>");
// }
// else (percentage >= 0)
// {
//     document.write("fail !!!" + "<br/>");
// }



// if(percentage >= 80)
// {
//     document.write("Remarks"+ "Excellent" );
// }
// else if(percentage >= 70)
// {
//     document.write("Remarks"+ "Very Good");
// }
// else if(percentage >= 60)
// {
//     document.write("Remarks"+ "Good" );
// }
// else if(percentage >= 50)
// {
//     document.write("Remarks"+ "Fiar" );
// }
// else if(percentage >= 40)
// {
//     document.write("Remarks"+ "poor" );
// }
// else if(percentage >= 33)
// {
//     document.write("Remarks"+ "Very poor" );
// }
// else if(percentage >= 0)
// {
//     document.write("Remarks"+ "" + "Try Again!!!" );
// }



// var a = 12;
// var b = ++a + a++ + a - a++ - --a + a++;
//         13 + 13 + 14 - 14 - 14 + 14 
// alert(b);





// MArk Sheet For Assigment


var Name = prompt("Enter Your Name");
var FName = prompt("Enter Your Father Name");
var RollNumber = prompt("Enter Your Roll Number");

var English = prompt("Enter Your English Marks");
var Math = prompt("Enter Your Math Marks");
var Islamiat = prompt("Enter Your Islamiat Marks");
var Urdu = prompt("Enter Your Urdu Marks");

var Obtained = English + Math + Islamiat + Urdu / 400 * 100;

document.write("Name: " + Name +  "<br/>" + "<br/>");
document.write("Father Name: " + FName + "<br/>" + "<br/>");
document.write( "Roll num: " + RollNumber +  "<br/>" + "<br/>");
document.write("Percentage: " + Obtained +  "<br/>" + "<br/>");

