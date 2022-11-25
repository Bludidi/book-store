/* eslint-disable */ 
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/book';
import Categories from './components/categories';
import store from './redux/configureStore';

const App = () => (
  <>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </Provider>
  </>
);

export default App;
