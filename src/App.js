import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Use 'path' instead of 'to' */}
          <Route path='/' element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
