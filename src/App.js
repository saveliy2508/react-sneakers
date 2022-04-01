import React from "react";
import s from './index.module.scss';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Aside from "./components/Aside/Aside";
import Favorites from './components/Favorites/Favorites'
import axios from "axios";
import {Route, Routes} from "react-router-dom";

function App() {
    const [items, setItems] = React.useState([])

    const [asideOpened, setAsideOpened] = React.useState(false);

    const [favoritesOpened, setFavoritesOpened] = React.useState();

    const [cartItems, setCartItems] = React.useState([])

    const [favoritesItems, setFavoritesItems] = React.useState([])

    const [searchValue, setSearchValue] = React.useState('')

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onDeleteSearch = () => {
        setSearchValue('')
    }

    const onDeleteCartItem = (index) => {
        axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/cart/${index}`)
        setCartItems((prev) => prev.filter(item => item.index != index))
    }

    const onAddToCart = (obj) => {
        if (cartItems.find((i) => i.name === obj.name)) {
            let index = cartItems.find(i => i.id == obj.id).index;
            setCartItems((prev) => prev.filter(item => item.name != obj.name))
            axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/cart/${index}`)
        } else {
            setCartItems((prev) => [...prev, obj])
            axios.post('https://6242deadd126926d0c58b871.mockapi.io/cart', obj)
        }
    }

    const onAddToFavorites = (obj) => {
        if (!favoritesItems.find((i) => i.name === obj.name)) {
            setFavoritesItems((prev) => [...prev, obj])
            axios.post('https://6242deadd126926d0c58b871.mockapi.io/favorites', obj)
        } else {
            let index = favoritesItems.find(i => i.id == obj.id).index;
            axios.delete(`https://6242deadd126926d0c58b871.mockapi.io/favorites/${index}`)
            setFavoritesItems((prev) => prev.filter(item => item.name != obj.name))
        }
    }

    React.useEffect(() => {
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/items')
            .then(res => setItems(res.data))
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/cart')
            .then(res => setCartItems(res.data))
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/favorites')
            .then(res => setFavoritesItems(res.data))
    }, []);

    React.useEffect(() => {
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/cart')
            .then(res => setCartItems(res.data))
    }, [asideOpened]);

    React.useEffect(() => {
        axios.get('https://6242deadd126926d0c58b871.mockapi.io/favorites')
            .then(res => setFavoritesItems(res.data))
    }, [favoritesOpened]);

    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                {asideOpened ? <Aside
                    items={cartItems}
                    onAsideClosed={() => setAsideOpened(false)}
                    onDeleteCartItem={onDeleteCartItem}
                /> : null}

                <Header
                    onAsideOpened={() => setAsideOpened(true)}
                    setFavoritesOpened={setFavoritesOpened}
                    favoritesOpened={favoritesOpened}
                />

                <Routes>

                    <Route path='/' element={
                        <Home
                            onDeleteSearch={onDeleteSearch}
                            onChangeSearchInput={onChangeSearchInput}
                            searchValue={searchValue}
                            onAddToCart={onAddToCart}
                            items={items}
                            setCartItems={() => setCartItems()}
                            setFavoritesItems={() => setFavoritesItems()}
                            onAddToFavorites={onAddToFavorites}
                        />
                    }/>

                    <Route path='/favorites' element={
                        <Favorites
                            onAddToCart={onAddToCart}
                            setCartItems={() => setCartItems()}
                            onAddToFavorites={onAddToFavorites}
                            items={favoritesItems}
                            setFavoritesItems={() => setFavoritesItems()}
                        />}
                    />

                </Routes>
            </div>
        </div>
    );
}

export default App;
