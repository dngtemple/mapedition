import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const partners = [
    {
        name: "Dell",
        description: "Innovative technology solutions for personal and business use.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMmGS2QqOuFAD_A_Je2y3JRoWaE-K9WWgCw&s",
    },
    {
        name: "Lenovo",
        description: "Smarter technology for all, from laptops to data centers.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsIeOdoR9c5RfOP61nZOK6FgMXx6y0tlzNw&s",
    },
    {
        name: "BIC",
        description: "Simple, inventive, and reliable stationery products.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0N928sEGhAhGdBld7jEQO4dLkgovv-dXJ-Q&s",
    },
    {
        name: "Vector Technologies",
        description: "Advanced technological solutions and engineering.",
        logo: "https://media.licdn.com/dms/image/v2/C510BAQFA6OuDjR98vQ/company-logo_200_200/company-logo_200_200/0/1631391156561?e=2147483647&v=beta&t=nPr6KBb3EFrOCwj68daQmc5lfv3YlsH7pY3nJTtXXgY",
    },
    {
        name: "Casio",
        description: "Creativity and contribution through innovative products.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjNXdwrAwdvLkQR0E36XA6BDnXZL96utDMQ&s",
    },
    {
        name: "HP",
        description: "Engineering experiences that amaze.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg",
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
