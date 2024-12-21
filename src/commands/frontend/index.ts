import { createCommand } from "commander";
import startDevServer from "./start.js";


const frontendCommand = createCommand('frontend');



frontendCommand.addCommand(startDevServer());



export {
    frontendCommand
}