const fs = require('fs');

var saveWorkTime = (name , hours) => {
    let template = `Usuario: ${name}
Horas trabajadas: ${hours}h
    `;

    fs.writeFileSync(`${name}.txt`, template, err => {
        if(err) throw console.log(err);
        console.log("Saved succesfull");
    });
}

module.exports = {
    saveWorkTime
}