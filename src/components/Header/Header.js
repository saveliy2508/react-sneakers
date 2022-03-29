import s from "./header.module.scss";

function Header(props){
    return(
    <header className={s.header}>
        <div className={s.headerLeft}>
            <img src='./img/logo.svg'/>
            <div className={s.text}>
                <p className={s.title}>REACT SNEAKERS</p>
                <p className={s.slogan}>Лучший магазин кроссовок</p>
            </div>
        </div>
        <div className={s.headerRight}>
            <img onClick={props.onAsideOpened} src='./img/basket.svg' className={s.group}/>
            <p className={s.summ}>1205 руб.</p>
            <img src='./img/headerLike.svg' className={s.heart}/>
            <img src='./img/headerProfile.svg' className={s.man}/>
        </div>
    </header>
    )
}

export default Header;