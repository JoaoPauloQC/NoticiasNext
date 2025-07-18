import SocialMedias from "@/areas/SocialMedias";

export default function Footer() {
    return (
        <div className="footer__container bg-neutral-900">
                    <div className="wrapper">
                        <div className="footer__content py-10 flex justify-between ">
                            <div className="footer__left grid gap-10">
                            <SocialMedias></SocialMedias>
                            </div>
                            <div className="footer__right flex items-center">
                                <p> 2025 - Todos os Direitos Reservados - João Paulo Queiroz Costa </p>
                            </div>
                        </div>
        
                    </div>
                </div>
    )
}