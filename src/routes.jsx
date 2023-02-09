import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import New from "./pages/new";
import Admin from "./pages/admin/login";
import AddNew from "./pages/admin/addNew";
import ProtectedRoutes from "./pages/admin/privateRoute";
import Error from "./pages/error";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new/:id" element={<New />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route path="/admin/news" element={<AddNew />} />
                </Route>

                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}