export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Tee',
    price: 19.99,
    description: 'Comfortable cotton t-shirt, perfect for everyday wear.',
    image: 'https://images.unsplash.com/photo-1520975916892-5f777f6d3d8b?w=800&q=80&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 79.0,
    description: 'Stylish denim jacket with vintage wash.',
    image: 'https://images.unsplash.com/photo-1520975916751-3c1e9b8f3b40?w=800&q=80&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Running Sneakers',
    price: 120.0,
    description: 'Lightweight and comfortable running sneakers.',
    image: 'https://images.unsplash.com/photo-1519741496685-6b4d5f6f5f9b?w=800&q=80&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Leather Wallet',
    price: 45.0,
    description: 'Handcrafted leather wallet with multiple card slots.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop'
  }
];
