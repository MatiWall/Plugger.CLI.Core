import { fileURLToPath } from 'node:url'
import { createServer } from 'vite';
import { readConfig } from '../config';



type StartOptions = {
    port: number,
    config: string
}



async function start(options: StartOptions){

    let config = {};
    try {
        const config = readConfig(options.config);
    }
    catch (error) {
        console.debug('Failed to find a config.')
    }
    
    const server = await createServer({
        define: {
            'process.end.argv': process.argv,
            'process.end.APP_CONFIG': JSON.stringify(config)
        },
        root: __dirname,
        server: {
            port: options.port
        }

    })
    
    await server.listen()

    server.printUrls()
    server.bindCLIShortcuts({ print: true })
}

export {
    start
}