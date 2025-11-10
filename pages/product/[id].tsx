import { useRouter } from 'next/router';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
      <img src={product.image} alt={product.name} style={{width:'100%', borderRadius:8}} />
      <div>
        <h2>{product.name}</h2>
        <p style={{fontWeight:600}}>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <div style={{marginTop:16}}>
          <button onClick={() => addItem(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
