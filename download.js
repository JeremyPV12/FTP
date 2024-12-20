import ftp from 'basic-ftp'

/* Download with the credential of invite */

async function DownloadByFtp(){

    const client = new ftp.Client();

    try {
        await client.access({
            host: 'ftp-icontitester.alwaysdata.net',
            user: 'icontitester_invite',
            password :'ypino123',
            secure : true
        })

        const files = await client.list("/Infro")

        for (const file of files  ) {
            const remotePath = `/Infro/${file.name}`;        
            const localPath = `./save/${file.name}`;
            await client.downloadTo(localPath, remotePath)
            console.log("Download correctly")
        }
        
    } catch (error) {
        console.log(error)
    }finally{
        client.close()
    }
}

DownloadByFtp()