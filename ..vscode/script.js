// alert ('Selamat Datang...')

// var lagi = true

// while (lagi === true) {
//     var nama = prompt('Masukan Nama')
//     alert ('Halo ' + nama)

//    lagi = confirm ('Apakah ingin menulis nama lagi?')
// }

// alert('Thank Youu...')


/* While */
// var nilaiAwal = 1

// while (nilaiAwal <= 100) {
//     console.log ('Hello Kawan ' + nilaiAwal + 'x')
//     nilaiAwal++
// }


/* Latihan */
// var jmlhAngkot = 10
// var Angkot = 1
// while (Angkot <=6) {
//     console.log ('Angkot ke-' + Angkot + " Beroperasi dengan baik")
//     Angkot++
// } 

// for (var AngkotBaru = 7; AngkotBaru <= 10; AngkotBaru++ ) {
//     console.log ('Angkot ke-' + AngkotBaru + " Sedang Rusak")
//     }

// var noAngkot = AngkotBaru
// console.log ('Angkot yang rusak ada ' + AngkotBaru)

// var angkotBeroperasi = Angkot
// console.log ( 'Angkot beroperasi ada ' + Angkot )


// var Angka = 3
// if (Angka % 2 == 0) {
//     alert (Angka + ' sisanya bilangan genap')
// } else {
//     alert (Angka + ' sisanya bilangan ganjil')
// }

/*Latihan if else*/
// for ( var angkotJalan = 1; angkotJalan < 11; angkotJalan++ )

// if (angkotJalan < 7) {
//     console.log ('Angkot ke-' + angkotJalan + ' Sedang beroperasi')
// } else {
//     console.log ('Angkot ke-' + angkotJalan + ' Sedang rusak' )
// }

/* Contoh Else if */
// var angka = prompt('Masukan Angka = ')

// if (angka % 2 == 0) {
//     alert (angka + ' Adalah bilangan genap')
// } else if (angka % 2 == 1) {
//     alert (angka + ' Adalah bilangan ganjil')
// } else {
//     alert ('Bukan angka')
// }

/* Latihan */

// for ( var angkotJalan = 1; angkotJalan <= 10; angkotJalan++)

//     if (angkotJalan <= 6 && angkotJalan != 5 ) {
//         console.log ('Angkot ke-' + angkotJalan + ' sedang beroperasi')
//     } else if (angkotJalan === 8 || angkotJalan === 10){
//         console.log ('Angkot ke-' + angkotJalan + ' sedang lembur')
//     } else {
//         console.log ('Angkot ke-' + angkotJalan + '  Sedang rusak')
//     }



/*contoh latihan while, for, if else */

/* While */
/* no 1 */
// var angka = 5
// while (angka < 16) {
//     console.log ('Angka yang tersedia adalah '+ angka)
//     angka++
// }

/* no 2  */
// var angka = 0
// var count = 0
// while (angka < 21 ) {
//     console.log ('Angka genap ' + angka)
//     angka += 2
//     count++
// }

/* no 3 */
// var angka = 1
// var count = 0
// while (angka < 20 ) {
//     console.log ('Angka genap ' + angka)
//     angka += 2
//     count++
// }

/* no 4 */
// var angka = 10
//  while (angka > 0) {
//     console.log ('Angka anda adalah '+ angka)
//     angka--
//  }

/* soal latihan for */
/* no 1 kelipatan 5*/
// jumlah = 5;
// total = 0;
// for (angka = 1; angka < 21; angka++ ) {

//    total = angka * jumlah;
// console.log('Angka yang tersedia adalah ' + total)
// }


/* soal latihan if else */
/* no 1 bilangan ganjil dan genap */
// var angka = prompt('Masukan angka')
// if (angka % 2 == 0) {
//    console.log (angka + ' Adalah bilangan genap')
// } else {
//    console.log (angka + ' Adalah bilangan ganjil')
// }

/* soal no 2 status usia */
// var usia = prompt('Masukan usia anda')
// if (usia < 13 && usia > 20) {
//    console.log("Usia anda adalah " + usia + ' Tahun. anda masih Anak-Anak')
// } else if (usia < 19){
//    console.log("Usia anda adalah " + usia + ' Tahun. anda masih Remaja')
// } else {
//    console.log("Usia anda adalah " + usia + ' Tahun. anda sudah dewasa')
// }


/* Switch dengan break*/
// var angka = prompt('Masukan nama menu')

// switch (angka) {
   
//    case 'nasi' :
//    alert ('Makanan Sehat!!');
//    break ;
   
//    case 'daging' :
//    alert('Makanan Sehat!!');
//    break;

//    case 'Softdrink' :
//    alert('Minuman tidak sehat');
//    break
   
//    default :
//    alert('Nama makanan/minuman tidak terdaftar');
//    break;
// }
// console.log ('Anda memasukan angka '+ angka)

/* Contoh tanpa break */
var angka = prompt('Masukan nama menu')

switch (angka) {
   
   case 'nasi' : //jika memasukan nasi dan daging maka langsung muncul alert "Makanan Sehat"/
   case 'daging' :
   alert('Makanan Sehat!!');
   break;
   case 'Softdrink' :
   alert('Minuman tidak sehat');
   break
   
   default :
   alert('Nama makanan/minuman tidak terdaftar');
   break;
}
console.log ('Anda memasukan angka '+ angka)