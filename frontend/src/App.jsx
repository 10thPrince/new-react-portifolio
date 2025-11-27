import  Home from './pages/Home' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Toaster } from './components/ui/toaster';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
    <Toaster />
    <Navbar />
    <StarBackground />
    <ThemeToggle />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
