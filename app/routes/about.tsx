import TextOnImage from "~/components/TextOnImage";


export default function About() {
	
    return (
        <TextOnImage
         headText="All About MUNA"
         imgChoice="about_page"
         smallText="the famed podcasters of Gayotic "
         buttonText="katie, jo, naomi"
         numOfButtons={3} />
    );
}