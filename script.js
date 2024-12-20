/* import ftp from 'basic-ftp'
//const ftp = require('basic-ftp')

async function conectionToFtp(){
    
    const client = new ftp.Client();

    try {
        await client.access({
            host: 'ftp-icontitester.alwaysdata.net',
            user: 'icontitester',
            password :'ypino123',
            secure : true
        })
        
        //const files = await client.list("/Infro");
        const divFather = document.getElementById("list")
        console.log("hola")
        for (const file of files)  {
            const list = document.createElement('li')
            list.textContent = element.name
            divFather.appendChild(list)
            console.log(file.name)
            const remotePath = `/Infro/${file.name}`
            const localPath = `./save/${file.name}`

            console.log("download")
            await client.downloadTo(localPath,remotePath)
            console.log('Nice')
        };


        //Post a fild
        const name = 'logo-company.jpg'

        const pathLocal = `./logo-company.jpg`
        const pathRemote = `/Infro/logo-company.jpg`
        console.log("next")

        await client.uploadFrom(pathLocal,pathRemote)
        console.log("Are you sure")

    } catch (error) {
        console.log(error)
    } finally {
        client.close()
    }

}

conectionToFtp() */


/* Stepts to deploy this project

    node -v
    npm init -y
    npm install basic-ftp
    node ftp.js

    Good luck

*/