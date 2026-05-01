import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import { postsData } from "./data/postsData";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  const handlePostClick = (id: string) => {
    setCurrentPostId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setCurrentPostId(null);
    setTimeout(() => {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleNavigate = (href: string) => {
    if (currentPostId) {
      setCurrentPostId(null);
    }

    if (href === "#" || href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const currentPost = postsData.find((p) => p.id === currentPostId);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route
          path="/"
          element={
            <div className="font-sans text-gray-900 min-h-screen bg-gray-50 selection:bg-primary/30">
              <Header />
              <main id="main-content">
                {currentPostId && currentPost ? (
                  <BlogPost
                    post={currentPost}
                    onBack={handleBackToBlog}
                    onHome={() => handleNavigate("#")}
                  />
                ) : (
                  <>
                    <Hero />
                    <Services />
                    <Portfolio />
                    <About />
                    <Testimonials />
                    <WhyUs />
                    <FAQ />
                    <Contact />
                  </>
                )}
              </main>
              <Footer />
              <FloatingWhatsApp />
              <PrivacyPolicy />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}