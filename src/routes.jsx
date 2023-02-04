import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import New from "./pages/new";
import Admin from "./pages/admin";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new/:id" element={<New />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}