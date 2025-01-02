import { createServer } from 'vite';
import path from 'node:path';
import { readConfig } from '../index.js';


type StartOptions = {
    port: number,
    config: string
}



async function start(options: StartOptions){

    let config = {};
    try {
        config = readConfig(options.config);
    }
    catch (error) {
        console.debug('Failed to find a config, using default.')
    }
    const currentWorkingDir = process.cwd();
        // Vite custom plugin to log the index.html file path
    const logIndexFilePlugin = {
            name: 'log-index-file',
            configureServer(server: any) {
                // Log the index.html file path when the server starts
                const indexHtmlPath = path.join(currentWorkingDir, 'index.html');
                console.log(`Serving index.html from: ${indexHtmlPath}`);
            },
        };
    
    const server = await createServer({
        plugins: [
            logIndexFilePlugin
        ],
        define: {
            'process.env.argv': process.argv,
            'process.env.APP_CONFIG': JSON.stringify(config),
            'process.env.test': 2
        },
        root: currentWorkingDir,
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