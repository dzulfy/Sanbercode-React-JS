// soal 1
console.log("ini jawaban soal 1");
function cetakFunction(){
    console.log("Hallo Nama saya Dzulfikar Fathin")
};
cetakFunction();

// soal 2
console.log("ini jawaban soal 2");
function myFunction(angka1, angka2){
    return angka1 + angka2
}

let angka1 = 20;
let angka2 = 7;

let output = myFunction(angka1, angka2)

console.log(output);

// soal 3
console.log("ini jawaban soal 3");
const functionHello = () => {
    console.log("Hello")
};
functionHello();

// soal 4
console.log("ini jawaban soal 4");
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
    };

console.log(obj.bahasa);

//  soal 5
console.log("ini jawaban soal 5");
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = { 
    nama : arrayDaftarPeserta[0],
    jeniskelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunlahir : arrayDaftarPeserta[3] 
 };
console.log(objDaftarPeserta);

// soal 6
console.log("ini jawaban soal 6");
var buah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "Jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },
    {    
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000
    },
    {       
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    }   
];

var buahfilter = buah.filter(function(buah){
    return buah.adaBijinya == false;
        }
    );

console.log(buahfilter);

// soal 7
console.log("ini jawaban soal 7")
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
};

const name = phone.name;
const brand = phone.brand;
const year = phone.year;

console.log(name, brand, year);

// soal 8
console.log("ini jawaban soal 8");
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  };

let objOutput = {};

objOutput = { ...dataBukuTambahan, ...buku };

console.log(objOutput);

// soal 9
console.log("ini jawaban soal 9");
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002 
};
const functionObject = (param) => {
    return param
};
console.log(functionObject(mobil));