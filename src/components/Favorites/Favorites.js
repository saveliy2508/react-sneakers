import s from "./favorites.module.scss";
import Card from '../Home/Card/Card'

function Favorites(props) {
    return (
        <div className={s.content}>
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
                                getObj={item}
                                onLike={(obj) => props.onAddToFavorites(obj)}/>
                        )
                    )}
            </div>
        </div>
    )
}

export default Favorites;