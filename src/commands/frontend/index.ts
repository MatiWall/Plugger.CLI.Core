import { createCommand } from "commander";
import startDevServer from "./start";


const frontendCommand = createCommand('frontend');



frontendCommand.addCommand(startDevServer());



export {
    frontendCommand
}