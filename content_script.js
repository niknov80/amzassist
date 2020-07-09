let title = document.getElementById('title');


let textTitle = title.textContent;
let el = textTitle;


let h2 = document.createElement("h2");
let btn = document.createElement("a");
let btnInText = document.createTextNode('Найти в Google');

btn.href = 'https://www.google.com/search?q=';
btn.setAttribute('target', '_blank');

title.append(el, h2);
title.append(el, btn);


btn.appendChild(btnInText);

