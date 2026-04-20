import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services — Bone Physiotherapy" },
      { name: "description", content: "Comprehensive physiotherapy services across orthopaedic, neurological, sports, and elderly wellness care." },
      { property: "og:title", content: "Our Services — Bone Physiotherapy" },
      { property: "og:description", content: "Expert care under one roof — orthopaedics, neurology, sports rehab, and elderly wellness." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-medical-light py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold text-foreground md:text-5xl text-balance">
            Comprehensive Physiotherapy Services
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Expert care across orthopaedics, neurology, sports medicine, and wellness — all under one roof.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
