import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import TemplateLoader from './components/TemplateLoader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/:templateName" element={<TemplateLoader />} />
        <Route path="/test" element={<div>Test</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
