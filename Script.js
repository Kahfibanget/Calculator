function tampilkannilaibutton(value) {
    document.getElementById("display").value += value;
}

function hitung(){
   let hasilperhitungan = eval(document.getElementById("display").value);
   document.getElementById("display").value = hasilperhitungan;
}

function hapus(){
    document.getElementById("display").value = '';
}