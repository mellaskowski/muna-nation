export interface MusicVideo {
    title: string;
    link: string;
    artist: string | "MUNA";
    // almost always MUNA but katie's solo album will also be in this
    date: string;
    location?: string;
    platform?: string;
}
// class MusicVideo implements Video {
    


// }

// export { MusicVideo };