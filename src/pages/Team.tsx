import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        bio: "Visionary leader with over 15 years of experience in the tech industry.",
        photo: "https://placehold.co/400x400/png?text=Sarah",
    },
    {
        name: "Michael Chen",
        role: "CTO",
        bio: "Expert in cloud architecture and scalable systems.",
        photo: "https://placehold.co/400x400/png?text=Michael",
    },
    {
        name: "Emily Davis",
        role: "Head of Design",
        bio: "Passionate about creating intuitive and beautiful user experiences.",
        photo: "https://placehold.co/400x400/png?text=Emily",
    },
    {
        name: "David Wilson",
        role: "Lead Developer",
        bio: "Full-stack wizard who loves solving complex problems.",
        photo: "https://placehold.co/400x400/png?text=David",
    },
    {
        name: "Jessica Brown",
        role: "Marketing Director",
        bio: "Strategic thinker driving brand growth and engagement.",
        photo: "https://placehold.co/400x400/png?text=Jessica",
    },
    {
        name: "Robert Taylor",
        role: "Product Manager",
        bio: "Ensuring we deliver value to our customers with every release.",
        photo: "https://placehold.co/400x400/png?text=Robert",
    },
];

const Team = () => {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Meet the Team</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    The talented individuals behind MapEdition dedicated to your success.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-square relative">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{member.name}</CardTitle>
                            <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{member.bio}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Team;
