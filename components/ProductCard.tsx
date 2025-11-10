import Link from 'next/link';
import { Product } from '../data/products';
import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.img} />
      <div className={styles.body}>
        <h3>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <div className={styles.actions}>
          <Link href={`/product/${product.id}`}><a>View</a></Link>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
