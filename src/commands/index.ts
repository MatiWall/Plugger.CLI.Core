import {frontendCommand } from "./frontend/index.js";
import { Command } from "commander";
import figlet from 'figlet';

const program = new Command();

console.log(figlet.textSync('plugger'));

program
    .name('plugger')
    .description('Plugger CLI used to build, serve, create new frontend plugins and extensions and more.')
    .version('0.0.1'); 


program.addCommand(frontendCommand);




const options = program.opts();

export { program }