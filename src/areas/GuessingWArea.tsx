import { Button } from "@/components/Buttons"
import Link from "next/link"

export default function GuessingWArea () {
    return (
        <div className="flex justify-center pb-10">
            <Link href="/GuessingW">
                <Button className="bg-neutral-800 p-2  rounded-xl font-bold"> Jogar </Button>
            </Link>
        </div>
    )
}