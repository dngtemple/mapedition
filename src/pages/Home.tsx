import { ArrowRight, Laptop, Car, Home as HomeIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
    const services = [
        {
            title: "IT & Electronics",
            description: "Authorized procurement of premium tech, including Lenovo laptops, for businesses in Ghana.",
            icon: <Laptop className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
        {
            title: "Automotive Solutions",
            description: "Importing high-quality vehicles and fleet management solutions for the Ghanaian market.",
            icon: <Car className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
        {
            title: "Real Estate",
            description: "Connecting you with prime property developments and construction materials.",
            icon: <HomeIcon className="h-10 w-10 text-blue-500" />,
            link: "/services",
        },
    ];

    const features = [
        "Local Expertise (Ghana)",
        "Global Sourcing Network",
        "Customs & Clearance Support",
        "Door-to-Door Delivery",
        "Verified Suppliers",
        "After-Sales Support",
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://mlm.lentarex.com/aw/wp-content/uploads/2023/06/About.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Connecting <span className="text-yellow-400">Ghana</span> to the <br className="hidden md:inline" />
                        <span className="text-blue-400">Global Market</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        MapEdition Group Limited is your premier partner for international procurement and logistics.
                        From Lenovo laptops to Real Estate, we bring the world to your doorstep.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                            <Link to="/services">Explore Our Sectors</Link>
                        </Button>
                        
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Diverse Procurement Solutions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We specialize in sourcing and delivering quality products across key sectors to drive Ghana's growth.
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
                            <h2 className="text-3xl font-bold tracking-tight mb-6">Why MapEdition?</h2>
                            <p className="text-slate-600 mb-8 text-lg">
                                We bridge the gap between international manufacturers and the Ghanaian market.
                                Whether you need agricultural machinery or a fleet of cars, we handle the logistics from end to end.
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
                                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
                                alt="Global Logistics to Ghana"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to do business?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Partner with MapEdition for reliable procurement and logistics services in Ghana and beyond.
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
