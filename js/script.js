// у вас есть 3 вопроса 
// спрашивает ваше имя
// фамилию 
// женаты ли вы 
// вы создать объекь с этими значениями



let n = prompt('Ваше имя')
let s = prompt('Фамилия')
let m = confirm('Женаты ли вы?')
let ilon = {
    name: n,
    surname: s,
    ismarried: m
}
console.log(ilon);


// let a = 2                  a = 3
// let b = 3                  b = 2
// поменяйте значения а и b местами
// поменяйте значения а и b местами 
// не используя дополнительных переменых


let a = 3
let b = 2
console.log(a, b);
a = b, ([b=a][0])
console.log(a);


// из банковской системы создать 2 аккаунта 
// 2 объекта
// и сделать банкувскую систему на 2 человек


let account_1 = prompt('Name')
let balance_1 = 30000
let account_code_1 = 1111
if(account_1 == 'Rokki'){
    let account_code_1 = prompt('Code')
    if(account_code_1 == 1111){
        let show_1 = alert('Your balance is 30000')
        let account_money_1 = prompt('How much money want you get?')
        if(account_money_1 <= 30000){
            let result_1 = alert('Everything went well!')
            let account_balance_1 = confirm('Do you want to see the balance?')
            if(account_balance_1 == true){
                alert(`You have ${balance_1 - account_money_1}`)
            }
        }else{
            alert('Lack of money bro')
        }
    }else{
        alert('Incorrect code')
    }
}else{
    alert('undefined')
}



let account_2 = prompt('Name')
let balance_2 = 50000
let account_code_2 = 6666
if(account_2 == 'Vandam'){
    let account_code_2 = prompt('Code')
    if(account_code_2 == 6666){
        let show_2 = alert('Your balance is 50000')
        let account_money_2 = prompt('How much money want you get?')
        if(account_money_2 <= 50000){
            let result_2 = alert('Everything went well!')
            let account_balance_2 = confirm('Do you want to see the balance?')
            if(account_balance_2 == true){
                alert(`You have ${balance_2 - account_money_2}`)
            }
        }else{
            alert('Lack of money bro')
        }
    }else{
        alert('Incorrect code')
    }
}else{
    alert('undefined')
}


// let a = {price: 30}
// let b = {price: -40}
// let c = {price: 50}
// объеденить и посмотреть ответ
// в переменую тотал сложить все прайсы и дать ответ


let q = {price: 30}
let w = {price: -40}
let e = {price: 50}
let total = Object.assign(q.price + w.price + e.price)
console.log(total);


