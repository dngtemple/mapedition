import { Laptop, Car, Home as HomeIcon,Sprout, Truck, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
    const categories = [
        {
            id: "general-supplies",
            title: "General Supplies",
            icon: <Globe className="h-12 w-12 text-blue-500" />,
            description: "Your one-stop source for all general business and operational supplies.",
            features: ["Office Consumables", "Industrial Supplies", "Safety Gear", "Maintenance Tools"],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        },
        {
            id: "home-office",
            title: "Home & Office Appliances",
            icon: <HomeIcon className="h-12 w-12 text-blue-500" />,
            description: "Premium appliances for modern homes and productive offices.",
            features: ["Air Conditioners", "Refrigerators", "Smart TVs", "Kitchen Appliances"],
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
        },
        {
            id: "construction",
            title: "Construction Equipment",
            icon: <Truck className="h-12 w-12 text-blue-500" />,
            description: "Heavy-duty machinery and equipment for construction projects.",
            features: ["Excavators", "Concrete Mixers", "Scaffolding", "Power Tools"],
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        },
        {
            id: "it-electronics",
            title: "IT & Electronics",
            icon: <Laptop className="h-12 w-12 text-blue-500" />,
            description: "We supply top-tier technology hardware to businesses and institutions.",
            features: ["Lenovo Laptops & Workstations", "Enterprise Servers", "Networking Equipment", "Computer Accessories"],
            image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80",
        },
        {
            id: "automotive",
            title: "Automotive Solutions",
            icon: <Car className="h-12 w-12 text-blue-500" />,
            description: "Importing reliable vehicles and parts for personal and commercial use.",
            features: ["Vehicle Importation", "Fleet Management", "Spare Parts Procurement", "Heavy Duty Trucks"],
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
        },
        {
            id: "agriculture",
            title: "Agricultural Solutions",
            icon: <Sprout className="h-12 w-12 text-blue-500" />,
            description: "Supporting Ghana's agriculture with modern machinery and inputs.",
            features: ["Tractors & Harvesters", "Irrigation Systems", "Fertilizers & Seeds", "Agro-Processing Equipment"],
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80",
        },
        {
            id: "real-estate",
            title: "Real Estate & Construction",
            icon: <HomeIcon className="h-12 w-12 text-blue-500" />,
            description: "Facilitating property development and sourcing construction materials.",
            features: ["Construction Materials", "Property Development", "Interior Fittings", "Smart Home Systems"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
        },
        {
            id: "logistics",
            title: "Global Logistics",
            icon: <Globe className="h-12 w-12 text-blue-500" />,
            description: "The backbone of our operations, ensuring your goods arrive safely.",
            features: ["Air & Sea Freight", "Customs Clearance", "Warehousing", "Last-Mile Delivery"],
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
        },
    ];

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Our Sectors</h1>
                    <p className="text-lg text-slate-600">
                        Specialized procurement and logistics services tailored to key industries in Ghana.
                    </p>
                </div>

                <div className="space-y-20">
                    {categories.map((category, index) => (
                        <div key={category.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                            <div className="flex-1 w-full">
                                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-blue-100 rounded-xl">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold">{category.title}</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {category.description}
                                </p>
                                <Card className="border-slate-200">
                                    <CardHeader>
                                        <CardTitle className="text-lg">What We Offer</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {category.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center space-x-2 text-slate-700">
                                                    <Check className="h-4 w-4 text-green-500" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full sm:w-auto" asChild>
                                            <Link to="/contact">Inquire Now</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
