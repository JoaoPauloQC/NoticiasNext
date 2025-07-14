import {thenew} from '@/data/data'

type Props = {

    n : thenew

}

export const NewCard = ({n}: Props) => {

    return (

        <div className='news__card'>

            <div className='news__card__img'>
                <img src={n.img} alt="" />
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