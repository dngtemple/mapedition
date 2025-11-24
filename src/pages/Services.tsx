import { Car, Smartphone, PenTool, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
    const categories = [
        {
            id: "rentals",
            title: "Car Rentals",
            icon: <Car className="h-12 w-12 text-blue-500" />,
            description: "Choose from our wide range of vehicles for any occasion.",
            features: ["Economy & Luxury Cars", "Daily, Weekly, Monthly Rates", "Chauffeur Services", "Airport Transfers"],
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
        },
        {
            id: "gadgets",
            title: "Gadgets & Tech",
            icon: <Smartphone className="h-12 w-12 text-blue-500" />,
            description: "Stay ahead with the latest technology and accessories.",
            features: ["Smartphones & Tablets", "Laptops & Computers", "Audio Accessories", "Smart Home Devices"],
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
        },
        {
            id: "stationery",
            title: "Stationery",
            icon: <PenTool className="h-12 w-12 text-blue-500" />,
            description: "Premium office supplies and stationery for your business.",
            features: ["Office Supplies", "Writing Instruments", "Paper Products", "Filing & Storage"],
            image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80",
        },
    ];

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
                    <p className="text-lg text-slate-600">
                        We offer a diverse range of professional services designed to meet your personal and business needs.
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
                                        <CardTitle className="text-lg">What we offer</CardTitle>
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
