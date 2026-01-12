import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css'
import './App.css'
import App from './App.tsx'
import { CartContextProvider } from './context/CarritoContext.tsx';
import { FilterProvider } from './context/FIlterContext.tsx';
import { Layout } from './layout/Layout.tsx';



export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <CartContextProvider>
      <FilterProvider>
       <App />
      </FilterProvider>
    </CartContextProvider>
    </BrowserRouter>
    </QueryClientProvider>  
  </StrictMode>
)

