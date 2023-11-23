let belanja = parseInt(prompt("Masukan total : "));
if (belanja >= 0 && belanja <= 99999){
    document.writeln(`Anda belanja = ${belanja}`)
    document.writeln('Anda tidak mendapat diskon')
}else if(belanja >= 100000 && belanja < 200001 ){
    document.writeln(`Anda belanja = ${belanja} `)
    document.writeln('Diskon 10 %')
    let diskon = belanja*10/100;
    document.writeln(`total bayar = ${belanja - diskon}`)
}else if(belanja >= 200000 ){
    document.writeln(`Anda belanja = ${belanja} `)
    document.writeln('Diskon 25 %')
    let diskon = belanja*25/100;
    document.writeln(`total bayar = ${belanja - diskon}`)
}else if(belanja < 0){
    document.writeln('Nilai yang anda masukan salah')
}
