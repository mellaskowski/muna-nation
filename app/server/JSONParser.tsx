import * as fs from 'fs';
import * as path from 'path';
import { MusicVideo } from '~/models/Content/Video';

export class JSONParser {
    private filePath: string;

    constructor(fileName: string) {
        this.filePath = fileName;
    }

    public parse(): MusicVideo[] {
        try {
            console.log("Reading file:", this.filePath);
            if (!fs.existsSync(this.filePath)) {
                throw new Error(`File not found: ${this.filePath}`);
            }
            const fileContent = fs.readFileSync(this.filePath, 'utf-8');
            const data: MusicVideo[] = JSON.parse(fileContent);

            if (!Array.isArray(data)) {
                throw new Error('Invalid JSON format: Expected an array of music videos.');
            }

            return data.map((item) => this.validateMusicVideo(item));
        } catch (error: any) {
            console.error('Error parsing JSON file:', error.message);
            throw error;
        }
    }

    private validateMusicVideo(item: any): MusicVideo {
        if ( item.artist === undefined) {
            item.artist = "MUNA";
        }

        return {
            link: item.link || '/',
            title: item.title,
            artist: item.artist,
            date: item.date,
            location: item.location || '',
            platform: item.platform || '',
            type: item.type || 'miscellaneous',
        };
    }
}