import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import CardProductContainer from "./CardProductContainer";
import type { Products } from "./types/typeProductMocks";
import useSearch from "./hooks/useSearch";
import { productService } from "./MOCK/service";



export function Products(){
    const [carrito, setCarritoCount] = useState<Products[]>([]);
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
  
  
    const agregarCarrito = (product: Products) => {
     setCarritoCount((prev) => [...prev, product]);
  };
  
    const quitarCarrito = (id: number) => {
      setCarritoCount((prev) => prev.filter((product) => product.id !== id));
  };
    
    const titleValue = searchParams.get(('title')) ?? '';
    const categoriaValue = searchParams.get('categoria') ?? '';
    const categoriasElegidas = categoriaValue ? categoriaValue.split(',') : [];
    return (
        <CardProductContainer>
        {products?.filter((product) => product.title.includes(titleValue)).filter((product) => categoriasElegidas.length === 0 || categoriasElegidas.includes(product.category ?? '')).map((product) => {
        return (
          
             <CardProduct
             product={product}
             agregarCarrito={agregarCarrito}
             quitarCarrito={quitarCarrito}
               />
      )})}</CardProductContainer>
    )
}