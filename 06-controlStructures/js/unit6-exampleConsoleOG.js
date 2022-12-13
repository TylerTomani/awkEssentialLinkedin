// const core = require("http-server/lib/core");

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
        FS="\t";
        print "<table>";
        print "<tr>";
        print "\t<th>Bowler</th>";
        for(i=0 ; i < 7 ; i++){
          print "\t<td>Round" , i "</td>";
        }
        print "</tr>";
}


`
const inputEl = document.querySelector(".console-input");
const resultEl = document.querySelector(".console-result");

let inputArray = [];
let correctArray1 = correctInput1.split("")


let correct = true;
inputEl.addEventListener("input", (e,i) => {
    let inVal = e.target.value;
    const inputArray = inVal.split("")
    
    let nextChar = "";
    inputArray.forEach((el,index,array) => {
        // nextChar[index] = correctArray1[i]
        if(correctArray1[index] === " "){
            for(let i = index; i < correctArray1.length; i++){
                nextChar = correctInput1[i]
                if(correctArray1[i] !== " "){
                    // console.log("correctArray1",correctArray1[i])
                    // console.log(i)
                    break;            
                }
            }
        } 
        console.log("Input Value:",inVal)
        console.log("nextChar",nextChar)
        if(inVal === nextChar){
            console.log("The input is Next Character")
        }
        


        if(inputArray[i] === correctArray1[i]){
            correct = true;
        } else {
            correct = false
        }

        
        
        
    })
    // console.log(correct)


})
