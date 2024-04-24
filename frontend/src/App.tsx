// Импортируем  требуемые компоненты из react-router-dom
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Создаем папку pages в src , а в ней 2 компонента, импортируем их...
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Products from "./pages/Products";

function App() {


  return (
  
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/auth">About</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>

        </nav>
       
      </header>
      <main>
        <Routes>
            <Route path="auth" element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
    
        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;