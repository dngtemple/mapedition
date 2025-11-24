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
                        Your strategic partner in global trade, procurement, and logistics.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
                        <p className="text-slate-600 leading-relaxed">
                            MapEdition Group Limited was established with a singular mission: to simplify the complexities of global trade.
                            We understood that businesses needed more than just a service provider; they needed a partner who could navigate the intricate web of procurement and logistics.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Over the years, we have built a robust network of suppliers and logistics partners worldwide.
                            Our expertise allows us to deliver tailored solutions that optimize costs, reduce risks, and ensure timely delivery for our clients across various industries.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" asChild>
                                <Link to="/contact">Partner With Us</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1566576912902-199df6205218?auto=format&fit=crop&q=80"
                            alt="Global Logistics Network"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
                        <p className="text-slate-600">
                            To empower businesses by providing reliable, efficient, and innovative procurement and logistics solutions that drive growth and operational excellence.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h3>
                        <p className="text-slate-600">
                            To be the preferred global partner for supply chain management, recognized for our integrity, customer-centric approach, and operational expertise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
