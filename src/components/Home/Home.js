import s from "./home.module.scss";
import Card from './Card/Card'

function Home(props) {
    return (
        <div className={s.content}>
            <div className={s.headerCards}>
                <h1 className={s.title}>{props.searchValue?`Поиск по: ${props.searchValue}`: 'Все кроссовки'}</h1>
                <div className={s.search}>
                    <img className={s.searchImg} src='./img/search.svg'/>
                    <input maxLength={16} value={props.searchValue} onChange={props.onChangeSearchInput} className={s.searchInput} type="text" placeholder='Поиск...'/>
                    <img  onClick={props.onDeleteSearch} className={s.crossImg} src='./img/cross.png'/>
                </div>
            </div>
            <div className={s.cards}>
                {props.items
                    .filter((item)=> item.name.toLowerCase().includes(props.searchValue.toLowerCase()))
                    .map((item, index) =>
                    (
                        <Card
                            key={index}
                            name={item.name}
                            price={item.price}
                            imgSrc={item.imgSrc}
                            id={item.id}
                            getObj={item}
                            onPlus={(obj) => props.onAddToCart(obj)}
                            onLike={(obj) => props.onAddToFavorites(obj)}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Home;