import ProductList from '../components/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Store — Minimal Demo</title>
      </Head>
      <h1 style={{marginBottom:16}}>Products</h1>
      <ProductList />
    </>
  );
}
