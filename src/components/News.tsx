import { categories, news, thenew } from '@/data/data'
import NewCard from './NewCard'

type Props = {
    news : thenew[]
}

export default function News({news}: Props){

    return (
        <div className='grid grid-cols-3 gap-y-20 pt-20 pb-20 max-lg:grid-cols-2 max-md:grid-cols-1'>
            {news.map(n =>

                <NewCard n={n} />

            )}
        </div>
    )
}