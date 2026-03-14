import { Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";

const appRoutes = (
    <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user/:id" element={<User />} />
    </Route>
);

export default appRoutes;