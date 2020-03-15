function fpb(angka1, angka2) {
    var index0 = 0;
    var index1 = 0;
    
    for (var i = 20; i > 0; i--) {
        index0 = angka1 % i;
        index1 = angka2 % i;

        if( (index0 === index1) && index0 === 0 ) {
            return i;
        } 
    }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1