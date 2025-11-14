import styles from './CardProductStyles.module.css'
import {Link} from 'react-router';
import type { Products } from './types/typeProductMocks.ts'

type CardProductProps = {
    product: Products;
    agregarCarrito: (product:Products) => void;
    quitarCarrito: (id: number) => void;
}


function CardProduct (props: CardProductProps){
    const { product, agregarCarrito, quitarCarrito } = props;



    return (
        <article className={styles.cardProductSection}>
            <img src={product.image} className={styles.imageProduct}/>
            <div className={styles.cardProductContent}>
                <h2 className={styles.tituloProducto}>{product.title}</h2>
                <h3 className={styles.prizeProducto}>{product.price}</h3>
                <p>{product.description}</p>
            </div>
            <div className={styles.botonesCard}>
            <button className={styles.comprarProducto} onClick={() => agregarCarrito(product)}>Agregar</button><button onClick={() => quitarCarrito(product.id)}>Quitar</button>
            <Link to={`/product/${product.id}`}>Ver producto</Link>            
            </div>
        </article>
    );
}

export default CardProduct;