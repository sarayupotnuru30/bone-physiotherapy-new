import { Link } from "@tanstack/react-router";
import { GraduationCap, Award, Stethoscope, Sparkles } from "lucide-react";
import doctorImg from "@/assets/services/dr-chaitanya.png";

const credentials = [
  "MBBS",
  "MS Ortho",
  "Fellow in Joint Replacement",
  "Fellow in Spine Surgery",
  "Fellow in Trauma Surgery",
  "PGCC in Rheumatology (IMA)",
];

const specialities = [
  "Knee Replacement",
  "Hip Replacement",
  "Arthroscopy Surgery",
  "Sports Injury",
  "Joint Care",
];

export function DoctorSection() {
  return (
    <section className="relative overflow-hidden bg-medical-light py-20 sm:py-24">
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" aria-hidden />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-accent-teal/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        {/* Photo */}
        <div className="lg:col-span-2">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-3xl bg-[image:var(--gradient-hero)] opacity-90" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white shadow-[var(--shadow-elegant)]">
              <img
                src={doctorImg}
                alt="Dr. Chaitanya Reddy Chintham — Consultant Orthopaedic Surgeon"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Top Orthopaedic Surgeon
                  </p>
                  <p className="text-sm font-bold text-foreground">ECIL, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Meet the Specialist
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Dr. Chaitanya Reddy Chintham
          </h2>
          <p className="mt-2 font-heading text-lg font-semibold text-primary">
            Consultant Orthopaedic Surgeon
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Bone Orthopaedic Clinic, in association with Oxycare Hospitals (ECIL | Safilguda)
          </p>

          {/* Credentials chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
              >
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
                {c}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
            <p>
              Joint pain doesn't just affect movement — it changes your routine, your confidence,
              and sometimes even your sleep. Whether it's a persistent knee problem, a hip issue,
              or a sports injury that refuses to heal, early expert care makes all the difference.
            </p>
            <p>
              From knee replacement and hip replacement to arthroscopy surgery and sports injury
              treatment, care is focused on restoring mobility and improving long-term joint health.
            </p>
            <p>
              If you are searching for a top orthopaedic surgeon in ECIL, Hyderabad, personalized
              evaluation and advanced surgical expertise are available close to you.
            </p>
          </div>

          {/* Specialities */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Areas of Expertise
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {specialities.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                >
                  <Award className="h-3.5 w-3.5" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
            >
              Book a Consultation
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
