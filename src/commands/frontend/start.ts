import { createCommand } from "commander";


function startDevServer(){
    const command =  createCommand('start');

    command
        .description('Start frontend development server')
        .option('-p, --port <number>', 'Port to run the server on', '3000')
        .option('-c, --config <string>', 'Path to the desired config file', undefined) // default behavior defined in action 
        .action((options) =>{
            console.log(`Running on port ${options.port}`)
        });
    return command
}



export default startDevServer;