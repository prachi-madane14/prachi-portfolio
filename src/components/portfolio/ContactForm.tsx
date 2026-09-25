import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/xgavlnbe", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase">
          // SEND A DIRECT MESSAGE
        </h3>
      </div>

      {status === "success" && (
        <div
          role="alert"
          className="mb-6 flex items-center gap-3 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 p-4 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
          <p className="text-sm font-medium">
            Message sent — I&apos;ll get back to you soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="ml-auto text-xs font-mono text-cyan-400 underline hover:text-white"
          >
            Send another
          </button>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 flex items-center gap-3 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
        >
          <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
          <p className="text-sm font-medium">
            Something went wrong. Try again or email me directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name Field */}
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-slate-300"
            >
              YOUR NAME <span className="text-cyan-400">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Prachi Madane"
              disabled={status === "sending"}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-all duration-200 focus:border-cyan-400 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 disabled:opacity-50"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-slate-300"
            >
              YOUR EMAIL <span className="text-cyan-400">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              disabled={status === "sending"}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-all duration-200 focus:border-cyan-400 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 disabled:opacity-50"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block font-mono text-xs font-bold uppercase tracking-wider text-slate-300"
          >
            YOUR MESSAGE <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or idea..."
            disabled={status === "sending"}
            className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-all duration-200 focus:border-cyan-400 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-cyan-400/20 disabled:opacity-50"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3.5 font-mono text-xs font-bold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-cyan-300" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>SEND MESSAGE</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
