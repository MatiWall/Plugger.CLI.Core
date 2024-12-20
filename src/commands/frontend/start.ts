import { createCommand } from "commander";
import { readConfig, start } from "../../actions";


function startDevServer(){
    const command =  createCommand('start');

    command
        .description('Start frontend development server')
        .option('-p, --port <number>', 'Port to run the server on', '3000')
        .option('-c, --config <string>', 'Path to the desired config file', undefined) // default behavior defined in action 
        .action((options) =>{
            
            start({
                port: Number(options.port),
                config: options.config
            })

        });
    return command
}



export default startDevServer;