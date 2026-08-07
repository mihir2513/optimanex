"use client";

import { MapPin, Briefcase, CalendarDays } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const benefits = [
  { title: "Career Growth", description: "Clear progression paths and regular performance reviews." },
  { title: "Remote Friendly", description: "Flexible work-from-home options for better balance." },
  { title: "Learning Budget", description: "Annual allowance for courses, books, and conferences." },
  { title: "Great Team", description: "Collaborative, ego-free environment with smart peers." },
  { title: "Health Benefits", description: "Comprehensive medical insurance for you and dependents." },
  { title: "Work-Life Balance", description: "Flexible hours and respect for personal time." },
  { title: "5-Day Work Week", description: "Strict Monday to Friday schedule to recharge fully." }
];

const jobs = [
  {
    id: "sr-bd-exec",
    title: "Sr. Business Development Executive",
    category: "Sales",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "4–7 years",
    skills: ["IT Sales", "Lead Generation", "Client Acquisition", "Proposal Writing", "CRM", "Bidding Portals"]
  },
  {
    id: "jr-java",
    title: "Jr. Java Developer",
    category: "Engineering",
    type: "Full-time",
    location: "Ahmedabad",
    experience: "0–2 years",
    skills: ["Java", "Spring Boot", "REST APIs", "MySQL", "Git", "OOP"]
  },
  {
    id: "react-native",
    title: "React Native Developer",
    category: "Mobile",
    type: "Full-time",
    location: "Ahmedabad / Remote",
    experience: "2–5 years",
    skills: ["React Native", "TypeScript", "Redux", "REST APIs", "Firebase", "iOS", "Android"]
  }
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  linkedin: z.string().url("Please enter a valid URL.").optional().or(z.literal("")),
  position: z.string().min(1, "Please select a position."),
  resume: z.any()
    .refine((files) => files?.length === 1, "Resume is required.")
    .refine((files) => files?.[0]?.size <= 5000000, "Max file size is 5MB."),
  coverLetter: z.string().optional()
});

export default function CareerPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      coverLetter: ""
    }
  });

  function onSubmit() {
    toast.success("Application Submitted!", {
      description: "Thank you for applying. We'll review your application and get back to you soon.",
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
              Build the Future With Us
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join a team of passionate engineers, designers, and problem-solvers building software that makes a real difference for clients across the globe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full shadow-primary hover:-translate-y-0.5 transition-transform text-base px-8 h-14">
                <a href="#open-roles">View Open Roles</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent rounded-full text-base px-8 h-14 text-white border-white/20 hover:bg-white/10 hover:text-white">
                <a href="#apply-now">Send Your CV</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading
              eyebrow="WHY JOIN US"
              title="A Place Where You'll Thrive"
              subtitle="We invest in our people because great software is built by great teams."
              centered
              className="mb-16"
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                <FeatureCard title={benefit.title} description={benefit.description} className="h-full bg-muted/20" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      {/* <section id="open-roles" className="py-24 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <SectionHeading 
              eyebrow="CURRENT OPENINGS" 
              title="Join Our Team" 
              subtitle="3 positions available across engineering, mobile, and business development."
              className="mb-12"
            />
          </FadeIn>
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <FadeIn key={job.id} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-card transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div>
                      <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
                        {job.category}
                      </span>
                      <h3 className="text-2xl font-bold font-montserrat text-foreground mb-4">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {job.experience}</span>
                      </div>
                    </div>
                    <div className="shrink-0 flex gap-3">
                      <Button asChild onClick={() => form.setValue("position", job.id)}>
                        <a href="#apply-now">Apply Now</a>
                      </Button>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-sm font-bold text-foreground mb-3">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      <section id="apply-now" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">Don&apos;t See the Right Role?</h2>
              <p className="text-muted-foreground text-lg">We&apos;re always looking for exceptional talent. Send us your CV and we&apos;ll reach out when the right opportunity comes up.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border/50">
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
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Applying For *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Application</SelectItem>
                          {jobs.map(job => (
                            <SelectItem key={job.id} value={job.id}>{job.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field: { onChange, ...field } }) => (
                    <FormItem>
                      <FormLabel>Resume/CV (PDF/DOC/DOCX, max 5MB) *</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => onChange(e.target.files)}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter / Additional Info</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us why you'd be a great fit..." className="h-32 resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full rounded-full h-12 text-base font-semibold shadow-primary">
                  Submit Application
                </Button>
              </form>
            </Form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
