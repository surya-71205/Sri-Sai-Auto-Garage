import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PHONE, WHATSAPP_NUMBER, EMAIL, SERVICES } from "@/lib/constants";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useSubmitBooking } from "@workspace/api-client-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Date is required"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function Contact() {
  const { toast } = useToast();
  const submitBooking = useSubmitBooking();
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      preferredDate: "",
      notes: "",
    }
  });

  const onSubmit = (data: BookingFormValues) => {
    // API expects an ISO 8601 date string, standard date input gives YYYY-MM-DD
    const isoDate = new Date(data.preferredDate).toISOString();
    
    submitBooking.mutate({
      data: {
        ...data,
        preferredDate: isoDate,
        preferredTime: null, // optional in schema
      }
    }, {
      onSuccess: () => {
        toast({
          title: "Request Received",
          description: "We'll get back to you shortly to confirm your appointment.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "There was an error sending your request. Please try calling us instead.",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Book Your Service" 
          subtitle="Ready to get your car running perfectly? Drop us a message or call directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <a 
              href={`tel:${PHONE}`} 
              className="flex items-center gap-6 p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Call Us Directly</p>
                <p className="text-xl font-bold text-foreground">{PHONE}</p>
              </div>
            </a>

            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 rounded-2xl bg-surface border border-white/5 hover:border-[#25D366]/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="text-xl font-bold text-foreground">Chat with us</p>
              </div>
            </a>

            <a 
              href={`mailto:${EMAIL}`} 
              className="flex items-center gap-6 p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Email Us</p>
                <p className="text-lg font-medium text-foreground">{EMAIL}</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-surface border border-white/10"
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">Request an Appointment</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Full Name *</label>
                  <input 
                    id="name"
                    {...form.register("name")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">Phone Number *</label>
                  <input 
                    id="phone"
                    {...form.register("phone")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-xs text-destructive mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <input 
                    id="email"
                    type="email"
                    {...form.register("email")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-muted-foreground">Service Needed *</label>
                  <select 
                    id="service"
                    {...form.register("service")}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                  {form.formState.errors.service && (
                    <p className="text-xs text-destructive mt-1">{form.formState.errors.service.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-muted-foreground">Preferred Date *</label>
                <input 
                  id="date"
                  type="date"
                  {...form.register("preferredDate")}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                />
                {form.formState.errors.preferredDate && (
                  <p className="text-xs text-destructive mt-1">{form.formState.errors.preferredDate.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium text-muted-foreground">Additional Notes</label>
                <textarea 
                  id="notes"
                  {...form.register("notes")}
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about the issues you're experiencing..."
                />
              </div>

              <button 
                type="submit"
                disabled={submitBooking.isPending}
                className="w-full bg-accent text-white font-bold uppercase tracking-wider py-4 rounded-xl shadow-[0_0_15px_rgba(230,57,70,0.3)] hover:shadow-[0_0_25px_rgba(230,57,70,0.5)] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {submitBooking.isPending ? "Submitting..." : "Book Appointment"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}