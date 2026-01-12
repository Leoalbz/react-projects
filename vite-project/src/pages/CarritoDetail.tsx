import { Link } from "react-router";
import type { Products } from "../types/typeProductMocks";
import style from '../CardProductStyles.module.css'
import { useCart } from "../hooks/useCart";



type CarritoDetailType = {
  carrito: Products[];
  handleClick: (id: number) => void;
};





export default function CarritoDetail(props: CarritoDetailType) {
  const {cart , total, removeFromCart} = useCart();
  


  return (
    <div className={style.carritoContainer}>
      <div className={style.CarritoDetail}>
      <h1 className={style.tituloCarrito}>Proceso de compra</h1>
      </div>
      {cart.map((item) => (
      <div className={style.productosCarrito}>
      <img src={item.image}/>
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <h4>Cantidad: {item.quantity}</h4>
      <button onClick={() =>removeFromCart(item.id)}>Eliminar Producto</button>
      </div>
      ))}
      <b><p className={style.totalCarrito}>Total: ${total}</p></b>
      <br />
      <button className="ml-auto bg-gray-800 hover:bg-gray-900 font-semibold py-2 px-6 rounded-lg shadow transition"><Link to="/confirmar_compra">Confirmar compra</Link></button>
      <button className="ml-auto bg-gray-800 hover:bg-gray-900 font-semibold py-2 px-6 rounded-lg shadow transition"><Link to="/">Volver al inicio</Link></button>
    </div>
  );
}