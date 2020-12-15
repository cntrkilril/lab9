console.log("Задача 4");
function scalarMultiplication(chislo,matr) {
    for (let i=0;i<matr.length;i++) {
        let arr=[];
        let str="";
        for (let j=0;j<matr[i].length;j++) {
            matr[i][j]=matr[i][j]*chislo;
            arr.push(matr[i][j])
            str+=matr[i][j];
            for (let m=0;m<6-String(matr[i][j]).length;m++) {
                str+=" "
            }
        }
        console.log(str)
    }
}
scalarMultiplication(3, [[1,2,3],[4,5,6],[7,8,9]])
