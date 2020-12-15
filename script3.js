console.log("Задача 3");
function polindrom(word) {
    let arr=[];
    arr=word.split('');
    let naob="";
    for (let i=arr.length-1; i>=0; i--) {
        naob=naob+arr[i];
    }
    if (naob==word) {
        console.log(`Слово "${word}" - полиндром`);
    }
    else {
        console.log(`Слово "${word}" - не полиндром`);
    }
}
polindrom(prompt("Введите слово для проверки: является ли оно полиндромом?"))