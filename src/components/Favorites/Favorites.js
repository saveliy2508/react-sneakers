import s from "./favorites.module.scss";
import Card from '../Home/Card/Card'
import {Link} from 'react-router-dom'

function Favorites(props) {
    debugger
    return (
        <div className={s.content}>
            {props.items.length > 0 ? (
                <div>
                    <div className={s.headerCards}>
                        <h1 className={s.title}>Избранное</h1>
                    </div>
                    <div className={s.cards}>
                        {props.items
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
            ) : (
                <div className={s.ifEmpty}>
                    <img className={s.smile} src="./img/smile.svg" alt="smile"/>
                    <p className={s.favTitle}>Закладок нет :(</p>
                    <p className={s.favText}>Вы ничего не добавляли в закладки</p>
                    <Link to='/'><button><img src="./img/leftArrow.svg" alt=""/>Вернуться назад</button></Link>
                </div>
            )}
        </div>
    )
}

export default Favorites;