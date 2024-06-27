const question01 = "Questuion 01:";
const heading01 = "Output:";
document.write(`<h1> ${question01} <br> ${heading01} </h1>`);

let obj1 = {
    name: "ABC",
    age: 99,
    occupation: "Software Developer",
    email: "cba@example.com",
    phoneNumber: "xxxxxxxxxxx",
    instituteName: "Jawan Pakistan",
    education: "XYZ",
};

let obj1Complete = `Name: ${obj1.name} <br> <br> Age: ${obj1.age} <br> <br> Occupation: ${obj1.occupation} <br> <br> Email: ${obj1.email} <br> <br> Phone Number: ${obj1.phoneNumber} <br> <br> InstituteName: ${obj1.instituteName} <br> <br> Education: ${obj1.education}`;
document.write(obj1Complete);

const question02 = "Questuion 02:";
const heading02 = "Output:";
document.write(`<h1> ${question02} <br> ${heading02} </h1>`);

let obj2 = {
    student1: ["English Marks 85 Urdu Marks 70 Math Marks 80: (Total Marks 300 Total Obtain Marks 235)"],
    student2: ["English Marks 80 Urdu Marks 85 Math Marks 85: (Total Marks 300 Total Obtain Marks 250)"],
    student3: ["English Marks 60 Urdu Marks 70 Math Marks 85: (Total Marks 300 Total Obtain Marks 215)"],
    student4: ["English Marks 70 Urdu Marks 85 Math Marks 70: (Total Marks 300 Total Obtain Marks 225)"],
}

const totalObtainedMarks = 925;
const totalMarks = 1200;
const percentage = (totalObtainedMarks/totalMarks) * 100;
const grade = "A"

let obj2Complete = `<h2> Ali: ${obj2.student1} <br> <br> Saad: ${obj2.student2} <br> <br> Saeed: ${obj2.student3} <br> <br> Aaif: ${obj2.student4} <br> <br> Total Obtained Marks: ${totalObtainedMarks} <br> <br> Total Marks: ${totalMarks} <br> <br> Percentage: ${percentage.toFixed(2)} <br> <br> Grade: ${grade}</h2> `;
document.write(obj2Complete);

const question03 = "Questuion 03:";
const heading03 = "Output:";
document.write(`<h1> ${question03} <br> ${heading03} </h1>`);

document.write("<h1>For Var </h1>");

var a = "Muhammad";
document.write(`${a} <br>`); 

var abc;
var a = "Faraz";
document.write(`${a} <br>`); 

var a = "Muhammad";
document.write(`${a} <br>`); 


document.write("<h1>For Let </h1>");

let b = "Muhammad";
document.write(`${b} <br>`); 

b = "Faraz";
document.write(`${b} <br>`);


document.write("<h1>For Const </h1>");

const c = "Muhammad Faraz";
document.write(`${c} <br>`); 