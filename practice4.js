let num=[1,2,3,4,5]//1
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

let no=[2,4,3,5,16]  //2
for(let j=0;j<no.length;j++){
    if(no[j]%2==0){ //j%2 checks whether the index is even 
        //no[j] checks whether the number stored at index is even
        console.log(no[j])
    }   
}
let number=[4,76,84,45,3]
for(let k=0;k<number.length;k++){
    if(number[k]>10){
        console.log(number[k])
    }
}

let marks=[45,78,32,91,66]
for(let a=0;a<marks.length;a++){// arrays start at index 0, if started from 1 they will miss the first element
    if(marks[a]>=50){
        console.log("pass")
    }else{
        console.log("fail")
    }
}