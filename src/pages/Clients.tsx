import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const clients = [
    {
        name: "Société Générale Ghana",
        logo: "https://franceactive.eu/wp-content/uploads/2018/03/logo_SocieteGenerale_600x300.png",
    },
    {
        name: "Zenith Bank Ghana",
        logo: "https://www.zenithbank.com.gh/media/xxtmxksw/zenith-logo.png",
    },
    {
        name: "Camfed Ghana",
        logo: "https://camfed.org/wp-content/themes/camfed/assets/images/og-img.png",
    },
    {
        name: "Care Ghana",
        logo: "https://carenetghana.org/wp-content/uploads/2022/06/brand-05a.png",
    },
    {
        name: "ActionAid Ghana",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LR2-7ZKqnQbmRWMM6QhytzXeElWh75O5Xw&s",
    },
    {
        name: "Plan International",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenoXwwEuoCEFOHuM_vnCgG_X2iLGX5DU0ew&s",
    },
    {
        name: "CBG",
        logo: "https://www.myjoyonline.com/wp-content/uploads/2024/09/CBG.png",
    },
    {
        name: "Bolgatanga Regional Hospital",
        logo: "https://www.fact-checkghana.com/wp-content/uploads/2024/09/Bolga-regional-hospital.jpg",
    },
    {
        name: "GIZ",
        logo: "https://www.esp.org.vn/wp-content/uploads/2023/10/giz.png",
    },
];

const Clients = () => {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Trusted by leading organizations across Ghana and beyond.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {clients.map((client, index) => (
                    <Card key={index} className="flex flex-col items-center justify-center p-8 hover:shadow-lg transition-shadow">
                        <div className="h-24 w-full flex items-center justify-center mb-4">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle className="text-center text-lg">{client.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2">
                            {/* Optional description or industry tag could go here */}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Clients;
