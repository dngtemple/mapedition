import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Icon from "@/assets/icon.jpeg";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Partners", path: "/partners" },
        { name: "Clients", path: "/clients" },
        { name: "Team", path: "/team" },
        { name: "Contact Us", path: "/contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={Icon} className="h-10 w-10 text-primary" />
                    <span className="text-xl font-bold">MapEdition</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex  items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`text-l font-medium transition-colors hover:text-primary ${isActive(item.path) ? "text-primary" : "text-muted-foreground"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild>
                        <Link to="/contact">Get Started</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col space-y-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-lg font-medium transition-colors hover:text-primary ${isActive(item.path) ? "text-primary" : "text-muted-foreground"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button asChild className="mt-4">
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    Get Started
                                </Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;
