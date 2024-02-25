// Basic Exercise 1
let arr = [1, 7, -3, 9];

let max=arr[0]
arr.forEach(value => {
    if( value > max) {
        max = value
    }
});
console.log("The biggest value is "  + max);

//Basix Exercise 2

const randomFactor = [-1,1];

let random = Math.floor(Math.random() * 50 * randomFactor[Math.floor(Math.random()+0.5)]); 
if (random < 10) { //temp: -49 - 9
    document.write(`The weather is cold today at ${random} degrees.<br>`);
    document.body.style.backgroundColor  = "#0559ad";
    document.getElementById("img").src = "cold.jpg";

} 
else if(random > 9 && random < 33) {        //temp: 10 - 32
    document.write(`The weather is mild today at ${random} degrees.<br>`);
    document.body.style.backgroundColor  = "#559e75";
    document.getElementById("img").src = "mild.jpg";
}
else { //temp: 33 - 49
    document.write(`The weather is hot today at ${random} degrees.<br>`);
    document.body.style.backgroundColor = "#cc5f41";
    document.getElementById("img").src = "hot.jpg";

}

// Intermediate 1
let Martin =[76,64, 81, 57, 94];
let Thomas =[85, 49, 81, 72,55];
let Klaus =[65, 91, 84, 67, 85];
let Maria =[93, 70, 81, 64, 84];
let David =[81, 99, 71, 100, 69];

const studentsArr = [ Martin, Thomas, Klaus, Maria, David];

function avg(array) {
    let currentVal = 0;
    array.forEach(val => {
        currentVal = currentVal + val
    });
    return currentVal / array.length;
    }

    let classAvg = 0;
for(let arr of studentsArr) {
  console.log("The average grade "+avg(arr) + evaluateGrade(avg(arr)));
  classAvg = classAvg + avg(arr);
}
let result = classAvg / studentsArr.length
console.log("The class average = "+result + evaluateGrade(result));


function evaluateGrade(grade){

    if(grade < 60){
        return 'F'
    }else if(grade < 70){
        return 'D'
    }else if(grade < 80){
        return 'C'
    }else if(grade < 90){
        return 'B'
    }else{
        return 'A'
    }
}// hi Serri! would you please tell me how can i add the names? thanks!

// Intermediate exercise2 %= modulo -> it gives you the rest of the division
for ( let i = 1; i<101; i++){
    if (i%15==0) {
        console.log("FizzBuzz"); 
    } else if (i%5==0) {
        console.log("Buzz");
    } else if (i%3==0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// Intermediate exercise 3
for ( let i = 1; i<7; i++){ //this counts the lines
    for (let j = 0;j<i; j++){//this compares j to the line you are in
        document.write("*");//this outputs as many stars as the line you are in
    }
    document.write("<br>");
}

// Challenge
    const students= ["Kristine", "Shawen","Vanessa","Anna", "Mia"];
    const gradesMath = [ 90,68,100,49,59];

    var nameEntered = prompt("Type your name!");

if (students.includes(nameEntered)){ // https://www.freecodecamp.org/news/check-if-an-item-is-in-an-array-in-javascript-js-contains-with-array-includes/
    let index = students.indexOf(nameEntered) 
    if (gradesMath[index]<60){
        document.getElementsByClassName("grade")[0].style.color = "red";
    }else if (gradesMath[index]<70){
        document.getElementsByClassName("grade")[0].style.color = "yellow";
    }else if (gradesMath[index]<100){
        document.getElementsByClassName("grade")[0].style.color = "green";
    }else {
        document.getElementsByClassName("grade")[0].style.color = "blue";
    }
    document.getElementsByClassName("grade")[0].innerHTML = nameEntered + " has the grade " + gradesMath[index];
}else{
    document.getElementsByClassName("grade")[0].innerHTML = "sorry we don't have your grade on file.";
    
}


