import s from "./market.module.scss";
import Card from './Card/Card'

function Market(props) {
    const arr = [
        {name: 'Мужские Кроссовки Under Armour Curry 8', price: 12999, imgSrc: './img/1.jpg'},
        {name: 'Мужские Кроссовки Nike Air Max 270', price: 8499, imgSrc: './img/2.jpg'},
        {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 10799, imgSrc: './img/3.jpg'},
        {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 16499, imgSrc: './img/4.jpg'}
    ]
    return (
        <div className={s.content}>
            <div className={s.headerCards}>
                <h1 className={s.title}>Все кроссовки</h1>
                <div className={s.search}>
                    <img className={s.searchImg} src='./img/search.svg'/>
                    <input className={s.searchInput} type="text" placeholder='Поиск...'/>
                </div>
            </div>
            <div className={s.cards}>
                {arr.map((obj) =>
                    (
                        <Card name={obj.name} price={obj.price} imgSrc={obj.imgSrc} getObj={obj}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Market;