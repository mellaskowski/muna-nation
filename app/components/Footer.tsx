class Link {
    label: string;
    url: string;
    subCategory?: string;

    constructor(label:string, url:string, subCategory?:string) {
        this.label = label;
        this.url = url;
        this.subCategory = subCategory ? subCategory : 'main';
    }
}

function Footer() {

    let aboutSiteLinks = ['Home', 'About', 'Contact', 'Support'];
    let munaLinks = ['The Band', 'Music', 'Podcast', 'Music Videos'];
    const sources = [];

    
    

    return (
        <div className="flex bg-violet-300 h-1/7 px-15 justify-center">
            <img src={"images/design_logo/Laz_designs.png"}
                alt="Laz designs logo with text 'Laz designs'" 
                className="flex max-h-40"
                />

        </div>
    );
};

export default Footer;