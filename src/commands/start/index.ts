import { createCommand } from "commander";
import startDevServer from "./startFrontend.js";


const frontendCommand = createCommand('start');



frontendCommand.addCommand(startDevServer());



export {
    frontendCommand
}