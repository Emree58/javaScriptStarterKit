console.log("Merhaba kodlama.io")

//JS type safe degildir
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.1
}
 console.log(dolarDun)

 const euroDun = 11.2
 //euroDun = 11

 console.log(euroDun);
//array
//camelCase
//PascalCase
 let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","özel konut kredileri"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")



 console.log(konutKredileri)