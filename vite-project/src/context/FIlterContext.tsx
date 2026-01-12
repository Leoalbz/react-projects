import { createContext, useState, type ReactNode } from "react";

export type FilterType = {
    category: string[];
    searchName: string

}


type FilterContextType = {
    filter: FilterType[];
    setFilter: (item: FilterType[])=>void;
    /*setSearchName: (item:string) => void;
    toggleCategory: (item:string[]) => void;
    clearfilter : () => void;*/

}


export const FilterContext = createContext<FilterContextType | null>(null);


export function FilterProvider({children}:{children:ReactNode}) {
    const [filter, setFilter] = useState<FilterType>({category: [''],searchName: ''});

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
        {children}
        </FilterContext.Provider>
    )



}