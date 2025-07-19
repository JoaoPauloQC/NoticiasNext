import { GuessingWGame } from "./GuessingWGame";
import GuessingW from "./page";

export default function GuessingWContent (){
    return (
        <div className="GuessinW py-20">
            <div className="wrapper flex flex-col gap-x-10 gap-y-2 items-center">
                <h1 className="text-3xl text-center GuessingW__title">Guessin W</h1>
                <GuessingWGame></GuessingWGame>
            </div>
        </div>
    )
}