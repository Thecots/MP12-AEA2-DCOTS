const opts = {
    name: {
        demand: true,
        alias : 'n',
        default: "no_named",
    },
    hours: {
        demand: true,
        alias : "h",
        default: "0"
    }
};

const argv = require('yargs')
            .command('save',"introduce nombre de usuario y horas trabajadas",opts)
            .help().argv;

module.exports = {
    argv
}