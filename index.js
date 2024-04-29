let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let addEl = document.getElementById('add-btn')
let totalEl = document.getElementById('total')

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + '-'
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
function add() {
    let prevEntries = (saveEl.textContent += countStr)
    //Im trying to break whatever is on saveEl into an arry
    let arr = prevEntries.split(" ")
    //[5, '-', 5, '-',6]
    //Once its in an array, I want to push the numbers only, into a new arr
    let newArr = []
    let total = 0
    for(let i = 0; i< arr.length; i++){
        if(isNaN(arr[i]) === true){
            arr[i].push(newArr)
            for(let j = 0; j < newArr.length; j++){
                total += newArr[j];
                
            }
        }
        return total;
        }
        
    
     totalEl.textContent += total
    
   
}

console.log("Let's count people on the subway!")
