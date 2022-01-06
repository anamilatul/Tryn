//async await
function test2() {
  return new Promise((resolve, reject) => {
    let aktif = false;
    if (aktif) {
      setTimeout(() => {
        resolve("status aktif");
      }, 2000);
    } else {
      reject("status tidak aktif");
    }
  });
}

async function testing() {
  try {
    let hasil = await test2();
    console.log(hasil);
  } catch (err) {
    console.log(err);
  }
}
testing();
//1. ubah Kode diatas suapaya bisa di run

//2.Buatlah sebuah variabel bernama “nilai1” berupa array yang memiliki value integer. Kemudian buat sebuah variabel baru yang bernama “nilai2”  berisikan penjumlahan dari setiap value pada variable “nilai1”. Tampilkan hasil dari dari penjumlahan tersebut pada console.
// const nilai1 = [1, 2, 3, 4, 5, 6];
// const nilai2 = nilai1.map((x) => x + x);
// console.log(nilai2);

//3
// var data = [
//   //pake filter
//   { name: "rama", age: 25 },
//   { name: "wahyu", age: 25 },
//   { name: "ana", age: undefined },
//   { name: null, age: 25 },
// ];
// //jawab
// function filterData(item) {
//   if (item.name !== null && item.age !== undefined) {
//     return true;
//   }
// }
// let dataById = data.filter(filterData);
// console.log(dataById);

//3. cetak data diatas yang lengkap dan masukkan ke dalam sebuah variabel. Sehingga, hanya data yang full saja dapat tercetak

// 4. Buatlah sebuah arrow function dengan nama konfersiMenit(number) yang menerima parameter berupa angka. Function akan me-return string dengan format “jam:menit”.
// Contoh jika menit yang diinputkan adalah 88 maka akan me-return “1:28”

// const konfersiMenit = (number) => {
//   jam = parseInt(number / 60);
//   menit = number - jam * 60;
//   hasil = jam + ":" + menit;
//   return hasil;
// };
// console.log(konfersiMenit(88));

//5. Ubah fungsi inputHarusGenap(angka) sehingga menghasilkan keluaran sesuai dengan yang ada pada gambar
// function inputHarusGenap(angka) {
//   if (angka % 2 == 0) {
//     return angka;
//   } else {
//     return "bukan angka genap";
//   }
// }

// try {
//   console.log(inputHarusGenap(7));
// } catch (e) {
//   console.log(e);
// }

// try {
//   console.log(inputHarusGenap(4));
// } catch (e) {
//   console.log(e);
// }
