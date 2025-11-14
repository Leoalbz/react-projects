import { Link } from 'react-router';
import styles  from './CardProductStyles.module.css'
import useSearch from './hooks/useSearch'
import SearchBar from './SearchBar.tsx';
import type { Products } from './types/typeProductMocks.ts';
import type { ReactNode } from 'react';

type NavBarProps = {
   tituloPagina: string;
   item1: string;
   item2: string;
   item3: string;
   carrito: Products[];
   children: ReactNode;
}




function ComponentNavBar(props: NavBarProps){
    const [searchParams, setSearchParams] = useSearch();
    const titleValue = searchParams.get('title') ?? '';
    const handleClick = () => {};
    const {tituloPagina , item1 ,item2, item3, carrito, children} = props;
    const total = carrito.reduce((acc, item) => acc + item.price, 0);

    return (
    <div className={styles.NavBarHeader}>
    <Link to={'/'}><h1 className={styles.titlePagestyle}>{tituloPagina}</h1></Link>
    <SearchBar query={titleValue} setSearchParams={setSearchParams}/>
    <div className={styles.navBarContainer}>
    <ul className={styles.navBarstyle}>
        <li className={styles.itemsStyle}>{item1}</li>
        <li className={styles.itemsStyle}>{item2}</li>
        <li className={styles.itemsStyle}>{item3}</li>
        <li className={styles.itemsStyle}>{total}</li> 
    </ul>
    </div>
    <div>{children}</div>
    <div><Link to={'/carrito'} onClick={handleClick} state={carrito}>Ir al carrito</Link>
    </div>
    </div>
    )
}

export default ComponentNavBar;