import { useContext } from "react"
import { CartContext } from "../context/CarritoContext";



export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error ('No se encuentra el contexto')
    }
    
    return (context)
}