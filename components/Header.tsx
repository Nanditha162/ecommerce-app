import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { items, toggleOpen } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>E-Store</div>
      <div>
        <button onClick={() => toggleOpen(true)}>Cart ({count})</button>
      </div>
    </header>
  );
}
