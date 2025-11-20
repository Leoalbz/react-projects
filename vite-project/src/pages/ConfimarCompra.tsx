import { Link } from "react-router";

import type { Products } from "../types/typeProductMocks";

type Props = {
  carrito: Products[];
};


export default function ConfirmarCompra(props: Props) {
  const { carrito } = props
  const total = carrito.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <h2>Monto total de la compra: ${total}</h2>
      <h2>¿Deseás confirmar la compra?</h2>
        <button><Link to={'/compra_realizada'}>Si</Link></button>
        <button><Link to={'/'}>Volver al inicio</Link></button>
    </div>
  );
}