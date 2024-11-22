import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoriesList';
import NewProductsList from './components/NewProductsList';
import Carosel from './components/Carosel';
// Import the Cart component
import './App.css';
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={
<>
       
        <div>
          <Header />
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

          {/* Categories Route */}

          <Section>
            <div className="mb-2 bg-gray-100 mx-3">
              <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
                Categories
              </h1>
              <CategoryList />
            </div>
          </Section>

          {/* New Arrival Route */}

          <Section>
            <div className="mb-2 bg-gray-100 mx-3">
              <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1 text-orange-500 underline">
                New Arrival
              </h1>
              <NewProductsList />
            </div>
          </Section>
        </div>
</>
         }
         </Routes>
        );
        </Router>
      }
      