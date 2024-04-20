class FooterLink {
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


    return (
        <div id="muna-section-footer">
            About.
            Contact.

            Sources.
            References.
            Content Attributions.
        </div>
    );
};

export default Footer;