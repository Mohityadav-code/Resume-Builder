import { BrowserRouter, Route, Routes } from "react-router-dom";

import DummyComponent from "./pages/FilteredData";
import ZeroPage from "./pages/ZeroPage";

function App() {
  return (
    <div className="flex rounded-lg bg-white py-2">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/dashboard" element={<DummyComponent />} />
          <Route path="/" element={<ZeroPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
