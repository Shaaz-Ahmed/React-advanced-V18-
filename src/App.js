import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Use 'path' instead of 'to' */}
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
