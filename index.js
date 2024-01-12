function multiply(){
    var num1 = document.getElementById('numput').value;
    var num2 = document.getElementById('selectednum').value;
    var result = num1 * num2;
    document.getElementById('resultnum').innerHTML = 'result: ' + result;
    obj[`${num1} * ${num2}`] = result;
    localStorage.setItem('history', JSON.stringify(obj));
}



let history = document.getElementById('lastresultnum');
let obj = {};
if(localStorage.length > 0){
    let localStorageData = JSON.parse(localStorage.getItem('history'));
    obj = {...localStorageData};
    for(let n in obj){
        history.innerHTML += `<br>${n}=${obj[n]}`;
    }
}