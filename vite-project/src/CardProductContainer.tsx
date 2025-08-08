import { type ReactNode } from "react";
import styles from './CardProductStyles.module.css'

type CardProductContainerProps = {
    children: ReactNode;
}

function CardProductContainer(props: CardProductContainerProps) {
    const {children} = props;
    return (
        <section className={styles.stylesSectionContainer}>
         <div className={styles.stylesProductContainer}>
         {children}
         </div>
         </section>
    );

}

export default CardProductContainer;