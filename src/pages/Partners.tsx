import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const partners = [
    {
        name: "TechCorp Solutions",
        description: "Leading provider of enterprise software solutions.",
        logo: "https://placehold.co/150x150/png?text=TechCorp",
    },
    {
        name: "GreenEarth Innovations",
        description: "Sustainable energy and eco-friendly products.",
        logo: "https://placehold.co/150x150/png?text=GreenEarth",
    },
    {
        name: "Global Logistics",
        description: "Worldwide shipping and supply chain management.",
        logo: "https://placehold.co/150x150/png?text=Global",
    },
    {
        name: "Creative Studio",
        description: "Award-winning design and branding agency.",
        logo: "https://placehold.co/150x150/png?text=Creative",
    },
    {
        name: "SecureNet Systems",
        description: "Cybersecurity experts protecting your digital assets.",
        logo: "https://placehold.co/150x150/png?text=SecureNet",
    },
    {
        name: "HealthPlus",
        description: "Innovative healthcare solutions for a better life.",
        logo: "https://placehold.co/150x150/png?text=HealthPlus",
    },
];

const Partners = () => {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We collaborate with industry leaders to deliver the best solutions for our clients.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {partners.map((partner, index) => (
                    <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
                        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                            <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                        </div>
                        <CardHeader className="p-0 mb-2">
                            <CardTitle className="text-xl">{partner.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <CardDescription>{partner.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="bg-muted rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join our network of innovators and grow your business with MapEdition. Let's build something great together.
                </p>
                <Button size="lg">Apply Now</Button>
            </div>
        </div>
    );
};

export default Partners;
