import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    {/* <BrowserRouter> */}
    {/* <Routes> */}

        {/* Route pour la page d'accueil */}
          {/* <Route path="/" element={<Home />} /> */}

          {/* Route pour le panier */}
          {/* <Route path="/panier" element={<Cart />} /> */}

          {/* Route dynamique pour la fiche produit (avec un paramètre :id) */}
          {/* <Route path="/produit/:id" element={<ProductDetail />} /> */}

          {/* Route "Route-all" : si l'URL ne correspond à rien, on affiche la 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
    {/* </Routes> */}
    {/* </BrowserRouter> */}

    Hello World !
    </>
  )
}

export default App
