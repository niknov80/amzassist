let title = document.getElementById('productTitle');
let price = document.getElementById('newBuyBoxPrice');

let textTitle = title.textContent;
let textPrice = price.textContent;
let str = textPrice.replace('$','');
let resultPrice = str / 2;
resultPrice.toFixed(2);
let searchPrice = textTitle + " $1..." + resultPrice;

console.log("textPrice:" + resultPrice);
let el = textTitle;
// let txt = 'Hello world!';


let h2 = document.createElement("h2");
let btn = document.createElement("a");
let btnInText = document.createTextNode('Найти в Google');
let staticURL = 'https://www.google.com/search?q=';
let reqURL = encodeURI(searchPrice);


btn.href = staticURL + reqURL;
btn.setAttribute('target', '_blank');

// title.append(el, h2);
title.append(el, btn);


btn.appendChild(btnInText);

