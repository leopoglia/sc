import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import New from "./pages/new";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new/:id" element={<New />} />
            </Routes>
        </BrowserRouter>
    )
}