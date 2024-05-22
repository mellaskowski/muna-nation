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
        <div className="bg-violet-300 h-1/6 px-15">
      
            About.
            Contact.

            Sources.
            References.
            Content Attributions.
      

        </div>
    );
};

export default Footer;