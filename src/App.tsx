import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import TemplateLoader from './components/TemplateLoader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="/:templateName" element={<TemplateLoader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
