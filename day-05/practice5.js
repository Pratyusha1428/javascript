//functions
function greet(){
    console.log("hello pratyusha")
}
greet();
function square(num){
   return console.log(num**2);
}
console.log(square(5))

function checkEven(no){
    if (no%2==0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
(checkEven(56))

function findLargest(a,b,c){
    if(a>b && a>c)
    {
        console.log(a,"a is largest")
    }else if(b>a && b>c)
    {
        console.log(b,"b is largest")
    } 
    else 
    {
    console.log(c,"c is largest")
    }
}
findLargest(34,56,3);

function add(d,e){
    return d+e;
}
let result =add(5,3);
console.log(result);