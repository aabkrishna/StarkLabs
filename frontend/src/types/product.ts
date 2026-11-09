export type Product = { id:string; slug:string; name:string; category:string; type:'project'|'component'; price:number; originalPrice?:number; rating:number; reviews:number; description:string; image:string; badge?:string; stock:string; specs:Record<string,string>; included:string[] };
export type CartItem = { productId:string; quantity:number };
