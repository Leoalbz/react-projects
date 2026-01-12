import { Link, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../MOCK/service';
import type { Products } from '../types/typeProductMocks';
import ComponentNavBar from '../navBar';
import style from '../CardProductStyles.module.css'
import useSearch from '../hooks/useSearch';



/*import { Link, useNavigate, useParams } from 'react-router';
import { getProductById } from '../getProductById';
import type { Products } from '../types/typeProduct';
function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate('/');
    return null;
  }

  const numericId = parseInt(id);
  const product: Products | undefined = getProductById(numericId);

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado</p>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.src} alt={product.title} width={300} />
      <p><strong>Descripción:</strong> {product.description}</p>
      <p>Precio: ${product.prize}</p>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default ProductDetail;*/
type NavBar = {
  tituloPagina: string;
  item1: string;
  item2: string;
  item3: string;
  carrito?: number;
  children: any;
}
type DetalleProducto = {
  agregarCarrito: (product: Products) => void;
  quitarCarrito: (id: number) => void;
  carrito: Products[];
}

function ProductDetail(props: DetalleProducto)  {
  const { carrito , agregarCarrito, quitarCarrito } = props;

  const navBar: NavBar = {
    tituloPagina: 'Ecommerce',
    item1: 'Lo mas visto',
    item2: 'Lo mas vendido',
    item3: 'Proximamente'
  } 

  const { id } = useParams<{ id:string }>();

  

  const productId = Number(id);
  if (isNaN(productId)) {
    return <p>ID de producto inválido</p>;
  }
  const { data: product, isLoading, isError } = useQuery<Products>({
    queryKey: ['product', productId],
    queryFn: () => productService.getProductById(productId),
  });

  if (isLoading) return <p>Cargando detalle...</p>;
  if (isError || !product) return <p>Producto no encontrado</p>;

  return (
    <div className={style.pageContainer}>
        <div className={style.productoDetailContainer}>
          <div className="flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className={style.productDetailInformation}>
              <h2>
                {product.title}
              </h2>
              <b><p>
                {product.description}
              </p>
              </b>
              <p >
                ${product.price}
              </p>
              <span className="inline-block px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium uppercase tracking-wide">
                Categoría: {product.category}
              </span>
            </div>
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => agregarCarrito(product)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Agregar al carrito
              </button>
              <button
                onClick={() => quitarCarrito(product.price)}
                className="bg-red-500 hover:bg-red-600 font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Quitar del carrito
              </button>
              <button className="ml-auto bg-gray-800 hover:bg-gray-900 font-semibold py-2 px-6 rounded-lg shadow transition">
              <Link
                to="/"
                >
                Volver al inicio
              </Link>
              </button>
            </div>
          </div>

        </div>
        </div>

  );
}

export default ProductDetail;