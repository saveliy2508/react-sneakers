import React from "react";
import s from './index.module.scss';
import Header from './components/Header/Header'
import Market from './components/content/Market'
import Aside from "./components/Aside/Aside";

function App() {
    const [items, setItems] = React.useState([])
    const [asideOpened, setAsideOpened] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([])
    const onAddToCart = (obj) => {
        if (!cartItems.some((i) => i.name === obj.name)) {
            setCartItems([...cartItems, obj])
        } else {
            let deleteObj = cartItems.map(i => i.name)
            cartItems.splice(deleteObj.indexOf(obj.name), 1)
        }
    }
    React.useEffect(() => {
        fetch('https://6242deadd126926d0c58b871.mockapi.io/items').then((res) => {
            return res.json();
        }).then((json) => {
            setItems(json)
        })
    }, []);
    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                {asideOpened ? <Aside items={cartItems} onAsideClosed={() => setAsideOpened(false)}/> : null}
                <Header onAsideOpened={() => setAsideOpened(true)}/>
                <Market onAddToCart={onAddToCart} items={items} setCartItems={() => setCartItems()}/>
            </div>
        </div>
    );
}

export default App;
