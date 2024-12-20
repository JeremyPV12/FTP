import ftp from 'basic-ftp'

async function UploadByFtp() {
    
    const client = new ftp.Client();

    try {

        await client.access({
            host: 'ftp-icontitester.alwaysdata.net',
            user: 'icontitester',
            password: 'ypino123',
            secure: true
        })

        const nameFile = 'tester.jpg'
        const remotePath = `/Infro/${nameFile}`
        const localPath = `./upload-file/${nameFile}`

        await client.uploadFrom(localPath,remotePath)
        console.log("Updaload file correctly")
        
    } catch (error) {
        console.log(error)
    }finally {
        client.close()
    }

}

UploadByFtp()