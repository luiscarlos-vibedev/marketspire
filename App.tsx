import { useState, lazy, Suspense } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { postsData } from "./data/postsData";

const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Benefits = lazy(() => import("./components/Benefits"));
const Blog = lazy(() => import("./components/Blog"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const WhyUs = lazy(() => import("./components/WhyUs"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const BlogPost = lazy(() => import("./components/BlogPost"));

function LoadingFallback() {
  return <div className="min-h-[200px] bg-gray-50" />;
}

export default function App() {
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  const handlePostClick = (id: string) => {
    setCurrentPostId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setCurrentPostId(null);
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigate = (href: string) => {
    if (currentPostId) {
      setCurrentPostId(null);
    }
    
    if (href === '#' || href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = href.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const currentPost = postsData.find(p => p.id === currentPostId);

  return (
    <div className="font-sans text-gray-900 min-h-screen bg-gray-50 selection:bg-primary/30">
      <Header onNavigate={handleNavigate} />
      <main id="main-content">
        {currentPostId && currentPost ? (
          <Suspense fallback={<LoadingFallback />}>
            <BlogPost post={currentPost} onBack={handleBackToBlog} onHome={() => handleNavigate('#')} />
          </Suspense>
        ) : (
          <>
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
              <Services />
              <About />
              <Portfolio />
              <Benefits />
              <Blog onPostClick={handlePostClick} />
              <Testimonials />
              <WhyUs />
              <FAQ />
              <Contact />
            </Suspense>
          </>
        )}
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
      <PrivacyPolicy />
    </div>
  );
}
