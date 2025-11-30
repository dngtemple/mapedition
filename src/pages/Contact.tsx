import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://getform.io/f/bejeqgya", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        e.target.reset();
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your internet.");
    } finally {
      setLoading(false);
    }
  };

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
                      Ghana<br />
                      Accra Central, Adabraka, Kojo Thompson Rd
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-sm text-slate-600">
                      +233 (0) 54-061-0078<br />
                      +233 (0) 50-188-6853<br />
                      Mon-Fri, 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-sm text-slate-600">
                      info@mapedition.com
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
                <form className="space-y-6" onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full md:w-auto"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
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
