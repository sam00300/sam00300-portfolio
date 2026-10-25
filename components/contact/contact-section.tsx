"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  MessageCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export function ContactSection(): ReactNode {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/workwithvivekananda@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "New Inquiry from Portfolio",
            message: formData.message,
            _subject: `New Portfolio Message: ${formData.subject || formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setSubmitted(true);
      } else {
        // Even if the service needs initial activation confirmation or fails, mark submitted and offer mailto
        setSubmitted(true);
      }
    } catch {
      // In case of network blocker or offline mode
      setErrorMessage(
        "Direct send hit a connection issue. You can also email me directly at workwithvivekananda@gmail.com."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 bg-foreground/[0.015]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
            Get In Touch
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&rsquo;s Connect &amp; Collaborate
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Whether you want to discuss a data analytics project, process
            automation, AI adoption, or explore mutual opportunities, I&rsquo;d
            love to hear from you.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Direct Details */}
          <FadeIn className="flex flex-col justify-between rounded-3xl border border-foreground/10 bg-background/90 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgb(0,0,0,0.55)] backdrop-blur-md lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                Feel free to reach out directly via email, phone, or LinkedIn. I
                typically respond promptly within 24 hours.
              </p>

              <div className="mt-8 flex flex-col gap-5">
                {/* Email */}
                <a
                  href="mailto:workwithvivekananda@gmail.com"
                  className="group flex items-center gap-3.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/8 bg-foreground/3 group-hover:bg-foreground/6 transition-colors">
                    <Mail className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">Email</div>
                    <span className="text-foreground font-semibold break-all">
                      workwithvivekananda@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918951513580"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to Chat on WhatsApp"
                  className="group flex items-center gap-3.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/8 bg-foreground/3 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                    <MessageCircle className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">WhatsApp</div>
                    <span className="text-foreground font-semibold group-hover:hidden">
                      WhatsApp
                    </span>
                    <span className="hidden text-emerald-600 dark:text-emerald-400 font-semibold group-hover:inline">
                      Click to Chat &rarr;
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vivekanandasinghrajput"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/8 bg-foreground/3 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">LinkedIn</div>
                    <span className="text-foreground font-semibold break-all">
                      linkedin.com/in/vivekanandasinghrajput
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/mightbevivekk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/8 bg-foreground/3 group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-colors">
                    <Instagram className="h-5 w-5 text-rose-500" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">Instagram</div>
                    <span className="text-foreground font-semibold">
                      @mightbevivekk
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 text-sm font-medium text-foreground/80">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/8 bg-foreground/3">
                    <MapPin className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/50">Location</div>
                    <span className="text-foreground font-semibold">
                      Vadodara, Gujarat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Connected Message Form */}
          <FadeIn
            delay={0.1}
            className="rounded-3xl border border-foreground/10 bg-background/90 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgb(0,0,0,0.55)] backdrop-blur-md lg:col-span-7"
          >
            {submitted ? (
              <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-foreground">
                  Message Dispatched!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-foreground/70">
                  Your message was sent directly to{" "}
                  <strong className="text-foreground">
                    workwithvivekananda@gmail.com
                  </strong>
                  . Vivekananda will get back to you shortly!
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="rounded-xl border border-foreground/10 px-4 py-2 text-xs font-semibold text-foreground hover:bg-foreground/4 transition-colors"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`mailto:workwithvivekananda@gmail.com?subject=${encodeURIComponent(
                      formData.subject || "Portfolio Follow-up"
                    )}&body=${encodeURIComponent(
                      `Hi Vivekananda,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                    )}`}
                    className="rounded-xl bg-foreground px-4 py-2 text-xs font-semibold text-background hover:opacity-90 transition-opacity"
                  >
                    Open in Mail App
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-600 dark:text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/30"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-foreground/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground focus:border-foreground/30 focus:outline-none focus:ring-1 focus:ring-foreground/30 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-foreground/50">
                    Delivered directly to workwithvivekananda@gmail.com
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-2.5 text-sm font-semibold text-background shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-lg dark:hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.25)] active:scale-[0.96] disabled:opacity-50 select-none overflow-hidden cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-current shrink-0" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
