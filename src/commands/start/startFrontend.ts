import { createCommand } from "commander";
import { readConfig, start } from "../../lib/index.js";


function startDevServer(){
    const command =  createCommand('frontend');

    command
        .description('Start frontend development server')
        .option('-p, --port <number>', 'Port to run the server on', '3000')
        .option('-h, --host <string>', 'Host on which to expose', '127.0.0.1')
        .option('-c, --config <string>', 'Path to the desired config file', undefined) // default behavior defined in action 
        .action((options) =>{
            
            start({
                port: Number(options.port),
                host: options.host,
                config: options.config,
            })

        });
    return command
}



export default startDevServer;