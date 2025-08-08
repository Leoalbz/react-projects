import { useEffect, useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import CardProduct from "./CardProduct"
import CardProductContainer from "./CardProductContainer"
import ComponentNavBar from './navBar'
import SearchBar from './SearchBar'
import useSearch from './hooks/useSearch'
import CheckBox from './CheckBox'
import CarritoDetail from './pages/CarritoDetail'
import ConfirmarCompra from './pages/ConfimarCompra'
import { Route, Routes } from 'react-router'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFoundPage.tsx'
import CompraRealizada from './pages/CompraRealizada.tsx'
//import { useQuery } from '@tanstack/react-query';
import { productService } from './MOCK/service.ts';
import type { Products } from './types/typeProductMocks.ts'
import './index.css'; 



type NavBar = {
  tituloPagina: string;
  item1: string;
  item2: string;
  item3: string;
  carrito?: number;
  children: any;
}

const navBar: NavBar = {
  tituloPagina: 'Mercado Libre',
  item1: 'Lo mas visto',
  item2: 'Lo mas vendido',
  item3: 'Proximamente'
} 


function App() {
  const [carrito, setCarritoCount] = useState(0);
  const {tituloPagina, item1, item2, item3} = navBar;
  const [searchParams, setSearchParams] = useSearch();

 /* const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: productService.getAllProducts,
  });

  
  if (isLoading) {
    return 'loading....';
  }
 */ 
    const[products, setProducts] = useState<Products[]>([]);
    const[loading, setLoading] = useState(false);
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAllProducts();
        setProducts(data);
      }
      catch (error) { return 'error al cargar los productos'
      }
      finally {
        setLoading (false)
      }
    } ;

    useEffect (() => {
      loadProducts()}, []);
  
  if (loading) {
        return 'loading....';
      }


  const agregarCarrito = (prize: number) => {
  setCarritoCount((prev) => prev + prize);
};

  const quitarCarrito = (prize: number) => {
  setCarritoCount((prev) => (prev - prize));
};
  
  const titleValue = searchParams.get('title') ?? '';
  const categoriaValue = searchParams.get('categoria') ?? '';
  const categoriasElegidas = categoriaValue ? categoriaValue.split(',') : [];

  return (
    <>
      <Routes>
        
        <Route path='/' element={
        <>
      <ComponentNavBar 
      tituloPagina={tituloPagina} 
      item1={item1} 
      item2={item2} 
      item3={item3} 
      carrito={carrito}/>
      <CheckBox categoriasElegidas={categoriasElegidas} setSearchParams={setSearchParams} />
      <SearchBar query={titleValue} setSearchParams={setSearchParams}/>
      <CardProductContainer>
      {products?.filter((product) => product.title.includes(titleValue)).filter((product) => categoriasElegidas.length === 0 || categoriasElegidas.includes(product.category ?? '')).map((product) => {
        return (
          
             <CardProduct
             key={product.id} 
             id={product.id} 
             title={product.title} 
             prize= {product.price} 
             description={product.description}
             src={product.image}
             agregarCarrito={agregarCarrito}
             quitarCarrito={quitarCarrito}
             categoria={product.category}
               />
      )})}</CardProductContainer>
     </>
    } 
    />
    
        <Route path="/carrito" element={<CarritoDetail carritoTotal={carrito} />} />
        <Route path="/confirmar_compra" element={<ConfirmarCompra carritoTotal={carrito} />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/compra_realizada' element={<CompraRealizada />}/>    
        <Route path='/product/:id' element={<ProductDetail carrito= {carrito} agregarCarrito={agregarCarrito} quitarCarrito={quitarCarrito}/>}/>      
      </Routes>
    </>
    );
}




export default App;
