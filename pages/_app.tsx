import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <main style={{padding:16, maxWidth:1100, margin:'0 auto'}}>
        <Component {...pageProps} />
      </main>
      <CartDrawer />
    </CartProvider>
  );
}
