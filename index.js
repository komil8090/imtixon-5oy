let counter = 0;
let corrects = 0;

let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");

let sovollar = ["2 + 2 =", "2 + 3=", "9 - 6 =", "5 * 5 ="];
let jovoblar = ["4", "5", "3", "25"];

h1.textContent = sovollar[0];

button.addEventListener("click", function (event) {
    event.preventDefault();

    let answer = input.value;

    if (answer === jovoblar[counter]) {
        corrects = corrects + 1;
    }

    counter = counter + 1;

    h1.textContent = sovollar[counter];

    input.value = "";

    if (counter === sovollar.length) {
        p.textContent = `Siz ${corrects}ta sovolga togri javop berdingiz`;
    } 
});