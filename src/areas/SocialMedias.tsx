import SocialMedia from "@/components/SocialMedia";
import { socialMedias } from "@/data/data";

export default function SocialMedias() {
    return(
        <>
            {socialMedias.map(sm =>
                <SocialMedia socialmedia={sm}></SocialMedia>
            )}
        
        </>
    )
}