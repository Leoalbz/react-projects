import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import CardProduct from "./CardProduct"
import CardProductContainer from "./CardProductContainer"
import ComponentNavBar from './navBar'

type NavBar = {
  tituloPagina: string;
  item1: string;
  item2: string;
  item3: string; 
}

const navBar: NavBar = {
  tituloPagina: 'Mercado Libre',
  item1: 'Lo mas visto',
  item2: 'Lo mas vendido',
  item3: 'Proximamente'
} 


type Products = {
    id: number;
    title : string;
    prize: number;
    comprar?: number;
    src: string;
    description: string;
  }



type Response = {
  mostPopular: {
  sectionTitle: string;
  descriptionTitle: string;
  products: Products[];
}
}

type Response2= {
  bestSellers: {
    sectionTitle: string;
    descriptionTitle: string;
    products: Products[];
  }
}

type Response3= {
  newSoon: {
    sectionTitle: string;
    descriptionTitle: string;
    products: Products[];
  }
}
const response: Response = {
  mostPopular: {
  sectionTitle: 'Los mas vistos',
  descriptionTitle: 'Aquí encontrarás los productos más populares',
  products: [
    {
      id: 1,
      title: 'Freidora de aire',
      prize: 450000,
      src: "https://tccommercear.vtexassets.com/arquivos/ids/156139-800-auto?v=637967768418970000&width=800&height=auto&aspect=true", 
      description: "Freidora de aire Philips Airfryer XL Essential Connected Rapid Air 2000W 6.2L"
    },
    {
      id: 2,
      title: 'SmartTV Samsung',
      prize: 450000,
      src: "https://images.samsung.com/is/image/samsung/p6pim/ar/qn50qn90cagczb/gallery/ar-qled-tv-qn50qn90cagczb-front-silver-thumb-536998975?$216_216_PNG$", 
      description: "Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto."
    },
    {
      id: 3,
      title: 'Notebook Lenovo',
      prize: 1500000,
      src: "https://p1-ofp.static.pub//medias/26050595576_LOQ15IRX9WHBKLTLunaGreyIMG_202309261024281718761736843.png", 
      description: "Cada notebook gamer Lenovo LOQ te ofrece la potencia que necesitás para jugar al máximo nivel, con procesadores de alto rendimiento y placas gráficas NVIDIA® GeForce RTX™ (opcionales y según el modelo). Además, con la inteligencia de Lenovo AI Engine+ y el chip Lenovo LA1 AI, vas a poder enfrentarte a títulos AAA, estudiar, trabajar, crear y transmitir contenido con fluidez."
    }
  ]
}
}

const response2: Response2 = {
  bestSellers: {
  sectionTitle: 'Los mas comprados',
  descriptionTitle: 'Aquí encontrarás los productos más comprados',
  products: [
    {
      id: 1,
      title: 'Freidora de aire',
      prize: 450000,
      src: "https://tccommercear.vtexassets.com/arquivos/ids/156139-800-auto?v=637967768418970000&width=800&height=auto&aspect=true", 
      description: "Freidora de aire Philips Airfryer XL Essential Connected Rapid Air 2000W 6.2L"
    },
    {
      id: 2,
      title: 'SmartTV Samsung',
      prize: 450000,
      src: "https://images.samsung.com/is/image/samsung/p6pim/ar/qn50qn90cagczb/gallery/ar-qled-tv-qn50qn90cagczb-front-silver-thumb-536998975?$216_216_PNG$", 
      description: "Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto."
    },
    {
      id: 3,
      title: 'Notebook Lenovo',
      prize: 1500000,
      src: "https://p1-ofp.static.pub//medias/26050595576_LOQ15IRX9WHBKLTLunaGreyIMG_202309261024281718761736843.png", 
      description: "Cada notebook gamer Lenovo LOQ te ofrece la potencia que necesitás para jugar al máximo nivel, con procesadores de alto rendimiento y placas gráficas NVIDIA® GeForce RTX™ (opcionales y según el modelo). Además, con la inteligencia de Lenovo AI Engine+ y el chip Lenovo LA1 AI, vas a poder enfrentarte a títulos AAA, estudiar, trabajar, crear y transmitir contenido con fluidez."
    }
  ]
}
}

const response3: Response3 = {
  newSoon: {
  sectionTitle: 'Proximamente',
  descriptionTitle: 'Aquí encontrarás los productos que próximamente estarán disponible para solicitarlos',
  products: [
    {
      id: 1,
      title: 'Freidora de aire',
      prize: 450000,
      src: "https://tccommercear.vtexassets.com/arquivos/ids/156139-800-auto?v=637967768418970000&width=800&height=auto&aspect=true", 
      description: "Freidora de aire Philips Airfryer XL Essential Connected Rapid Air 2000W 6.2L"
    },
    {
      id: 2,
      title: 'SmartTV Samsung',
      prize: 450000,
      src: "https://images.samsung.com/is/image/samsung/p6pim/ar/qn50qn90cagczb/gallery/ar-qled-tv-qn50qn90cagczb-front-silver-thumb-536998975?$216_216_PNG$", 
      description: "Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto."
    },
    {
      id: 3,
      title: 'Notebook Lenovo',
      prize: 1500000,
      src: "https://p1-ofp.static.pub//medias/26050595576_LOQ15IRX9WHBKLTLunaGreyIMG_202309261024281718761736843.png", 
      description: "Cada notebook gamer Lenovo LOQ te ofrece la potencia que necesitás para jugar al máximo nivel, con procesadores de alto rendimiento y placas gráficas NVIDIA® GeForce RTX™ (opcionales y según el modelo). Además, con la inteligencia de Lenovo AI Engine+ y el chip Lenovo LA1 AI, vas a poder enfrentarte a títulos AAA, estudiar, trabajar, crear y transmitir contenido con fluidez."
    }
  ]
}
}


function App() {
  const { mostPopular } = response;
  const {bestSellers} = response2;
  const {newSoon} = response3;
  const {tituloPagina, item1, item2, item3} = navBar;
  return (
    <>
      <ComponentNavBar tituloPagina={tituloPagina} item1={item1} item2={item2} item3={item3} />
     <CardProductContainer sectionTitle={mostPopular.sectionTitle} descriptionTitle={mostPopular.descriptionTitle}>
      {mostPopular.products.map((product) => {
        return (
             <CardProduct key={product.id} title={product.title} prize= {product.prize} description={product.description}
               src={product.src}/>
      )}
              )}
     </CardProductContainer>
     <CardProductContainer sectionTitle={bestSellers.sectionTitle} descriptionTitle={bestSellers.descriptionTitle}>
      {bestSellers.products.map((product) => {
        return (
             <CardProduct key={product.id} title={product.title} prize= {product.prize} description={product.description}
               src={product.src} />
      )}
              )}
     </CardProductContainer>
     <CardProductContainer sectionTitle={newSoon.sectionTitle} descriptionTitle={newSoon.descriptionTitle}>
      {newSoon.products.map((product) => {
        return (
             <CardProduct key={product.id} title={product.title} prize= {product.prize} description={product.description}
               src={product.src} />
      )}
              )}
     </CardProductContainer>
    </>
  )
}




export default App;
