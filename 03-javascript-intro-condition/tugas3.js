// soal 1
let namaLengkap = "Dzulfikar Fathin";
console.log(namaLengkap);

// soal 2
let word = 'JavaScript';
let second = 'is';
let third = 'awesome'
console.log(word + " " + second+ " " + third);

// soal 3
let hello = 'Hello';
let world = 'World!!';
console.log(`${hello} ${world}`);

// soal 4
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";
let kelilingPersegiPanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));
console.log(kelilingPersegiPanjang);

// soal 5
let sentences = 'wah javascript itu keren sekali';

let firstWord= sentences.substring(0, 3);
let secondWord= sentences.substring(4, 14);
let thirdWord= sentences.substring(15, 18);
let fourthdWord= sentences.substring(19, 24);
let fifthdWord= sentences.substring(25);


console.log('Kata Pertama: ' + firstWord);
console.log('Kata Kedua: ' + secondWord);
console.log('Kata Ketiga: ' + thirdWord);
console.log('Kata Keempat: ' + fourthdWord);
console.log('Kata Kelima: ' + fifthdWord);

// soal 6
var sentence = "I am going to be React JS Developer";

var theFirstWord = sentence[0];
var theSecondWord = sentence[2] + sentence[3];
var theThirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var theFourthdWord = sentence[11] + sentence[12];
var theFifthWord = sentence[14] + sentence[15];
var theSixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var theSeventhWord = sentence[23] + sentence[24];
var theEighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] 
                 + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + theFirstWord);
console.log('First Word: ' + theSecondWord);
console.log('First Word: ' + theThirdWord);
console.log('First Word: ' + theFourthdWord);
console.log('First Word: ' + theFifthWord);
console.log('First Word: ' + theSixthWord);
console.log('First Word: ' + theSeventhWord);
console.log('First Word: ' + theEighthWord);

// soal 7
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17);

console.log(hasil);

// soal 8
var nilaiDoe = 50;

if(nilaiDoe >= 80){
    console.log("A")
}else if(nilaiDoe >= 70 && nilaiDoe < 80){
    console.log("B")
}else if(nilaiDoe >= 60 && nilaiDoe < 70){
    console.log("C")
}else if(nilaiDoe >= 50 && nilaiDoe < 60){
    console.log("D")
}else if(nilaiDoe < 50){
    console.log("E")
};

// soal 9
let angka = 2;
let result = angka === 2 ? "angka nya 2" : "bukan angka 2";

console.log(result);

// soal 10
var traffic_lights= "red";
switch(traffic_lights){
    case "red" :
        console.log("berhenti")
        break;
    case "yellow" :
        console.log("hati-hati")
        break;
    case "green" : 
        console.log("berjalan")
        break;
};
