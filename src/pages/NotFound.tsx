import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-9xl font-extrabold text-primary tracking-widest">404</h1>
            <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Oops! You seem to be lost.
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Button asChild size="lg">
                    <Link to="/">Go Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
