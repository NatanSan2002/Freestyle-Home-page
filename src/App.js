import { BrowserRouter, Routes, Route} from "react-router-dom";

import Centralizer from "./assets/components/global/Centralizer/Centralizer";

import Navbar from "./assets/components/global/Navbar/navbar";
import Footer from "./assets/components/global/Footer/Footer";

import Home from "./assets/components/pages/home/home";

function App() {
  return (
    <BrowserRouter>
  
<Navbar/>
<Centralizer>
<main>

<Routes>
<Route exact path="/" element={<Home/>}/> 



</Routes>
</main>

<Footer/>
</Centralizer>
</BrowserRouter> 
    
  );
}

export default App;
