

let marks1=87
let attendance1= 56

if(marks1>=50)
    if(attendance1>=75){
        console.log("passed")
    }else{console.log("failed due to attendance")
    }
else{console.log("failed due to marks")}

const readline=require("readline");
const r2=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r2.question("enter your marks:",(marks2)=> {
    r2.question("enter your attendance :",(attendance2)=> {
        marks2=Number(marks2);
        attendance2=Number(attendance2);
    if(marks2>=50)
      if(attendance2>=75){
        console.log("passed")
      }else{console.log("failed due to attendance")
     }
    else{console.log("failed due to marks")}

        
            r2.close();
    
        });
});
