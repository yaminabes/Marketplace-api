import './App.css';
import MarketplaceFunctional from './pages/Marketplace/Marketplace.tsx';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AdForm from "./pages/Marketplace/AdForm.tsx";
import {ScopedCssBaseline} from "@mui/material";
import MarketplaceLayout from './pages/Marketplace/MarketPlaceLayout.tsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/offres"} element={<MarketplaceLayout/>}>
                <Route index element={<MarketplaceFunctional />} />
                <Route path={"new"} element={<AdForm />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
