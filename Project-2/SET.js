//Simple Expense Tracker

const expenses = [250 , 120 , 500 , 80 , 300];
let i=0;
let s= 0;
while (i< expenses.length) 
{s=s+expenses[i];
    i++;
}
let total_spending = s;
console.log(total_spending);

// average spending
let average_spending = total_spending/(expenses.length);
console.log(average_spending);

// maximum spending
let max_spend = expenses[0];
i=0;
while(i<expenses.length){ 
    if (max_spend<expenses[i]){
    max_spend=expenses[i];
    }
    i++;
}
console.log(max_spend);

// minimum spend 
let min_spend = expenses[0];
i=0;
while(i<expenses.length){
    if(min_spend>expenses[i]){
        min_spend=expenses[i];
    }
    i++;
}
console.log(min_spend)

// count how many expenses are greater than 200?
let count=0;
i=0;
while(i<expenses.length){
    if(expenses[i]>200){
        count++;
    }
i++;
}
console.log(count);

// tell whether expenses are within budget or not?
let budget =1500;
if(total_spending <= budget){
    console.log("Under Budget")
}else{
    console.log("Over Budget")
}