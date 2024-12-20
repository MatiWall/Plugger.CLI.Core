import {FileConfigLoader} from '@plugger/configuration-loader';

function readConfig(path?: string){
    const files = ['./app-config.yaml']

    if(path){
        const files = [path];
    }

    for (const file of files) {
       
        try {
            const reader = new FileConfigLoader(file);
            return reader.getConfig();
        }
        catch (error){

        }

    }

    throw new Error('Failed to find a config in any of the default locations')
 
}   

export {
    readConfig
}