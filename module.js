//const ab = require('./models/angent');
const dateFormat = require('dateformat');

// ab.isDuplicationName('abc2', (err, data) => {
//
//     console.log(data);
// });



    let x = new Date();
    let u = dateFormat(x, 'yyyy-mm-dd,HH:MM:ss ')
    let today = new Date();
    today.setMonth(today.getMonth()-1);
    let temp =dateFormat(today.toISOString(), 'yyyy-mm-dd HH:MM:ss ');

    console.log(temp);
