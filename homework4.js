const arr = [];

function nilaiRandom(nilaiTerkecil, nilaiTerbesar) {
  return (
    Math.floor(Math.random() * (nilaiTerbesar - nilaiTerkecil + 1)) +
    nilaiTerkecil
  );
}

for (let i = 1; i < 50; i++) {
  arr.push(nilaiRandom(1, 100));
}

for (let i = 1; arr.push(i++) < 50; );

console.log("Array Seluruhnya : ");
console.log(arr);
console.log("===========================================");
//=========================================================================

// Pecahlah menjadi 2 array berdasarkan ganjil dan genap

const arrGanjil = arr.filter(function (ganjil) {
  return ganjil % 2 != 0;
});

console.log("Array Ganjil : ");
console.log(arrGanjil);
console.log("===========================================");

const arrGenap = arr.filter(function (ganjil) {
  return ganjil % 2 == 0;
});
console.log("Array Genap : ");
console.log(arrGenap);
console.log("===========================================");
//=========================================================================

// Gunakan 2 array yang telah dibuat untuk mendapatkan
// - Min
// - Max
// - Total
// - Rata rata

//ARRAY GANJIL
var minGanjil = arrGanjil[0];
for (var i in arrGanjil) {
  if (arrGanjil[i] < minGanjil) {
    minGanjil = arrGanjil[i];
  }
}

var maxGanjil = arrGanjil[0];
for (var i in arrGanjil) {
  if (arrGanjil[i] > maxGanjil) {
    maxGanjil = arrGanjil[i];
  }
}

var jumlahGanjil = 0;
for (i in arrGanjil) {
  jumlahGanjil += arrGanjil[i];
}

var ratarataGanjil = jumlahGanjil / arrGanjil.length;

console.log("nilai pada Array Ganjil adalah ");
console.log("min : " + minGanjil);
console.log("max : " + maxGanjil);
console.log("total : " + jumlahGanjil);
console.log("rata-rata : " + ratarataGanjil.toFixed(2));
console.log("===========================================");
//ARRAY GENAP
var minGenap = arrGenap[0];
for (var i in arrGenap) {
  if (arrGenap[i] < minGenap) {
    minGenap = arrGenap[i];
  }
}

var maxGenap = arrGenap[0];
for (var i in arrGenap) {
  if (arrGenap[i] > maxGenap) {
    maxGenap = arrGenap[i];
  }
}

var jumlahGenap = 0;
for (i in arrGenap) {
  jumlahGenap += arrGenap[i];
}

var ratarataGenap = jumlahGenap / arrGenap.length;

console.log("nilai pada Array Genap adalah ");
console.log("min : " + minGenap);
console.log("max : " + maxGenap);
console.log("total : " + jumlahGenap);
console.log("rata-rata : " + ratarataGenap.toFixed(2));

console.log("===========================================");
console.log("Dari hasil nilai di atas didapatkan : ");

if (minGanjil > minGenap) {
  console.log("Min lebih besar Array Ganjil");
} else {
  console.log("Min lebih besar Array Genap");
}

if (maxGanjil > maxGenap) {
  console.log("Max lebih besar Array Ganjil");
} else {
  console.log("Max lebih besar Array Genap");
}

if (jumlahGanjil > jumlahGenap) {
  console.log("Jumlah lebih besar Array Ganjil");
} else {
  console.log("Jumlah lebih besar Array Genap");
}

if (ratarataGanjil > ratarataGenap) {
  console.log("Rata-rata lebih besar Array Ganjil");
} else {
  console.log("Rata-rata lebih besar Array Genap");
}
