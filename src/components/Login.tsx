import Link from "next/link"

type Props = {

    user : string

}
export default function Login ({user}:Props){

    return (

        <div className="login__container flex">
            <Link href="/login">
            <div className="box bg-white w-20 rounded-lg flex justify-center items-center  text-center box-border">
                <p>{user}</p>

            </div>
            </Link>    
        </div>

    )

}