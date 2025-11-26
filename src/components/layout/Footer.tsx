import { Map, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-50">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Map className="h-6 w-6 text-blue-400" />
                            <span className="text-xl font-bold">MapEdition</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Connecting Ghana to the World.
                            Specialized in IT, Automotive, Agriculture, and Real Estate Procurement & Logistics.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Sectors</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link to="/services" className="hover:text-blue-400 transition-colors">
                                    IT & Electronics
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-blue-400 transition-colors">
                                    Automotive
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-blue-400 transition-colors">
                                    Agriculture
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-blue-400 transition-colors">
                                    Real Estate
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link to="/about" className="hover:text-blue-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/partners" className="hover:text-blue-400 transition-colors">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="hover:text-blue-400 transition-colors">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-blue-400" />
                                <span>Accra, Ghana</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-blue-400" />
                                <span>+233 (0) 555 123 456</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-blue-400" />
                                <span>info@mapedition.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} MapEdition Group Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
