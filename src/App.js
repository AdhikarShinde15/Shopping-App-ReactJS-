import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./Components/Cart/Cart"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"

const App = () => {
  return (
    <BrowserRouter>
     <Header />
     <Routes> 
       <Route path="/" element={ <Home/> }/>
       <Route path="cart" element={ <Cart/> }/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
