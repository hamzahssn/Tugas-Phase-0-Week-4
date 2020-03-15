function changeMe(arr) {
    var display = {};
    var judul;
    for (var i = 0; i <= arr.length -1; i++) {
        judul = i + 1 + '. ' + arr[i][0] + ' ' + arr[i][1];
        console.log(judul);
        display.firstName = arr[i][0];
        display.lastName = arr[i][1];
        display.gender = arr[i][2];
        display.age = 2018 - arr[i][3];
        if (arr[i][3] === undefined) {
            display.age = 'Invalid Birth Year';
        }
        console.log(display);
    }
    if (arr.length === 0) {
        console.log('" "');
    }
}
  
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); //
//1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""