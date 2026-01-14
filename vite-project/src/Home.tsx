import { useNavigate } from "react-router"
import style from './CardProductStyles.module.css';





export function Home() {
    const navigate = useNavigate();
    return (
        <div className={style.homeStyle}>
            <button onClick= {() => navigate("/products")} >Haga Click aquí para ver nuestros productos</button>
        </div>
    )
}