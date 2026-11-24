// console.log("Nishanth P K");

// //keywords - var, let, const
// var age=20; //declaration
// age=40;     //reinitialisation is possible

// var age=50  //redeclaration is possible in var
// console.log("Age: ",age);

// let course="AIML"  //decalration and initialisation
// course="CSE"       //Updation
// //redeclaration is not possible;

// const pi=3.14345
// //both reinitialisation and redeclaration is not possible

// let username="nishanth";
// let password="1234";
// if(username=="nishanth" && password=="1234"){
//     console.log("Login Successful");
// }else{
//     console.log("Login Failed");
// }

// let accno=12345678;
// let Balance=100000;
// let variable=input("Enter your account number: "); 
// let amount=input("Enter the amount to withdraw: ");
// if(variable==accno){
//     console.log("Withdrawal Successful");
//     if(Balance>amount){
//         Balance-=amount;
//     }else{
//         console.log("Insufficient Balance");
//     }
// }
// else{
//     console.log("Incorrect Account Number");
// }

// let i=0;
// function model(name, age){
//     console.log("Model number ${i} is ${name} and age is ${age}");
//     i++;
// }
// for(let i=0;i<5;i++){
//     let name=input("Enter the name of the Model: ");
//     if(name=="exit") break;
//     let age=input("Enter the age of the Model: ");
//     model(name,age);
// }

// function employee(name, company,gender){
//     if(gender=='M' || gender=='m'){
//         console.log("Name of the Student is ${name} and he works in the company ${company}");
//     }else if(gender=='F' || gender=='f'){
//         console.log("Name of the Student is ${name} and she works in the company ${company}");
//     }
// }
// let num=input("Enter the total number of Students: ");
// for(let i=0;i<num;i++){
//     let name=input("Enter the name of the Student: ");
//     let company=input("Enter the name of the Company: ");
//     let gender=input("Enter the Gender of the Student (M / F): ");
//     employee(name,company,gender);
// }

let data1 = function(){
    return "Hello Zharif";
}
console.log(data1());

let data2 = () => {
    return "Hello Nishanth";
}       
console.log(data2());