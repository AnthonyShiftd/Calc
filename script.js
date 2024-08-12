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
    else if(classlt === 'procent'){
        item.addEventListener('click', ()=>procent(item))
    }
    else if(classlt === 'equals'){
        item.addEventListener('click', ()=>results(item))
    }
    else if(classlt === 'fr'){
        item.addEventListener('click', fr)
    }
    else if(classlt === 'plusMinus'){
        item.addEventListener('click', plusMinus)
    }
})}


//Функционал цифр
function num(item){
        statusCalc.statusState = false
        printDisplay.NumArr.push(item.innerHTML)
        printDisplay.displayNum =Number(`${printDisplay.displayNum}` + `${printDisplay.NumArr[printDisplay.NumArr.length-1]}`)
        display.innerHTML = printDisplay.displayNum
        console.log(printDisplay.displayNum)
        if(statusCalc.statusFr === true){
            if(printDisplay.result === statusCalc.memory[statusCalc.memory.length-1]){
                printDisplay.displayNum = Number(`${printDisplay.result}` + `${printDisplay.displayNum}`)/10
            }
            else{
            printDisplay.displayNum = printDisplay.displayNum/10
            }
            display.innerHTML = printDisplay.displayNum
            statusCalc.statusFr = false
        }
}
        


function symb(item){
   switch(statusCalc.statusState){
   case true: {
        statusCalc.state.pop()
        statusCalc.state.push(item.innerHTML)
        break
    }
    case false:{
        statusCalc.statusState = true
        statusCalc.memory.push(printDisplay.displayNum)
        printDisplay.NumArr = []
        statusCalc.state.push(item.innerHTML)
        if(statusCalc.memory.length === 2){
            operation(statusCalc.memory[0], statusCalc.memory[1])
            display.innerHTML = printDisplay.result
            statusCalc.memory = [printDisplay.result]
            statusCalc.result = 0
            }
        printDisplay.displayNum = 0
        printDisplay.numTap = 0
   }}}


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

 //Функционал +-
 function plusMinus(){
    statusCalc.memory.push(printDisplay.displayNum*(-1))
    printDisplay.displayNum = statusCalc.memory[statusCalc.memory.length-1]
    display.innerHTML = statusCalc.memory[statusCalc.memory.length-1]
    if(statusCalc.memory.length>0){
    statusCalc.memory[statusCalc.memory.length-1] = statusCalc.memory[statusCalc.memory.length-2]
    statusCalc.memory.shift()}}

    //Функционал =
 function results(item){
    statusCalc.statusState = false
    statusCalc.statusEquals = true
    symb(item)
    statusCalc.memory = [printDisplay.result]
    statusCalc.state = []
 }

 //Функционал кнопки AC
function clean(){
    display.innerHTML = 0
    statusCalc.state = []
    statusCalc.memory = []
    statusCalc.statusFr = false
    statusCalc.statusState = false
    printDisplay.result = 0
    printDisplay.NumArr = []
    printDisplay.displayNum = 0
    }

    //Функционал %
function procent(item){
    statusCalc.memory.push(printDisplay.displayNum)
    printDisplay.displayNum = statusCalc.memory[statusCalc.memory.length-2]/100*statusCalc.memory[statusCalc.memory.length-1]
    statusCalc.memory.push(printDisplay.displayNum)
    statusCalc.memory[statusCalc.memory.length-2] = statusCalc.memory[statusCalc.memory.length-3]
    statusCalc.memory.shift()
    statusCalc.state.push(item.innerHTML)
    operation(statusCalc.memory[statusCalc.state.length-2],statusCalc.memory[statusCalc.state.length-1])
    statusCalc.state.pop()
    display.innerHTML = printDisplay.result
    statusCalc.memory = [printDisplay.result]
    statusCalc.state = []
}

    //Переменные
    const allBtn = document.querySelectorAll('.btn')
    const display = document.querySelector('.calc-screen')
    const statusCalc = {
        state: [],
        memory: [],
        statusState: false,
        statusEquals: false,
        statusFr: false,
    }
    const printDisplay = {
        NumArr:[],
        result: 0,
        displayNum: 0,
    }
    
    btnOnclick()


//     case false: {
//     statusCalc.statusFr = false
//     statusCalc.memory.push(printDisplay.displayNum)
//     statusCalc.state.push(item.innerHTML)
//     statusCalc.numTap = 0
//     if(statusCalc.memory.length === 2){
//         operation(statusCalc.memory[0], statusCalc.memory[1])
//         display.innerHTML = printDisplay.result
//     }
//     else if(statusCalc.memory.length>=2 && statusCalc.statusEquals === true){
//         operation(printDisplay.result, statusCalc.memory[statusCalc.memory.length-1])
//         display.innerHTML = printDisplay.result
//         statusCalc.statusEquals = false
//         console.log(statusCalc)
//         console.log(printDisplay)
//     }
//     else if(statusCalc.memory.length>=2 && statusCalc.statusEquals === false){
//         operation(printDisplay.result, statusCalc.memory[statusCalc.memory.length-1])
//         display.innerHTML = printDisplay.result
//     }
//     statusCalc.statusState = true
//     printDisplay.NumArr = []
//     printDisplay.displayNum = 0}
// }}








 
    
    //     if(printDisplay.displayNum === 0){
    //         printDisplay.result = printDisplay.result*(-1)
    //         display.innerHTML = printDisplay.result
    //     }
    //     else{
    //     printDisplay.displayNum = printDisplay.displayNum*(-1)
    //     display.innerHTML = printDisplay.displayNum
    //     }
    //     console.log(statusCalc)
    //     console.log(printDisplay)


 



    








































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
