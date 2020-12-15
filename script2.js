console.log("Задача 2");
function CutArr(arr) {
    let len=arr.length;
for (let i=0; i<len; i++) {
    if (i!=len-1) {
        console.log(arr.shift()+" осталось ["+arr+"]")
    }
    else {
        console.log(arr.shift())
    }
}
}
CutArr([1, 2, 3, 4, 5]);
