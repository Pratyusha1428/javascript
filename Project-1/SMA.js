// Student Marks Analyzer
const marks = [72, 85, 64, 91, 56];
let total_marks = 0;
let i = 0;

while (i < marks.length) {
    total_marks += marks[i];
    i++;
}

console.log(total_marks);
let average_marks = (total_marks/marks.length);
console.log(average_marks);

let highest_marks =marks[0];
i=0;

while(i<marks.length){ 

    if(marks[i]>=highest_marks){
    highest_marks=marks[i];
}
    i++;
}
console.log(highest_marks);





