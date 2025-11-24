import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="py-12 md:py-20 bg-white min-h-screen">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-6">About MapEdition Group</h1>
                    <p className="text-lg text-slate-600">
                        Building trust through quality service and dedication to our customers.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
                        <p className="text-slate-600 leading-relaxed">
                            MapEdition Group Limited was founded with a vision to provide essential services under one roof.
                            We recognized the need for a reliable partner who could deliver excellence across multiple sectors.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            From providing top-tier car rental services to supplying the latest gadgets and essential stationery,
                            we have grown into a trusted name known for quality and customer satisfaction.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" asChild>
                                <Link to="/contact">Work With Us</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                            alt="Team collaboration"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
                        <p className="text-slate-600">
                            To deliver exceptional value to our clients through high-quality products and reliable services,
                            fostering long-term relationships built on trust and integrity.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h3>
                        <p className="text-slate-600">
                            To be the leading multi-service provider in the region, recognized for our innovative approach
                            and unwavering commitment to customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
