import { Globe, Truck, Package, Warehouse, Check, Anchor, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
    const categories = [
        {
            id: "procurement",
            title: "Strategic Procurement",
            icon: <Globe className="h-12 w-12 text-blue-500" />,
            description: "Comprehensive sourcing strategies to secure the best materials and products at competitive prices.",
            features: ["Global Sourcing", "Vendor Negotiation", "Quality Assurance", "Contract Management"],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
        },
        {
            id: "logistics",
            title: "Global Logistics",
            icon: <Truck className="h-12 w-12 text-blue-500" />,
            description: "Efficient transportation solutions across land, sea, and air to ensure timely delivery.",
            features: ["Freight Forwarding", "Customs Brokerage", "Last-Mile Delivery", "Route Optimization"],
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
        },
        {
            id: "supply-chain",
            title: "Supply Chain Management",
            icon: <Package className="h-12 w-12 text-blue-500" />,
            description: "End-to-end visibility and control over your supply chain operations.",
            features: ["Demand Planning", "Inventory Control", "Risk Management", "Performance Analytics"],
            image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80",
        },
        {
            id: "warehousing",
            title: "Warehousing & Distribution",
            icon: <Warehouse className="h-12 w-12 text-blue-500" />,
            description: "Secure storage and efficient distribution networks to keep your goods moving.",
            features: ["Storage Solutions", "Order Fulfillment", "Cross-Docking", "Inventory Tracking"],
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
        },
        {
            id: "sea-freight",
            title: "Sea Freight",
            icon: <Anchor className="h-12 w-12 text-blue-500" />,
            description: "Cost-effective ocean transport for large volume shipments.",
            features: ["FCL & LCL", "Port-to-Port", "Door-to-Door", "Cargo Insurance"],
            image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80",
        },
        {
            id: "air-freight",
            title: "Air Freight",
            icon: <Plane className="h-12 w-12 text-blue-500" />,
            description: "Fast and reliable air cargo services for time-sensitive shipments.",
            features: ["Express Shipping", "Charter Services", "Perishable Cargo", "Dangerous Goods"],
            image: "https://images.unsplash.com/photo-1436491865332-7a6153217e7a?auto=format&fit=crop&q=80",
        },
    ];

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
                    <p className="text-lg text-slate-600">
                        We provide integrated procurement and logistics solutions designed to drive efficiency and growth for your business.
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
                                        <CardTitle className="text-lg">Key Features</CardTitle>
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
                                            <Link to="/contact">Request a Quote</Link>
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
