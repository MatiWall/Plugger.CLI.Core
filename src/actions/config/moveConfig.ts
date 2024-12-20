import * as fs from 'fs';


function moveConfig(config: object){

    fs.writeFileSync('./src/app-config.yaml', JSON.stringify(config, null, 2));

}

export {moveConfig}