import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Research } from "@/components/portfolio/Research";
import { Certifications } from "@/components/portfolio/Certifications";
import { Leadership } from "@/components/portfolio/Leadership";
import { Activities } from "@/components/portfolio/Activities";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { CursorTrail } from "@/components/portfolio/CursorTrail";
import { Backdrop } from "@/components/portfolio/Backdrop";

const title = "Prachi Madane | Full Stack Developer | AI/ML Engineer";
const description =
  "Portfolio of Prachi Madane — Full Stack Developer, MERN Stack Developer, AI/ML Engineer and Data Analytics enthusiast building scalable web applications and intelligent solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Prachi Madane",
          jobTitle: "Full Stack Developer, AI/ML Engineer",
          email: "mailto:prachimadane2004@gmail.com",
          telephone: "+91 8669166390",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vasai, Palghar",
            addressRegion: "Maharashtra",
            addressCountry: "India",
          },
          sameAs: ["https://github.com/prachi-madane14"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <Backdrop />
      <CursorTrail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Certifications />
        <Leadership />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
