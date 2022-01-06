// Task - 1
/**
 * Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
 * Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console.
 * Lakukan pemanggilan untuk function perkenalan pada baris 31.
 * Kalian bebas mengubah kode di atas sehingga menampilkan output seperti di bawah
 * Output=Ricardo terdaftar sebagai pembuat web
 * Array = Ricardo
 * a adalah = blog doscom
 * b adalah = blog doscom
 * perkenalkan nama saya Ricardo saya sedang membuat blog doscom tim saya terdiri dari 5 orang. sya berasal dari indonesia
 */
// Code
var a = 5;
let b = "blog doscom";
const user = "Ricardo";
let terdaftar = false;
let lengkap_arr = [a, b, user, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(`perkenalkan nama saya ${lengkap_arr[2]} saya sedang membuat ${lengkap_arr[1]} tim saya terdiri dari ${lengkap_arr[0]} orang. saya berasasl dari ${asal}`);
}

if (terdaftar !== true) {
  console.log(`${user} terdaftar sebagai pebuat web`);
}

a = b;
nama = b;
// console.log(`user berasal dari ${asal}`);
console.log(`Array ${lengkap_arr[2]}`);
console.log(`a adalah ${a}`);
console.log(`b adalah ${b}`);
perkenalan();

// // Task - 2
// /**
//  * jelaskan kenapa baris 14,15,16 tidak dapat tampil?
//  * jelaskan kenapa deklarasi pada baris 19 menyebabkan error?
//  * dengan melakukan komen pada baris ke 19,
//  * apakah baris 20 dapat di eksekusi? jelaskan.
//  */
// // Code
// /**
//  * Baris tersebut tidak tampil karena -
//  * - kondisi variable tersebut bernilai false
//  * karena ${asal} merupakan variable local -
//  * - dari fungsi perkenalan
//  * baris dapat dieksekusi, variable local tidak -
//  * - dapat diakses diluar fungsinya sehingga -
//  * - ketika melakukan komen di baris tersebut -
//  * - program dapat berjalan
// */
//nomor 3
const array = ["Budi", "Sita", "Ayu"];
const [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

//nomor 4
let bdays = ["10-17", "05-19", "20-19"];
let slash = bdays.map((x) => x.replace("-", "/"));
console.log(slash);

//nomor 5
let value = [1, 2, 3, 4, 5, 6];
let hasil = value.map((x) => x * 2);
console.log(hasil);

//nomor 6
let arr = [1.5, 2.56, 5.1, 12.33];
let bulat = arr.map((x) => Math.ceil(x));
console.log(bulat);
