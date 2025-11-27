import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Redi from "@/assets/redi.jpeg";
import Mike from "@/assets/mike.jpeg";
import Sway from "@/assets/sway.jpeg";

const teamMembers = [
    {
        name: "Michael Agyekum Afful",
        role: "IT Professional",
        bio: `As a driven and ambitious IT professional, I'm excited to take on new challenges that fuel continuous learning and growth. With a strong technical foundation and excellent interpersonal skills, I thrive in collaborative environments, building strong relationships with my team and delivering exceptional customer support that exceeds expectations. My organized and structured approach, combined with a relentless work ethic, ensures high-quality results and seamless execution. I'm now seeking a rewarding opportunity with a forward-thinking organization where I can leverage my skills, expertise, and passion for IT to drive success and make a lasting impact`,
        photo: Mike,
    },
    {
        name: "Redeemer Ayitey",
        role: "Procurement Manager",
        bio:`I’m a procurement professional leading strategy and supplier partnerships at Map Edition Group Limited, focused on building efficient, ethical, and reliable supply chains. With strong expertise in sourcing, contract management, and vendor relations, I ensure procurement decisions support business growth and compliance. Backed by a Master’s in International Relations and ongoing International Business certification, I bring a global perspective to creating sustainable value. I’m not just about cutting costs; I’m about building strong partnerships, long-term value, and impactful business outcomes.`,
        photo: Redi,
    },
    {
        name: "John Godsway Danyo",
        role: "Real Estate Consultant",
        bio: `I’m a passionate Real Estate Consultant dedicated to helping individuals, families, and investors find the right properties that fit their goals and lifestyle. With a deep understanding of the Ghanaian real estate market and a strong network of developers, agents, and investors, I bridge the gap between dreams and opportunities.

Whether it’s residential homes, commercial spaces, or investment properties, I believe in offering personalized, transparent, and data-driven guidance, ensuring every client makes informed decisions with confidence.

I’m not just about closing deals; I’m about building long-term relationships rooted in trust, professionalism, and results.`,
        photo: Sway,
    }
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
