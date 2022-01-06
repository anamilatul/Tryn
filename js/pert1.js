// const angka = [1, 2, 3, 4, 5];
// const angkaKali2 = angka.map((x) => x * 2);
// console.log(angkaKali2);
const angka = [-2, -1, 0, 1, 2, 3, 4, 5];
const hewan = ["kucing", "kambing", "sapi"];

const filter = angka.filter((x) => x >= 0);
console.log(filter);

const hasil = filter.concat(hewan);
console.log(hasil);
const angka2 = filter.map((x) => x * 2);
console.log(angka2);
