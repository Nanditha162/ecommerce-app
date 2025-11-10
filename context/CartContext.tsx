import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  total: number;
  isOpen: boolean;
  toggleOpen: (v?: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => prev.filter(i => i.product.id !== productId));
  };

  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  const toggleOpen = (v?: boolean) => {
    if (typeof v === 'boolean') setIsOpen(v);
    else setIsOpen(prev => !prev);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, total, isOpen, toggleOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
