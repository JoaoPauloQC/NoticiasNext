import { socialMedia } from "@/data/data"

type Props = {
    socialmedia: socialMedia
}


export default function SocialMedia ({socialmedia} : Props) {

    return (

        <div className="w-96 p-2 flex gap-10 rounded-4xl bg-neutral-500 items-center">
            <a className="img rounded-full overflow-hidden w-20 h-20 bg-transparent" href={socialmedia.link}>
                <img src={socialmedia.icon} className="w-full h-full object-cover" alt="" />
            </a>
            <p>{socialmedia.name}</p>
            {socialmedia.avatar && 
            
                <img src={socialmedia.avatar} alt="" />

            }
        </div>
        

    )

}