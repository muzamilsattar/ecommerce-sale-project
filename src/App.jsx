// import Carosel from './components/Carosel';
// import Header from './components/Header';
// import Section from './components/Section';
// import './App.css';
// import ProductList from './components/ProductList';

// import CategoryList from './components/CategoriesList';
// import NewProductsList from './components/NewProductsList';
// function App() {
//   return (
//     <div className="">
//       <Header />
//       <Section>
//         <Carosel />
//       </Section>
//       <Section>
//         <div className="mb-2 bg-gray-100 mx-3  ">
//           <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
//             Flash Sale
//           </h1>
//           <ProductList />
//         </div>
//       </Section>
//       {/* categories section */}
//       <Section>
//         <div className="mb-2 bg-gray-100 mx-3  ">
//           <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1">
//             Categories
//           </h1>
//           <CategoryList />
//         </div>
//       </Section>
//       <Section>
//         <div className="mb-2 bg-gray-100 mx-3    ">
//           <h1 className="text-xl font-bold font-mono text-start mb-1 mx-1 text-orange-500  underline">
//             New Arrival
//           </h1>
//           <NewProductsList />
//         </div>
//       </Section>
//     </div>
//   );
// }

// export default App;

// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoriesList';
import NewProductsList from './components/NewProductsList';
import Carosel from './components/Carosel';
import ProductDetails from './components/ProductDetails'; // Import ProductDetails component
import './App.css';

function App() {
  return (
    <Router>
      <div className="">
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
        {/* categories section */}
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
      </div>
    </Router>
  );
}

export default App;
