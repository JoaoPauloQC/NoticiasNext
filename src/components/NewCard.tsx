import {thenew} from '@/data/data'
import { Button } from './Buttons'

type Props = {

    n : thenew

}

export const NewCard = ({n}: Props) => {

    const capitalizing = (name : string) => {
            return name[0].toUpperCase() + name.slice(1)
        }


    return (

        <div className='news__card'>

            <div className='news__card__img'>
                <img src={n.img} alt="" />
            </div>
            <div className='pl-5 h-max'>
                <Button className={`${"filter__buttons__"+ n.category} p-1.5 rounded-xl min-w-24 text-center text-white`}>{capitalizing(n.category)}</Button>
            </div>
            <div className='news__card__text'>
                <p>{n.title}</p>
            </div>
            <div className='news__card__button'>
                <button><a href={n.link}> Acesse </a></button>
            </div>
        </div>


    )



}

export default NewCard