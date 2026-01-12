
import CheckBox from "../CheckBox";
import ComponentNavBar from "../navBar";
import { Outlet } from "react-router";
import style from '../CardProductStyles.module.css'
import { useCart } from "../hooks/useCart";
import type { CartType } from '../context/CarritoContext.tsx'
import { useFilter } from "../hooks/useFilter.ts";

type Layoutprops = {
    carrito: CartType[];
    categoriasElegidas: string[];
    searchParams: URLSearchParams;
    setSearchParams: (params: any) => void;

}
type NavBar = {
    tituloPagina: string;
    item1: string;
    item2: string;
    item3: string;
    carrito?: CartType[];
  }
  
  const navBar: NavBar = {
    tituloPagina: 'Ecommerce',
    item1: 'Lo mas visto',
    item2: 'Lo mas vendido',
    item3: 'Proximamente'
  } 


export function Layout(props: Layoutprops){
  const { cart } = useCart();
  const {filter, setFilter} = useFilter();
    const { categoriasElegidas, searchParams, setSearchParams } = props;
    const {tituloPagina, item1, item2, item3} = navBar;

    return(
        <div className={style.styleLayout}>
          <div className={style.navBarstyleLayout}>
      <ComponentNavBar 
      tituloPagina={tituloPagina} 
      item1={item1} 
      item2={item2} 
      item3={item3} 
      carrito={cart}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      >
      <CheckBox categoriasElegidas={categoriasElegidas} setSearchParams={setSearchParams} />
      </ComponentNavBar>
      </div>
      <main className="main-content">
      <Outlet />
      </main>
      </div>
    )
}