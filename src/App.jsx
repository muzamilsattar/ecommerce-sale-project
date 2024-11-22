import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoriesList';
import NewProductsList from './components/NewProductsList';
import Carosel from './components/Carosel';
import Cart from './pages/Cart'; // Import the Cart component
import './App.css';

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Section>
                  <Carosel />
                </Section>
                <Section>
                  <div className="mb-2 bg-gray-100 mx-3">
                    <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
                      Flash Sale
                    </h1>
                    <ProductList />
                  </div>
                </Section>
                <Section>
                  <div className="mb-2 bg-gray-100 mx-3">
                    <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
                      Flash Sale
                    </h1>
                    <ProductList />
                  </div>
                </Section>
                <Section>
                  <div className="mb-2 bg-gray-100 mx-3">
                    <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
                      Categories
                    </h1>
                    <CategoryList />
                  </div>
                </Section>
                <Section>
                  <div className="mb-2 bg-gray-100 mx-3">
                    <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1 text-orange-500 underline">
                      New Arrival
                    </h1>
                    <NewProductsList />
                  </div>
                </Section>
              </>
            }
          />
          {/* Flash Sale Route */}
          <Route
            path="/flash-sale"
            element={
              <Section>
                <div className="mb-2 bg-gray-100 mx-3">
                  <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
                    Flash Sale
                  </h1>
                  <ProductList />
                </div>
              </Section>
            }
          />
          {/* Categories Route */}
          <Route
            path="/categories"
            element={
              <Section>
                <div className="mb-2 bg-gray-100 mx-3">
                  <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
                    Categories
                  </h1>
                  <CategoryList />
                </div>
              </Section>
            }
          />
          {/* New Arrival Route */}
          <Route
            path="/new-arrivals"
            element={
              <Section>
                <div className="mb-2 bg-gray-100 mx-3">
                  <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1 text-orange-500 underline">
                    New Arrival
                  </h1>
                  <NewProductsList />
                </div>
              </Section>
            }
          />
          {/* Cart Route */}
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
