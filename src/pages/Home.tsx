import { ArrowRight, Car, Smartphone, PenTool, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
    const services = [
        {
            title: "Car Rentals",
            description: "Premium fleet of vehicles for all your travel needs. Reliable, comfortable, and affordable.",
            icon: <Car className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
        {
            title: "Gadgets",
            description: "Latest tech gadgets and accessories. Stay connected with our cutting-edge selection.",
            icon: <Smartphone className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
        {
            title: "Stationery",
            description: "High-quality stationery for office and personal use. Everything from pens to organizers.",
            icon: <PenTool className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
    ];

    const features = [
        "Professional Service",
        "Competitive Pricing",
        "24/7 Customer Support",
        "Quality Guarantee",
        "Wide Selection",
        "Fast Delivery",
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Your One-Stop Solution for <br className="hidden md:inline" />
                        <span className="text-blue-400">Business & Lifestyle</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        MapEdition Group Limited offers premium car rentals, latest gadgets, and quality stationery.
                        Experience excellence in every service we provide.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link to="/services">Explore Services</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white" asChild>
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Services</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We diversify our expertise to bring you the best in mobility, technology, and office essentials.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader className="text-center pb-2">
                                    <div className="mx-auto mb-4 bg-blue-50 p-4 rounded-full w-fit">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardDescription className="text-base mb-6">
                                        {service.description}
                                    </CardDescription>
                                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group" asChild>
                                        <Link to={service.link}>
                                            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose MapEdition?</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                We are committed to delivering quality and value in everything we do.
                                Our team works tirelessly to ensure your satisfaction across all our business verticals.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="font-medium text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                                alt="Business Meeting"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Whether you need a car for your next trip, the latest gadgets, or office supplies, we have you covered.
                    </p>
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
                        <Link to="/contact">Get in Touch Today</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
