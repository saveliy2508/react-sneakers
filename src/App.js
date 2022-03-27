import s from './index.module.scss';
import Header from './components/Header/Header'
import Market from './components/content/Market'
import Aside from "./components/Aside/Aside";

function App() {
    return (
        <div className={s.App}>
            <div className={s.wrapper}>
                <Aside />
                <Header/>
                <Market/>
            </div>
        </div>
    );
}

export default App;
