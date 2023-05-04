let total = 0;
let input = 0;
do {
    total += parseInt(input);
    input = prompt("Введiть число", "");
} while (input);
console.log(total);