import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "sonner";
const Layout = () => {
    return (
        <div className="flex min-h-screen flex-col">
             <Toaster richColors position="top-right" />
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
