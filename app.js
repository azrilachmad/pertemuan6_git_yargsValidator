const yargs = require("yargs")
const contacts = require("./contact")



yargs.command({
    command: 'add',
    describe: 'add new contact',
    builderr:{
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: 'Contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile:{
            describe: 'Contact Mobile',
            demandOption: false,
            type: 'string',
        }
    },


    
    handler(argv){
        
        contacts.cekData()
        contacts.cekFile()  
        contacts.saveData(argv.name.charAt(0).toUpperCase() + argv.name.slice(1).toLowerCase(),argv.email,argv.mobile.toString())
    }
    
}),


yargs.parse()