import Link from "next/link"

type Props = {

    user : string,
    img : string
}
export default function Login ({user,img}:Props){

    return (

        <div className="login__container flex gap-4">
            <Link href="/login">
            <div className="box bg-white w-max rounded-lg flex justify-center items-center  text-center box-border">
                <p>{user}</p>

            </div>
            </Link>
            <div className="bg-white rounded-full overflow-hidden w-9 h-auto">
                <img src={`${img}`} className=" object-cover" alt="" />    
            </div>    
        </div>

    )

}