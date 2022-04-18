import ContentLoader from 'react-content-loader'

import Card from './Card/Card'

import s from "./home.module.scss";

function Home(props) {
    let testArr = [...Array(8)];
    return (
        <div className={s.content}>
            <div className={s.headerCards}>
                <h1 className={s.title}>{props.searchValue ? `Поиск по: ${props.searchValue}` : 'Все кроссовки'}</h1>
                <div className={s.search}>
                    <img className={s.searchImg} src='/react-sneakers/img/search.svg' alt='search'/>
                    <input maxLength={16} value={props.searchValue} onChange={props.onChangeSearchInput}
                           className={s.searchInput} type="text" placeholder='Поиск...'/>
                    <img onClick={props.onDeleteSearch} className={s.crossImg} src='/react-sneakers/img/cross.png' alt='cross'/>
                </div>
            </div>
            <div className={s.cards}>
                {props.isLoading ? (
                    testArr.map((i, index) => i = <ContentLoader
                        key={index}
                        speed={2}
                        width={230}
                        height={260}
                        viewBox="0 0 210 260"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="3" ry="3" width="170" height="91"/>
                        <rect x="0" y="106" rx="3" ry="3" width="170" height="15"/>
                        <rect x="0" y="133" rx="3" ry="3" width="93" height="15"/>
                        <rect x="0" y="162" rx="3" ry="3" width="80" height="24"/>
                        <rect x="138" y="154" rx="3" ry="3" width="32" height="32"/>
                    </ContentLoader>)
                ) : (
                    <>
                        {props.items
                            .filter((item) => item.name.toLowerCase().includes(props.searchValue.toLowerCase()))
                            .map((item, index) =>
                                (
                                    <Card
                                        added={props.cartItems.some(i => Number(item.id) === Number(i.id))}
                                        favorited={props.favoritesItems.some(i => Number(item.id) === Number(i.id))}
                                        key={index}
                                        name={item.name}
                                        price={item.price}
                                        imgSrc={item.imgSrc}
                                        id={item.id}
                                        getObj={item}
                                        onPlus={(obj) => props.onAddToCart(obj)}
                                        onLike={(obj) => props.onAddToFavorites(obj)}
                                        isLoading={false}
                                        setCartItems={props.setCartItems}
                                    />
                                )
                            )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Home;