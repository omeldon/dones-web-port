import React, { useState } from "react";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { Mail, Github, Linkedin, Facebook, Send } from "lucide-react";
import TrackedSection from "./TrackedSection";
import { profile } from "../data/portfolioData";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!form.message.trim()) next.message = "Add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulated dispatch — wire this up to a real form backend (Formspree,
    // EmailJS, or your own endpoint) to actually deliver messages.
    setTimeout(() => {
      setSubmitting(false);
      setSnackOpen(true);
      setForm(initialForm);
    }, 1100);
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: profile.email, href: profile.social.email },
    { icon: Github, label: "GitHub", value: "github.com/omeldon", href: profile.social.github },
    { icon: Linkedin, label: "LinkedIn", value: "in/rommel-dones", href: profile.social.linkedin },
    { icon: Facebook, label: "Facebook", value: "rommel.dones.424", href: profile.social.facebook },
  ];

  return (
    <TrackedSection id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-arise-light mb-3">
            Guild Hall
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Send a Request
          </h2>
          <div className="divider-glow w-24 mx-auto mt-5" />
          <p className="mt-5 text-slate-400 max-w-lg mx-auto">
            Have a project, a contract, or just want to talk stacks? The
            request board is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          {/* Contact links */}
          <div className="space-y-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 system-panel px-5 py-4 hover:shadow-arise transition-shadow duration-300 group"
              >
                <span className="h-10 w-10 rounded-md border border-arise/25 bg-void/60 flex items-center justify-center text-arise-light shrink-0 group-hover:shadow-arise transition-shadow">
                  <item.icon size={17} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-sm text-slate-200 truncate">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="system-panel p-6 sm:p-8 space-y-5 shadow-system"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                sx={inputSx}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                sx={inputSx}
              />
            </div>
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={Boolean(errors.message)}
              helperText={errors.message}
              fullWidth
              multiline
              minRows={5}
              variant="filled"
              InputProps={{ disableUnderline: true }}
              sx={inputSx}
            />
            <Button
              type="submit"
              disabled={submitting}
              variant="contained"
              fullWidth
              endIcon={<Send size={16} />}
              sx={{
                bgcolor: "#1d4ed8",
                py: 1.4,
                borderRadius: "8px",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                "&:hover": { bgcolor: "#1e40af" },
              }}
            >
              {submitting ? "Transmitting…" : "Dispatch Message"}
            </Button>
          </form>
        </div>
      </div>

      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          variant="filled"
          sx={{ bgcolor: "#1d4ed8", fontFamily: "'Rajdhani', sans-serif" }}
        >
          Message dispatched! Expect a reply from the Player soon.
        </Alert>
      </Snackbar>
    </TrackedSection>
  );
};

const inputSx = {
  "& .MuiFilledInput-root": {
    backgroundColor: "rgba(15,23,42,0.6)",
    borderRadius: "8px",
    border: "1px solid rgba(96,165,250,0.2)",
    color: "#e2e8f0",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "rgba(15,23,42,0.75)",
  },
  "& .MuiFilledInput-root.Mui-focused": {
    border: "1px solid rgba(96,165,250,0.6)",
  },
  "& .MuiInputLabel-root": { color: "#64748b" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#60a5fa" },
  "& .MuiFormHelperText-root": { color: "#f87171" },
};

export default Contact;
