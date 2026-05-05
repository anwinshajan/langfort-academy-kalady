import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import VideoLibrary from './components/VideoLibrary';
import Testimonials from './components/Testimonials';
import ImageGallery from './components/ImageGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InteractiveBackground from './components/InteractiveBackground';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CourseGrid />
        <VideoLibrary />
        <Testimonials />
        <ImageGallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <InteractiveBackground />
    </>
  );
}
