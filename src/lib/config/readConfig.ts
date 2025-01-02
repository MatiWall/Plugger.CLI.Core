import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

import { ConfigType, ConfigSchema } from '@plugger/configuration-core';


function fetchConfig(filePath): ConfigType {
    const ext = path.extname(filePath).toLowerCase();  // Use 'this.path' directly

    // Ensure the file exists
    if (!this.path || !fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse and return the file content based on its extension
    return parseFileContent(fileContent, ext) as ConfigType;
}

function parseFileContent(fileContent: string, ext: string): ConfigType {
    try {
        if (ext === '.json') {
            return JSON.parse(fileContent);
        } else if (ext === '.yaml' || ext === '.yml') {
            return parseYaml(fileContent);
        } else {
            throw new Error(`Unsupported file format: ${ext}`);
        }
    } catch (error) {
        throw new Error(`Failed to parse file. Error: ${error.message}`);
    }
}

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
            return fetchConfig(resolvedFilePath);

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
