let daftarTugas = [];

function tambahTugas() {
    let input = document.getElementById("inputTugas");
    let tugas = input.value;

    if (tugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    daftarTugas.push(tugas);
    input.value = "";
    tampilkanTugas();
}

function hapusTugasTerakhir() {
    if (daftarTugas.length > 0) {
        daftarTugas.pop();
    }
    tampilkanTugas();
}

function bersihkanDaftar() {
    daftarTugas = [];
    tampilkanTugas();
}

function tampilkanTugas() {
    let list = document.getElementById("listTugas");
    list.innerHTML = "";

    for (let i = 0; i < daftarTugas.length; i++) {
        let li = document.createElement("li");
        li.textContent = daftarTugas[i];
        list.appendChild(li);
    }

    document.getElementById("total").textContent =
        "Total Tugas: " + daftarTugas.length;
}

let gudang = [];

function tampilkanBarang(){

  let list = document.getElementById("listBarang");
  let total = 0;

  list.innerHTML = "";

  for(let i = 0; i < gudang.length; i++){

    let barang = gudang[i];

    list.innerHTML +=
    "Barang ke-" + (i+1) +
    ": " + barang.nama +
    " - Stok: " + barang.stok +
    "<br>";

    total += barang.stok;
  }

  document.getElementById("totalBarang").innerHTML =
  "Total Seluruh Barang: " + total;
}

function tambahBarang(){

  let nama = document.getElementById("namaBarang").value;
  let stok = parseInt(document.getElementById("stokBarang").value);

  if(nama === "" || isNaN(stok)){
    alert("Isi data dengan benar!");
    return;
  }

  gudang.push({
    nama: nama,
    stok: stok
  });

  document.getElementById("namaBarang").value = "";
  document.getElementById("stokBarang").value = "";

  tampilkanBarang();
}

function hapusTerakhir(){

  gudang.pop();
  tampilkanBarang();
}

function kosongkanGudang(){

  gudang = [];
  tampilkanBarang();
}

let tabungan = [200000,300000,200000,300000];

function rupiah(angka){
return angka.toLocaleString("id-ID");
}

function tampilkan(){

let riwayat = document.getElementById("riwayat");
let hasil = document.getElementById("hasil");

riwayat.innerHTML="";

let total=0;

for(let i=0;i<tabungan.length;i++){

riwayat.innerHTML +=
"Setoran ke-"+(i+1)+": Rp "+rupiah(tabungan[i])+"<br>";

total += tabungan[i];
}

let bonus=0;

if(total>=1000000){
bonus = 70000;
}

let saldo = total + bonus;

hasil.innerHTML =
"<br>Total Setoran Pokok: Rp "+rupiah(total)+
"<br>Bonus: Rp "+rupiah(bonus)+" (Selamat! Anda mendapat bonus 7%)"+
"<br><br><b>SALDO BERSIH: Rp "+rupiah(saldo)+"</b>";
}

function tambahSetoran(){

let nilai = parseInt(document.getElementById("setoran").value);

if(isNaN(nilai)){
alert("Masukkan angka!");
return;
}

tabungan.push(nilai);

document.getElementById("setoran").value="";

tampilkan();
}

function hapusTerakhir(){

tabungan.pop();
tampilkan();

}

function resetTabungan(){

tabungan=[];
tampilkan();

}

tampilkan();