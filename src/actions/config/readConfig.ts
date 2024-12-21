import { FileConfigLoader } from '@plugger/configuration-loader';
import path  from 'path';

function readConfig(configPath?: string) {
    let files = ['./app-config.yaml', 'app-config.yml', 'app-config.json'];

    if (configPath) {
        // If a path is provided, use it as the only file to load.
        files = [configPath];
    }

    // Try loading the configuration from the files list
    for (const file of files) {
        try {
            // Resolve file paths to the current working directory for consistency
            const resolvedFilePath = path.resolve(process.cwd(), file);
            const reader = new FileConfigLoader(resolvedFilePath);

            // Return the configuration if loading is successful
            return reader.getConfig();
        } catch (error) {
            // Log the error for debugging purposes and continue to the next file
            console.error(`Failed to load config from ${file}:`, error);
        }
    }

    // If none of the files worked, throw an error indicating failure
    throw new Error('Failed to find a config in any of the default locations');
}

export {
    readConfig
};
