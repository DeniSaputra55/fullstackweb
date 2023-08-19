//array
const cars = ['mercedes', 'toyota', 'honda'];
console.log(cars); //memanggil semua index
console.log(cars[1]); //memanggil nomor index yang mau dipanggil
//menggunakan foreach untuk mengetahui nomor urut index
const cars1 = ['mercedes', 'toyota', 'honda'];
cars1.forEach((cars1, index) => {
    console.log( cars1 + ' is at index ' + index);
});