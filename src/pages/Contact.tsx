import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-lg text-slate-600">
                        Have a question or want to book a service? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Get in Touch</CardTitle>
                                <CardDescription>
                                    Reach out to us through any of these channels.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Visit Us</h3>
                                        <p className="text-sm text-slate-600">
                                            123 Business Avenue<br />
                                            Tech District, City 10001
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-blue-500 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Call Us</h3>
                                        <p className="text-sm text-slate-600">
                                            +1 (555) 123-4567<br />
                                            Mon-Fri, 9am - 6pm
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-blue-500 mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Email Us</h3>
                                        <p className="text-sm text-slate-600">
                                            info@mapedition.com<br />
                                            support@mapedition.com
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Name
                                            </label>
                                            <Input id="name" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Email
                                            </label>
                                            <Input id="email" type="email" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Subject
                                        </label>
                                        <Input id="subject" placeholder="How can we help?" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us more about your inquiry..."
                                            className="min-h-[150px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full md:w-auto">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
