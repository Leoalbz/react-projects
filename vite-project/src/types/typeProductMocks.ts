export type Products = {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    description: string;
    category: string;
    brand?: string,
    colors?: string[];
    image: string;
    rating: {
        rate: number;
      count: number;
    };
    prime?: boolean;
    inStock?: boolean;
}
  export type Categories = {
    id: string; 
    name: string; 
  }

  
  export type ProductsFormData = {
    id: number;
    title: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    description: string;
    category: string;
    brand?: string,
    colors?: string[];
    image: string;
    rating: {
        rate: number;
      count: number;
    };
    prime?: boolean;
    inStock?: boolean;
  }