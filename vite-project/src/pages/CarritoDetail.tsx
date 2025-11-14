import { Link } from "react-router";
import type { Products } from "../types/typeProductMocks";



type CarritoDetailType = {
  carrito: Products[];
  handleClick: (id: number) => void;
};



export default function CarritoDetail(props: CarritoDetailType) {
  const{ carrito, handleClick } = props;
  const total = carrito.reduce((acc, item) => acc + item.price, 0);
  


  return (
    <div>
      <div>
      <h1>Proceso de compra</h1>
      <p>Usted está por comprar:</p>
      </div>
      {carrito.map((item) => (
      <div>
      <img src={item.image}/>
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <button onClick={() =>handleClick(item.id)}>Eliminar Producto</button>
      </div>
      ))}
      <b><p>Total: ${total}</p></b>
      <br />
      <button className="ml-auto bg-gray-800 hover:bg-gray-900 font-semibold py-2 px-6 rounded-lg shadow transition"><Link to="/confirmar_compra">Confirmar compra</Link></button>
      <button className="ml-auto bg-gray-800 hover:bg-gray-900 font-semibold py-2 px-6 rounded-lg shadow transition"><Link to="/">Volver al inicio</Link></button>
    </div>
  );
}