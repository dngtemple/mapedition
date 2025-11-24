import { ArrowRight, Globe, Truck, Package, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
    const services = [
        {
            title: "Strategic Procurement",
            description: "End-to-end sourcing solutions tailored to your business needs. We ensure quality and cost-efficiency.",
            icon: <Globe className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
        {
            title: "Global Logistics",
            description: "Seamless transportation and freight forwarding services connecting you to the world.",
            icon: <Truck className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
        {
            title: "Supply Chain Management",
            description: "Optimizing your supply chain for maximum efficiency, reliability, and speed.",
            icon: <Package className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
    ];

    const features = [
        "Global Network",
        "Cost Optimization",
        "Real-time Tracking",
        "Compliance & Safety",
        "Vendor Management",
        "Just-in-Time Delivery",
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Global <span className="text-blue-400">Procurement</span> & <br className="hidden md:inline" />
                        <span className="text-blue-400">Logistics</span> Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        MapEdition Group Limited connects your business to the world. We streamline your supply chain with precision and expertise.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link to="/services">Explore Solutions</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white" asChild>
                            <Link to="/contact">Get a Quote</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Competencies</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Delivering excellence in every step of the procurement and logistics process.
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
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Why Partner with MapEdition?</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                In a complex global market, you need a partner who understands the nuances of trade and transport.
                                We bring reliability and efficiency to your operations.
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
                                src="https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80"
                                alt="Logistics Operations"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Let us handle the complexities of procurement and logistics so you can focus on growing your business.
                    </p>
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
                        <Link to="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
