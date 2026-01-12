import { Link } from "react-router"
import style from './CardProductStyles.module.css';

const handleClick = () => {
    console.log('Hola');
}



export function Home() {
    return (
        <div className={style.homeStyle}>
            <button onClick={handleClick}><Link to="/products" >Haga Click aquí para ver nuestros productos</Link></button>
        </div>
    )
}