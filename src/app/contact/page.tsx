"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  budget: z.string().min(1, "Please select a budget range."),
  details: z.string().min(10, "Please provide some project details (at least 10 characters).")
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      details: ""
    }
  });

  function onSubmit() {
    toast.success("Message Sent!", {
      description: "Thank you for reaching out. Our team will get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Ready to discuss your next project? Get a free consultation and quote from our experts.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white relative z-20 -mt-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-elevated border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-5">

            {/* Contact Info (Left) */}
            <div className="bg-secondary text-white p-10 md:p-12 lg:col-span-2 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-montserrat font-bold mb-4">Get in Touch</h2>
                <p className="text-white/80 mb-10 leading-relaxed">
                  We&apos;d love to hear about your project. Reach out and let&apos;s start a conversation.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <a href="mailto:sales@optimanex.com" className="text-white/80 hover:text-white transition-colors">sales@optimanex.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <a href="tel:+918141004777" className="text-white/80 hover:text-white transition-colors">+91 97255 58828</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-white/80">E 610, PNTC Tower, Ahmedabad, Gujarat, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Working Hours</h4>
                      <p className="text-white/80">Mon - Fri, 10:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (Right) */}
            <div className="p-10 md:p-12 lg:col-span-3">
              <h2 className="text-2xl font-montserrat font-bold text-foreground mb-2">Free Consultation</h2>
              <p className="text-muted-foreground mb-8">Book a free 30-minute consultation to discuss your project requirements and get expert advice.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Ltd." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map(s => (
                                <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>
                              ))}
                              <SelectItem value="other">Other / Unsure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="<10k">&lt; $10k</SelectItem>
                              <SelectItem value="10k-25k">$10k – $25k</SelectItem>
                              <SelectItem value="25k-50k">$25k – $50k</SelectItem>
                              <SelectItem value="50k-100k">$50k – $100k</SelectItem>
                              <SelectItem value=">100k">&gt; $100k</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us a bit about what you want to build..." className="h-32 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full rounded-full h-12 text-base font-semibold shadow-primary">
                    Send Message
                  </Button>
                </form>
              </Form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
