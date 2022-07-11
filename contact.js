// node modules
const fs = require('fs');
const readline = require('readline');

const validator = require('validator')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout,
// });

// Path file contacts.json
const dataPath= './data/contacts.json'
// cek file JSON

// Function cek folder JSON
const cekData = async() =>{
    // Path folder data
    const dirPath=`./data`
    // Cek Folder Data
    if(!fs.existsSync(dirPath)){    
        // Buat folder jika belum ada
        fs.mkdirSync(dirPath)
    }
}

// Function cek data JSON
const cekFile = async() =>{
    if(!fs.existsSync(dataPath)){
        // Buat file JSON jika belum ada 
        fs.writeFileSync(dataPath, '[]', 'utf-8')
    }
}


const saveData = (name,email,mobile) =>{
    // const name = await questions('Input nama anda :')
    // const phone = await questions('Nomor telpon anda: ')
    // const email = await questions('Email anda: ')


    const contact = {name, email, mobile}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    
    const duplicateNameCheck = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    if (duplicateNameCheck){ 
        console.log('Nama sudah ada')
        return false;
    }

    if(!validator.isEmail(email)){
        console.log("email anda salah");
        return false;
    }

    if(!validator.isMobilePhone(mobile,'id-ID')){
        console.log("Nomor Telpon anda salah atau tidak valid");
        return false
    }

    contacts.push(contact)
    fs.writeFileSync(dataPath, JSON.stringify(contacts))
    console.log("Success input data!")
}


// add the code below
module.exports = { cekData, cekFile, saveData };