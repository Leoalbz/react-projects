import { Link } from "react-router";


import { useCart } from "../hooks/useCart";




export default function ConfirmarCompra() {
  const {  total } = useCart();
  return (
    <div>
      <h2>Monto total de la compra: ${total}</h2>
      <h2>¿Deseás confirmar la compra?</h2>
        <button><Link to={'/compra_realizada'}>Si</Link></button>
        <button><Link to={'/'}>Volver al inicio</Link></button>
    </div>
  );
}