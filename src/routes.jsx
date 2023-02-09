import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import New from "./pages/new";
import Admin from "./pages/admin/login";
import AddNew from "./pages/admin/addNew";
import PrivateRoute from "./pages/admin/privateRoute";
import ProtectedRoutes from "./pages/admin/privateRoute";

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
            </Routes>
        </BrowserRouter>
    )
}