import { type ReactNode } from "react";
import styles from './CardProductStyles.module.css'

type CardProductContainerProps = {
    sectionTitle: string;
    descriptionTitle: string;
    children: ReactNode;
}

function CardProductContainer(props: CardProductContainerProps) {
    const {sectionTitle, descriptionTitle, children} = props;
    return (
        <section className={styles.stylesSectionContainer}>
         <h2 className={styles.titleSection}>{sectionTitle}</h2>
         <p className={styles.bajadaSection}>{descriptionTitle}</p>
         <div className={styles.stylesProductContainer}>
         {children}
         </div>
         </section>
    );

}

export default CardProductContainer;