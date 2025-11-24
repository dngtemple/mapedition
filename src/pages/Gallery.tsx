const galleryImages = [
    {
        src: "https://placehold.co/600x400/png?text=Project+Alpha",
        alt: "Project Alpha Launch",
        caption: "Launch event for Project Alpha",
    },
    {
        src: "https://placehold.co/400x600/png?text=Office+Life",
        alt: "Office Life",
        caption: "A day in the life at MapEdition",
    },
    {
        src: "https://placehold.co/600x600/png?text=Design+Workshop",
        alt: "Design Workshop",
        caption: "Collaborative design workshop",
    },
    {
        src: "https://placehold.co/600x400/png?text=Community+Day",
        alt: "Community Day",
        caption: "Volunteering with the local community",
    },
    {
        src: "https://placehold.co/400x600/png?text=Tech+Talk",
        alt: "Tech Talk",
        caption: "Hosting our monthly tech meetup",
    },
    {
        src: "https://placehold.co/600x600/png?text=Team+Retreat",
        alt: "Team Retreat",
        caption: "Annual team building retreat",
    },
    {
        src: "https://placehold.co/600x400/png?text=Award+Ceremony",
        alt: "Award Ceremony",
        caption: "Receiving the Innovation Award",
    },
    {
        src: "https://placehold.co/400x600/png?text=New+Office",
        alt: "New Office",
        caption: "Grand opening of our new HQ",
    },
];

const Gallery = () => {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Gallery</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A glimpse into our world, our projects, and our people.
                </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryImages.map((image, index) => (
                    <div key={index} className="break-inside-avoid rounded-lg overflow-hidden group relative">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                            <p className="text-white font-medium">{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
