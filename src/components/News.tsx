import { news } from '@/data/data'
import NewCard from './NewCard'

export default function News(){

    

    return (
        <div className='grid grid-cols-3 gap-y-20 pt-45'>
            
            {news.map(n =>

                <NewCard n={n} />

            )}




        </div>
        

        

    )



}