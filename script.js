//Добавление событий на кнопки
function btnOnclick(){allBtn.forEach((item)=>{
    const classlt = item.classList[item.classList.length-1]
    const inner = item.innerHTML
    if(classlt === 'AC'){
    item.addEventListener('click', clean)
    }
    else if(Number.isFinite(Number(inner)) === true){
        item.addEventListener('click', ()=>num(item))
    }
    else if(classlt === 'division'||classlt === 'mult'||classlt === 'minus'||classlt === 'plus'){
        item.addEventListener('click', ()=>symb(item))
    }
    else if(classlt === 'equals'){
        item.addEventListener('click', ()=>results(item))
    }
    else if(classlt === 'fr'){
        item.addEventListener('click', fr)
    }
    // else if(classlt === 'plusMinus'){
    //     item.addEventListener('click', plusMinus)
    // }
})}


//Функционал цифр
function num(item){
        printDisplay.NumArr.push(item.innerHTML)
        printDisplay.displayNum =Number(`${printDisplay.displayNum}` + `${printDisplay.NumArr[statusCalc.numTap]}`)
        display.innerHTML = printDisplay.displayNum
        statusCalc.numTap++
        console.log('num')
        if(statusCalc.statusFr === true){
            printDisplay.displayNum = printDisplay.displayNum/10
            display.innerHTML = printDisplay.displayNum
            statusCalc.statusFr = false
        }
}


function symb(item){
    statusCalc.statusFr = false
    statusCalc.memory.push(printDisplay.displayNum)
    statusCalc.state.push(item.innerHTML)
    statusCalc.numTap = 0
    if(statusCalc.memory.length === 2){
        operation(statusCalc.memory[0], statusCalc.memory[1])
        display.innerHTML = printDisplay.result
    }
    else if(statusCalc.memory.length>=2 && statusCalc.statusEquals === true){
        display.innerHTML = printDisplay.result
        statusCalc.statusEquals = false
        console.log(statusCalc)
        console.log(printDisplay)
    }
    else if(statusCalc.memory.length>2){
        operation(printDisplay.result, statusCalc.memory[statusCalc.memory.length-2])
        display.innerHTML = printDisplay.result
    }
    printDisplay.NumArr = []
    printDisplay.displayNum = 0
    console.log(typeof(printDisplay.result))
}

function operation(fn, sn){
    if(statusCalc.state[statusCalc.state.length - 2] == '÷'){
        printDisplay.result = fn / sn
    }
    else if (statusCalc.state[statusCalc.state.length - 2] == '×'){
        printDisplay.result = fn * sn
    }
    else if(statusCalc.state[statusCalc.state.length - 2] == '−'){
        printDisplay.result = fn - sn
    }
    else if(statusCalc.state[statusCalc.state.length - 2] == '+'){
        printDisplay.result = fn + sn
    }
    }

 //Функционал точки
 function fr(){
    statusCalc.statusFr = true
 }


//  //Функционал +-
//  function plusMinus(){
//     statusCalc.memory.pop()
//         if(printDisplay.displayNum === 0){
//             printDisplay.result = printDisplay.result*(-1)
//             display.innerHTML = printDisplay.result
//             statusCalc.memory.push(printDisplay.result)
//         }
//         else{
//         printDisplay.displayNum = printDisplay.displayNum*(-1)
//         display.innerHTML = printDisplay.displayNum
//         statusCalc.memory.push(printDisplay.displayNum)
//         }
//         console.log(statusCalc)
//         console.log(printDisplay)
//     }

 //Функционал =
 function results(item){
    statusCalc.statusEquals = true
    symb(item)
    statusCalc.memory.push(printDisplay.result)
    statusCalc.state.pop()
    
 }

//Функционал кнопки AC
function clean(){
    display.innerHTML = 0
    statusCalc.numTap = 0
    statusCalc.state = []
    statusCalc.memory = []
    statusCalc.statusFr = false
    printDisplay.resultArr = []
    printDisplay.result = 0
    printDisplay.NumArr = []
    printDisplay.displayNum = 0
    
    }


    //Переменные
    const allBtn = document.querySelectorAll('.btn')
    const display = document.querySelector('.calc-screen')
    const statusCalc = {
        numTap: 0,
        state: [],
        memory: [],
        statusEquals: false,
        statusFr: false,
    }
    const printDisplay = {
        resultArr:[],
        NumArr:[],
        result: 0,
        displayNum: 0,
    }
    
    btnOnclick()








































// //Функционал защиты от повтора чисел
// function noErrNum2(item){
//     statusCalc.tap = 0
//     statusCalc.memory.push(printDisplay.result)
//     if(statusCalc.memory[0] == false){
//         statusCalc.firstNumStat = false
//         console.log(1)
//         }
//     else if(statusCalc.memory[0] != false && statusCalc.memory[1] == false){
//         statusCalc.firstNumStat = true
//         statusCalc.resultArr = []
//         console.log(2)
//     }
//     else if(statusCalc.memory[0] != false && statusCalc.memory[1] != false){
//         printDisplay.secondNum = 0
//         printDisplay.secondNumArr = []
//         statusCalc.secondNumStat = true
//         console.log(statusCalc.memory)
//         console.log(3)
//     }
// }


// //Функционал проверки операторов и совершения операции
// function readSymb(item){
//     if(statusCalc.state === '÷'){
//         statusCalc.memory.push(memory[0]/memory[1])
//         }
//     else if(statusCalc.state === '×'){
//         statusCalc.memory.push(memory[0]*memory[1])
//     }
//     else if(statusCalc.state === '−'){
//         statusCalc.memory.push(memory[0]-memory[1])
//     }
//     else if(statusCalc.state === '+'){
//         statusCalc.memory.push(memory[0]+memory[1])
//     }
//     display.innerHTML = printDisplay.result
// }

// //Функционал операторов
// function symb(item){
//     noErrNum2(item)
//     console.log('Only')
//     if(printDisplay.result!=0 && statusCalc.secondNumStat === true){
//         console.log('Suck')
//         readSymb(item)
//     }
//     }










/*
function noErrNum(item){
        statusCalc.tap = 0
        statusCalc.operator = item.id
    if(statusCalc.firstNumStat === false && printDisplay.secondNum === 0){
        statusCalc.firstNumStat = true
        console.log('Symbol')
        printDisplay.secondNumArr = []}
    else if(statusCalc.firstNumStat === true && printDisplay.firstNum != 0){
        statusCalc.firstNumStat = false
        console.log('Symbol1')
        printDisplay.firstNum = 0
        printDisplay.firstNumArr = []}
    else if(statusCalc.firstNumStat === false && printDisplay.secondNum != 0){
        statusCalc.firstNumStat = true
        console.log('Symbol2')
        printDisplay.secondNum = 0
        printDisplay.secondNumArr = []}
    else{
        statusCalc.firstNumStat = false
        console.log('Symbol3')
        printDisplay.firstNum = 0
        printDisplay.firstNumArr = []
    }
}
*/



















// let a = ''
// let b = ''
// let c = ''
// let sumbol = ''
// let results = false

// const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
// const action = ['−', '+', '×', '÷'] 
// //Вывод
// const out = document.querySelector('.calc-screen')
// //Функция сброса
// function clear(){
//     a = ''
//     b = ''
//     c = ''
//     sumbol = ''
//     results = false
//     out.textContent = 0
// }

// document.querySelector('.AC').onclick = clear

// let buttonList = document.querySelectorAll('.btn')
// buttonList.forEach(function(btn){
//     if(btn.innerHTML === 'AC'){return}
//     else{
//     btn.addEventListener('click', eventBtn)}})

//     function eventBtn(){
//         const key = event.target.textContent
//         console.log(key)
//         if(num.includes(key)){
//             if (b ==='' && sumbol === ''){
//                 a += key
//                 out.textContent = a
//                 console.log(`a = ${a}`)
//             }
//             else if(a!=='' && b!=='' && results) {
//                 b = key
//                 results = false
//                 out.textContent = b
//                 console.log(`b = ${b}`)
//             }
//             /* else if(a!=='' && b!=='' && c!=='' && sumbol!=='')
//                 {
//                     out.textContent = c
//                     a = c
//                     b += key
//                 out.textContent = b} */
//             else{
//                 b += key
//                 out.textContent = b
//                 console.log(`b = ${b}`)
//             }
//             return
//         }
        
//     if(action.includes(key)){
//     sumbol = key
//     out.textContent = sumbol
//     console.log(`sumbol = ${sumbol}`)
//     return
//     }

//     if (key === '=') {
//         if(b === '') {b = a}
//         switch(sumbol) {
//             case '+':
//                 c = (+a) + (+b)
//                 break
//             case '−':
//                 c = a - b
//                 break
//             case '×':
//                 c = a * b
//                 break
//             case '÷':
//                 if (b === '0') {
//                     out.textContent = 'No'
//                     a = ''
//                     b = ''
//                     sumbol = ''
//                     return
//                 }
//                 c = a / b
//                 break
//         }   
//         results = true
//         out.textContent = c
//     }
// }
