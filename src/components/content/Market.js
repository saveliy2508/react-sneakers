import s from "./market.module.scss";
import Card from './Card/Card'

function Market(props) {
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
                {props.items.map((item) =>
                    (
                        <Card
                            name={item.name}
                            price={item.price}
                            imgSrc={item.imgSrc}
                            getObj={item}
                            onPlus={(obj) => props.onAddToCart(obj)}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Market;