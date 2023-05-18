console.log("Kanpur city is mine");
class student{
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
        //console.log("constructor Function")
    }
    sandeep(){
        console.log(`Hello ${this.name} Your age ${this.age} ${this.address}`);
    }
     static nikhil(){
        console.log("arun here")
    }

 }

let student1=new student("shivkumar", 23 , "baragoan");
//let student2=new student("nikhil", 23, "puranpur");
student1.sandeep()
//student2.sandeep()
student.nikhil()
//console.log(student)





















