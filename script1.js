console.log("Задача 1");
let user = {
    first_name: "Кирилл",
    last_name: "Шальнов",
    age: "18",
    number_of_the_group: "201-321",
}
let property="Список свойств: ";
let i=0;
for (key in user) {
    i++
}
let j=0;
for (key in user) {
    j++
    if (j!=i) {
        property+=key+", "
    }
    else {
        property+=key
    }
}
let message=user.first_name+" "+user.last_name+" в возрасте "+user.age+" лет поступил в МПУ и учится в группе № "+user.number_of_the_group;
console.log(message);
console.log(property)

