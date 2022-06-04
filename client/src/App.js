
import './App.css';
import Advertisement from './components/Ads/Advertisement';
import Footer from './components/HeaderFooter/Footer';
import Header from './components/HeaderFooter/Header';
import Subheader from "./components/HeaderFooter/Subheader";
import FeaturedProducts from './components/ProductsCards/FeaturedProducts';
import Products from './components/ProductsCards/Products';

function App() {
  return (
    <>
    <Header />
    <Subheader />
    <Advertisement />
    <FeaturedProducts />
    <Products />
    <Footer />
    </>
  );
}

export default App;
