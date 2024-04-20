class BandMember {
    artist_name: ArtistName;

    constructor(name: string){
        this.artist_name = new ArtistName(name);
    }

}

class ArtistName {
    // main performance name
    stage_name: string;
    first_name: string;
    last_name: string;
    previous_stage_name?: string;
    middle_name?: string;
    show_official_name?: true;

    constructor(stage_name:string, first_name?: string, last_name?: string, previous_stage_name?: string, 
                middle_name?: string, show_official_name?: boolean) {
        this.stage_name = stage_name;
        this.first_name = first_name ? first_name : '';
        this.last_name = last_name ? last_name : '';
        this.middle_name = middle_name ? middle_name : '';
        this.show_official_name = show_official_name ? show_official_name : true;
    }
}