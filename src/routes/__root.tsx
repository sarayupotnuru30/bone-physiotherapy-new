import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

// CSR-friendly root route. We do not use TanStack Start's <HeadContent /> /
// <Scripts /> shellComponent here because this app is a pure Vite SPA — the
// HTML shell lives in /index.html. Per-route meta tags are still defined via
// the route `head()` option for parity, but applied to document.head on the
// client below.

type MetaTag = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
  charSet?: string;
};

const ROOT_META: MetaTag[] = [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "Bone Physiotherapy — Expert Care for Movement & Recovery" },
  {
    name: "description",
    content:
      "Advanced physiotherapy and orthopaedic care. Expert treatment for orthopaedic, neurological, sports, and elderly wellness conditions.",
  },
  {
    property: "og:title",
    content: "Bone Physiotherapy — Expert Care for Movement & Recovery",
  },
  {
    property: "og:description",
    content: "Advanced physiotherapy and orthopaedic care for a pain-free, active life.",
  },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
];

function applyMeta(meta: MetaTag[]) {
  const titleTag = meta.find((m) => m.title);
  if (titleTag?.title) document.title = titleTag.title;

  for (const m of meta) {
    if (m.title || m.charSet) continue;
    const key = m.name ?? m.property;
    if (!key || !m.content) continue;
    const attr = m.name ? "name" : "property";
    let el = document.head.querySelector<HTMLMetaElement>(
      `meta[${attr}="${key}"]`,
    );
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", m.content);
  }
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({ meta: ROOT_META }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  useEffect(() => {
    applyMeta(ROOT_META);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
