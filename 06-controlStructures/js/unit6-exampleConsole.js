const body = document.querySelector("body")    
const consoleContainer = document.querySelector(".console-container")
const runBtn = document.querySelector(".runBtn");
const consoleResult = document.querySelector("#console-result")
let correct = false;
const correctResult1 = `<table>
<tr>
	<th>Bowler</th>
	<td>Round 0</td>
	<td>Round 1</td>
	<td>Round 2</td>
	<td>Round 3</td>
	<td>Round 4</td>
	<td>Round 5</td>
	<td>Round 6</td>
</tr>
`
const correctInput1 =`BEGIN {
        FS="\\t";
        print "<table>";
        print "<tr>";
        print "\\t<th>Bowler</th>";
        for(i=1 ; i < 7 ; i++){
          print "\\t<td>Round" , i "</td>";
        }
        print "</tr>";
}


`

const inputEl = document.querySelector(".console-input");
const resultEl = document.querySelector(".console-result");
let correctAnswerArray = correctInput1.split("")
let spaceIndex = 0;
let inputArray = []
let noSpaceArray = []


// Fills nextCharArray[] with all element that are not spaces
correctAnswerArray.forEach((el,i,array) => {
    if( array[i] === "\t" || array[i] === "\n" || array[i] === "" || array[i] === ' ' || array[i] === undefined){
        correctAnswerArray.splice(i,1);
        // console.log(i)
    }
})


inputEl.addEventListener("input", (e) => {
    let val = e.target.value
    inputArray = val.split('')

    let inputString = "";
    for(let i = 0; i < inputArray.length; i++){
        let el = inputArray[i];
        /* I Can not exculde \t's because it is included in the example,
        plus the tab key changes element when clicked inside the text area*/
        if(!(el == " ") && !(el == '\n') && !(el == '\r')){
            inputString += el
        }
    }

    let answerString = ''
    for(let i = 0; i < correctAnswerArray.length -1; i++){
        let el = correctAnswerArray[i]
        if(el !== ' '){
            answerString += el;
        }

    }
    
    if(inputString === answerString){    
        correct = true
    } else {   
        correct = false; 
    }
    if(inputArray.length === 0){
        consoleContainer.style.background="royalblue"
        consoleContainer.style.background="royalblue"
        consoleResult.innerText = "";
        consoleResult.innerHTML = "";
    }
    if(correct){
        consoleContainer.style.background="green"
    }else {
        consoleResult.innerHTML = "";
        consoleResult.innerText = "Error - add line specific";
    }
    // console.log("inputArray",inputArray)
    console.log("input ",inputString);
    console.log("answer",answerString);
    // console.log(inputString);
    // console.log(answerString);
})

runBtn.addEventListener("click", e => {
     if(inputArray.length === 0){
        consoleContainer.style.background="royalblue"
        consoleResult.innerText = "";
    }
    if(correct){
        consoleResult.innerHTML = correctResult1;
        consoleResult.innerText = correctResult1;
    } else {
        consoleContainer.style.background="tomato"
        consoleResult.innerHTML = "";
        consoleResult.innerText = "Error - add line specific";

    }
})