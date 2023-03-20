import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Example from './pages/Example';
import Main from './pages/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Example />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
