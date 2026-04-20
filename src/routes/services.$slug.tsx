import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Sparkles, Stethoscope, Star } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceCard } from "@/components/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    if (!service) return { meta: [{ title: "Service — Bone Physiotherapy" }] };
    return {
      meta: [
        { title: `${service.title} — Bone Physiotherapy` },
        { name: "description", content: service.shortDescription },
        { property: "og:title", content: `${service.title} — Bone Physiotherapy` },
        { property: "og:description", content: service.shortDescription },
        { property: "og:image", content: service.image },
        { name: "twitter:image", content: service.image },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug)!;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative h-[44vh] min-h-[340px] w-full">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
              <div className="text-white animate-fade-in-up">
                <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {service.category}
                </span>
                <h1 className="mt-4 font-heading text-3xl font-bold text-white md:text-5xl text-balance">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-medical-light/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.title },
            ]}
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
        </div>
      </div>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2 space-y-14">
            <div>
              <p className="text-lg leading-relaxed text-foreground/90">{service.intro}</p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Conditions We Treat</h2>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.conditions.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                  >
                    <h3 className="font-heading text-base font-bold text-foreground">{c.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">Our Approach to Treatment</h2>
              </div>
              <ol className="mt-6 space-y-4">
                {service.approach.map((step, i) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] font-heading text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground/80">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Key Benefits</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[image:var(--gradient-hero)] p-8 text-white shadow-[var(--shadow-elegant)]">
              <Sparkles className="h-6 w-6" />
              <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                {service.closingTitle ?? "Take the next step"}
              </h3>
              <p className="mt-3 text-white/90">{service.closing}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-heading text-lg font-bold text-foreground">Why Choose Us?</h3>
              <ul className="mt-4 space-y-3">
                {service.whyChooseUs.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-heading text-lg font-bold text-foreground">Quick overview</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
              <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Category</span><span className="font-medium text-foreground">{service.category.split(" & ")[0]}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Approach</span><span className="font-medium text-foreground">Personalized</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Sessions</span><span className="font-medium text-foreground">Tailored to you</span></div>
              </div>
            </div>

            {related.length > 0 && (
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Other services
                </h3>
                <div className="mt-4 space-y-4">
                  {related.map((s, i) => (
                    <ServiceCard key={s.slug} service={s} index={i} />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
