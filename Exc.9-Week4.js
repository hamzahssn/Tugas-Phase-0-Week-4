function checkAB(num) {
    var string = num.split(' ').join('');
    var hasil = false;
    var indexA = [];
    var indexB = [];
    
    for(var i = 0; i < string.length; i++){
        switch(num[i]){
            case 'a':
                indexA.push(i);
                break;
            case 'b':
                indexB.push(i);
                break;
        }
    }
    
    if(indexA.length !== 0 && indexB.length !== 0){
        for(var j = 0; j < indexA.length; j++){
            for(var k = 0; k < indexB.length; k++){
                if(Math.abs(indexA[j] - indexB[k]) === 4){
                    hasil = true;
                }
            }
        }
    }
    return hasil;  
}
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false