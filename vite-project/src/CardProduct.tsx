import styles from './CardProductStyles.module.css'
import {Link} from 'react-router';
import type { Products } from './types/typeProductMocks.ts'
import { useCart } from './hooks/useCart.ts';

type CardProductProps = {
    product: Products;
    agregarCarrito: (product:Products) => void;
    quitarCarrito: (id: number) => void;
}




function CardProduct (props: CardProductProps){
    const { product } = props;

    const {addtoCart, removeFromCart} = useCart();



    return (
        <article className={styles.cardProductSection}>
            <img src={product.image} className={styles.imageProduct}/>
            <div className={styles.cardProductContent}>
                <h2 className={styles.tituloProducto}>{product.title}</h2>
                <h3 className={styles.prizeProducto}>{product.price}</h3>
                <p>{product.description}</p>
            </div>
            <div className={styles.botonesCard}>
            <button className={styles.comprarProducto} onClick={() => addtoCart(product)}>Agregar</button><button onClick={() => removeFromCart(product.id)}>Quitar</button>
            <button><Link to={`/product/${product.id}`}>Ver producto</Link></button>            
            </div>
        </article>
    );
}

export default CardProduct;