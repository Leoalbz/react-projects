import { createContext, useState, type ReactNode, Children, useMemo } from 'react';
import type { Products } from '../types/typeProductMocks';

export type CartType = Products & { quantity: number }



export type CarritoContextType = {
  cart: CartType[];
  total: number;
  addtoCart: (product: Products) => void;
  removeFromCart: (id: number) => void;
};

export const CartContext = createContext<CarritoContextType | null>(null);

export function CartContextProvider ({children}:{children:ReactNode}) {
    const [cart, setCart] = useState<CartType[]>([])


    const addtoCart = (product: Omit<CartType, 'quantity'>) => {
      setCart(prev => {
        const existing = prev.find(item => item.id === product.id);
    
        if (existing) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
    
        return [...prev, { ...product, quantity: 1 }];
      });
    };



    const removeFromCart = (id: number) => {
      setCart(prev => prev.filter(item => item.id !== id));
    }

    const total = useMemo(() => {
      return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}, [cart]
    );



    return (
       <CartContext.Provider value={{cart,total,addtoCart,removeFromCart}}>
        {children}
       </CartContext.Provider>

    );


}

