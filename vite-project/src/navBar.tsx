import { Link } from 'react-router';
import styles  from './CardProductStyles.module.css'
import './NavBar.css'
import useSearch from './hooks/useSearch'
import SearchBar from './SearchBar.tsx';
import type { Products } from './types/typeProductMocks.ts';
import { useState, type ReactNode } from 'react';
import type { CartType } from './context/CarritoContext.tsx';
import { useCart } from './hooks/useCart.ts';

type NavBarProps = {
   tituloPagina: string;
   item1: string;
   item2: string;
   item3: string;
   carrito: CartType[];
   children: ReactNode;
   searchParams: URLSearchParams;
   setSearchParams: (params: any) => void;
}




function ComponentNavBar(props: NavBarProps){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {tituloPagina , item1 ,item2, item3, children, searchParams, setSearchParams} = props;
    const titleValue = searchParams.get('title') ?? '';
   const {cart, total} = useCart();

    return (
      <div className={styles.NavBarHeader}>

        <Link to={'/'}>
          <h1 className={styles.titlePagestyle}>{tituloPagina}</h1>
        </Link>
      
        <SearchBar
        query={titleValue}
        setSearchParams={setSearchParams}
        />

       
       
        <div className="navbar-bottom">
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
        <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
          <ul className={styles.navBarstyle}>
            <li className={styles.itemsStyle}>{item1}</li>
            <li className={styles.itemsStyle}>{item2}</li>
            <li className={styles.itemsStyle}>{item3}</li>
            <li className={styles.itemsStyle}>${total}</li>
          </ul>
          <Link to="/carrito" state={cart}>🛒
                {/*<img src="/carro-de-la-compra.png" alt="carrito" />*/}
              </Link>
          </div>
          
          {children}
        </div>
      
      </div>
      )
}

export default ComponentNavBar;