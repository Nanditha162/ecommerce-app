import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, removeItem, total, isOpen, toggleOpen, clear } = useCart();

  return (
    <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
      <div className={styles.header}>
        <h3>Shopping Cart</h3>
        <div>
          <button onClick={() => toggleOpen(false)}>Close</button>
        </div>
      </div>
      <div className={styles.body}>
        {items.length === 0 && <p>Your cart is empty.</p>}
        {items.map(i => (
          <div key={i.product.id} className={styles.item}>
            <img src={i.product.image} alt={i.product.name} width={64} height={64} style={{objectFit:'cover'}} />
            <div style={{flex:1}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <strong>{i.product.name}</strong>
                <span>${(i.product.price * i.quantity).toFixed(2)}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:6}}>
                <small>Qty: {i.quantity}</small>
                <button onClick={() => removeItem(i.product.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:8}}>
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <div style={{display:'flex', gap:8}}>
          <button onClick={() => clear()}>Clear</button>
          <button onClick={() => alert('Checkout not implemented in this demo')}>Checkout</button>
        </div>
      </div>
    </aside>
  );
}
