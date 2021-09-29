const argv = require('./config/yargs').argv;
const { saveWorkTime } = require('./helper/saveHours');

let param = argv._[0];
console.log(argv);
switch(param){
    case "save": case "s":
        saveWorkTime(argv.n, argv.h);
        break;
    default:
        console.log('error');
}