import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/product/:productId' element={<ProductDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
