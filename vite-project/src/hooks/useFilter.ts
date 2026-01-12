import { FilterContext } from "../context/FIlterContext";
import { useContext } from "react";

    



export function useFilter() { 
        const context = useContext(FilterContext);
        
        if(!context) {
        throw new Error  ('No se encuentra context')
        }
        
        return context
        }
        