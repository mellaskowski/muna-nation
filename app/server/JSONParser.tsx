import * as fs from 'fs';
import * as path from 'path';

interface MusicVideo {
    title: string;
    link: string;
    artist?: string | "MUNA";
    // almost always MUNA but katie's solo album will also be in this
    releaseDate: string;
}

export class JSONParser {
    private filePath: string;

    constructor(fileName: string) {
        this.filePath = path.resolve(__dirname, fileName);
    }

    public parse(): MusicVideo[] {
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf-8');
            const data: MusicVideo[] = JSON.parse(fileContent);

            if (!Array.isArray(data)) {
                throw new Error('Invalid JSON format: Expected an array of music videos.');
            }

            return data.map((item) => this.validateMusicVideo(item));
        } catch (error) {
            console.error('Error parsing JSON file:', error.message);
            throw error;
        }
    }

    private validateMusicVideo(item: any): MusicVideo {
        // if (
        //     typeof item.title !== 'string' ||
        //     typeof item.artist !== 'string' ||
        //     typeof item.releaseDate !== 'string'
        // ) {
        //     throw new Error('Invalid music video format.');
        // }

        return {
            link: item.link,
            title: item.title,
            artist: item.artist,
            releaseDate: item.releaseDate,
        };
    }
}

// Example usage:
// const parser = new JSONParser('official_music_videos.JSON');
// const musicVideos = parser.parse();
// console.log(musicVideos);