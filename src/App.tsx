import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/pages/Home/Home.jsx'
import Cart from './views/pages/Cart/Cart.jsx'
import { Navbar } from './views/components/Navbar/Navbar'
// import ProductDetail from './views/pages/ProductDetail/ProductDetail'
import NotFound from './views/pages/NotFound/NotFound'
import Product from './views/pages/Product/Product'
import History from './views/pages/History/History.tsx'


function App() {
  

  return (
    <>
    <BrowserRouter>
        <Navbar />
    <Routes>
        {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Product />} />

          {/* Route pour le panier */}
          <Route path="/panier" element={<Cart />} />
          <Route path="/historique" element={<History />} />

          {/* Route dynamique pour la fiche produit (avec un paramètre :id) */}
          {/* <Route path="/produit/:id" element={<ProductDetail />} /> */}

          {/* Route "Route-all" : si l'URL ne correspond à rien, on affiche la 404 */}
          <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>

 
    </>
  )
}

export default App
