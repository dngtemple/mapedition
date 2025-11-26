const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
        alt: "Warehouse Operations",
        caption: "State-of-the-art warehousing facilities",
    },
    {
        src: "https://images.unsplash.com/photo-1494412574643-35d32468817e?auto=format&fit=crop&q=80",
        alt: "Global Shipping",
        caption: "Connecting businesses globally",
    },
    {
        src: "https://images.unsplash.com/photo-1566576912906-22004d50c1c2?auto=format&fit=crop&q=80",
        alt: "Logistics Fleet",
        caption: "Reliable transportation fleet",
    },
    {
        src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80",
        alt: "Procurement Meeting",
        caption: "Strategic procurement planning",
    },
    {
        src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
        alt: "Supply Chain Management",
        caption: "Efficient supply chain solutions",
    },
    {
        src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
        alt: "Office Supplies",
        caption: "Quality office essentials",
    },
    {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        alt: "Tech Equipment",
        caption: "Latest technology hardware",
    },
    {
        src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
        alt: "Construction Site",
        caption: "Supporting construction projects",
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
