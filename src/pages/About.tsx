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
                        Proudly Ghanaian, Globally Connected.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Our Roots & Reach</h2>
                        <p className="text-slate-600 leading-relaxed">
                            MapEdition Group Limited was founded with a clear vision: to empower Ghanaian businesses and individuals by providing seamless access to the global marketplace.
                            We understand the unique challenges of the local market and the vast opportunities available internationally.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            From sourcing high-performance Lenovo laptops for tech firms to importing agricultural machinery for farmers, we are dedicated to driving development across sectors.
                            Our logistics network ensures that whatever you need, wherever it is in the world, it reaches you in Ghana safely and on time.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" asChild>
                                <Link to="/contact">Partner With Us</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                            alt="Global Trade"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
                        <p className="text-slate-600">
                            To be the most reliable bridge between Ghana and the global economy, facilitating trade in key sectors like IT, Agriculture, and Automotive through efficient procurement and logistics.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h3>
                        <p className="text-slate-600">
                            To become Ghana's leading procurement and logistics partner, known for fueling national growth and connecting local potential with global resources.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
