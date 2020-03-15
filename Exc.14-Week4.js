function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var ar = [];
	var obj = {};

	for (var i = 0; i < arrPenumpang.length; i++) {
		obj = {};
		for (var j = 0; j < rute.length; j++) {
			if (arrPenumpang[i][2] === rute[j]) {
				var besar = j;
			} else if (arrPenumpang[i][1] === rute[j]) {
				var kecil = j;
			}
		}
        var bayaran = (besar - kecil) * 2000;
        obj.penumpang = arrPenumpang[i][0];
        obj.naikDari = arrPenumpang[i][1];
        obj.tujuan = arrPenumpang[i][2];
        obj.bayar = bayaran;
        ar.push(obj);
	}
    return ar;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
