
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { School, Users, Theater, CalendarDays, ArrowRight, X, MapPin, GraduationCap, Pickaxe } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Autoplay from "embla-carousel-autoplay";

const HomePage = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("");
  const [emblaRef, setEmblaRef] = useState<any>(null);
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  // Impact counter animation
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Media mentions animation
  const { ref: mediaRef, inView: mediaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', handleVideoLoad);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', handleVideoLoad);
      }
    };
  }, []);

  // Updated impact stats data - replaced Teacher Trainings with Monument Visits
  const impactStats = [
    { icon: <School size={32} />, count: 50, label: "Schools Served", suffix: "+" },
    { icon: <Users size={32} />, count: 8000, label: "Students Engaged", suffix: "+" },
    { icon: <Theater size={32} />, count: 16, label: "Theatre Shows", suffix: "+" },
    { icon: <CalendarDays size={32} />, count: 25, label: "Student Workshops", suffix: "+" },
    { icon: <MapPin size={32} />, count: 5, label: "Monument Visits", suffix: "+" }
  ];

  // Media mentions data
  const mediaMentions = [
    {
      source: "The Times of India",
      image: "/lovable-uploads/7d4980ea-4eb6-462a-8f41-1bf02df9962c.png",
      title: "Learning History, The Play Way"
    },
    {
      source: "The Morning Standard",
      image: "/lovable-uploads/82bcfdda-77fb-4fb4-86dd-b231fef49071.png",
      title: "Reconnecting with history"
    },
    {
      source: "History Mystery",
      image: "/lovable-uploads/4befe144-59ab-49fb-9c63-ebb7f31e26d5.png",
      title: "Content by History Diaries"
    },
    {
      source: "Concepts to Classrooms",
      image: "/lovable-uploads/8802654f-e5d8-4863-b161-6e62f6cf577b.png",
      title: "Bringing history to life"
    }
  ];

  // Enhanced gallery images for carousel
  const galleryImages = [
    {
      id: 1,
      src: "https://i.postimg.cc/g07wKM7z/1.jpg",
      title: "Dandi March",
    },
    {
      id: 2,
      src: "https://i.postimg.cc/1zTYGQcv/2.jpg",
      title: "Historical Thinking Workshop",
    },
    {
      id: 3,
      src: "https://i.postimg.cc/63Pw4gyK/3.jpg",
      title: "Rise of a Hitler",
    },
    {
      id: 4,
      src: "https://i.postimg.cc/mDVpC5sm/Threads-of-Time-Indus-Valley-Civilization-1.jpg",
      title: "Indus Valley Civilization",
    },
    {
      id: 5,
      src: "https://i.postimg.cc/hGB2wB4C/Ti-E-Teacher-Training-DPS-Schools-1.jpg",
      title: "TiE Teacher Training",
    },
    {
      id: 6,
      src: "https://i.postimg.cc/6qycR6zQ/Trade-To-Territory.jpg",
      title: "Trade To Territory",
    },
    {
      id: 7,
      src: "https://i.postimg.cc/Z5JRmkNs/7.jpg",
      title: "Rise of a Hitler",
    },
    {
      id: 8,
      src: "https://i.postimg.cc/6674bNVd/8.jpg",
      title: "Theatre in Education Workshop",
    }
  ];

  // Partner schools data - logos for carousel
  const schoolLogos = [
    {
      name: "Amity International School",
      logo: "/lovable-uploads/02c23192-4bf5-4738-8916-938e4704166c.png"
    },
    {
      name: "Bal Bharati Public School",
      logo: "/lovable-uploads/fad24372-8dcd-4bef-985c-8dd3e6108cc1.png"
    },
    {
      name: "Cambridge School",
      logo: "/lovable-uploads/a316bc26-c92f-4a2a-a532-7a11a122a756.png"
    },
    {
      name: "Manav Rachna International School",
      logo: "/lovable-uploads/07633a65-be67-44d0-806a-058a0859d34b.png"
    },
    {
      name: "Muni International School",
      logo: "/lovable-uploads/4325758e-52fd-4269-9963-82a2bb0e2568.png"
    },
    {
      name: "St. Mary's School",
      logo: "/lovable-uploads/274b0c63-7723-49c6-a85d-fb9223cd95c6.png"
    },
    {
      name: "Tagore International School",
      logo: "/lovable-uploads/772cb95b-c245-4a26-9de3-45427b8c4a55.png"
    },
    {
      name: "Uttam School for Girls",
      logo: "/lovable-uploads/df05f14d-5e21-44eb-a7cc-232c70b4e93f.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Video Section - Updated with new background video */}
      <div className="relative h-screen">
        {/* Minimal overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Updated video source */}
        <div className="absolute inset-0">
          {/* <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/endgame.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <img className="object-cover w-full h-full" src={"https://i.postimg.cc/g07wKM7z/1.jpg"}></img>
        </div>
        
        {/* Hero Content - Clean typography */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="font-garamond text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">HISTORY</span>{" "}
            <span className="text-hd-orange">DIARIES</span>
          </h1>
          
          <div className="h-0.5 w-40 bg-white mx-auto mb-8"></div>
          
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-garamond max-w-3xl mb-8 text-white/90">
            Bringing Social Sciences to Life
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mb-10 font-raleway leading-relaxed">
            Founded by IIT Delhi alumni, we reimagine how students experience history, geography, political science, and economics through theatre, storytelling, and immersive learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/programs" 
              className="bg-hd-orange hover:bg-hd-orange/90 text-white px-8 py-4 font-bold text-lg rounded-md transition-all duration-300 flex items-center gap-2"
            >
              Explore Our Programs
              <ArrowRight className="ml-2" />
            </Link>
           
          </div>
        </div>
        
        {/* Simple scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Impact Numbers Section */}
      <section className="py-20 bg-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-garamond text-center mb-16">OUR IMPACT</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center p-6 bg-gray-50 rounded-lg transition-all duration-300 ${
                  statsInView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-hd-orange mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-1 font-garamond">
                  {stat.count}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-center font-garamond text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions Section - Fixed for consistent dimensions */}
      <section className="py-20 bg-gray-50" ref={mediaRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-garamond text-center mb-12">MEDIA MENTIONS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaMentions.map((mention, index) => (
              <div 
                key={index}
                className={`overflow-hidden cursor-pointer rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
                  mediaInView ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => {
                  setSelectedImage(mention.image);
                  setSelectedImageTitle(mention.source);
                }}
              >
                <div className="relative">
                  {/* Fixed dimensions for consistent thumbnails */}
                  <div className="aspect-w-4 aspect-h-3 h-48">
                    <img 
                      src={mention.image} 
                      alt={mention.source} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-garamond text-lg">{mention.source}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Dialog - Updated with accessibility and scrollable content */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-none rounded-lg">
          <DialogTitle className="sr-only">
            <VisuallyHidden>
              {selectedImageTitle}
            </VisuallyHidden>
          </DialogTitle>
          <div className="relative max-h-[80vh] overflow-auto p-4">
            <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/70 p-2 text-white hover:bg-black">
              <X size={24} />
            </DialogClose>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt={selectedImageTitle} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Photo Gallery Section - Now with Carousel */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-garamond text-center mb-12">GLIMPSES FROM OUR JOURNEY</h2>
          
          <div className="max-w-6xl mx-auto">
            <Carousel 
              opts={{
                align: "center",
                loop: true,
                dragFree: false,
              }}
              plugins={[
                Autoplay({ delay: 3000, stopOnInteraction: true })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="relative overflow-hidden group rounded-lg shadow-lg bg-gray-800">
                      <div className="aspect-w-16 aspect-h-12 h-80">
                        <img 
                          src={image.src} 
                          alt={image.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-garamond text-xl mb-2">{image.title}</h3>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-white font-garamond text-lg">{image.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative -left-0 bg-hd-orange/80 hover:bg-hd-orange border-hd-orange text-white" />
                <CarouselNext className="relative -right-0 bg-hd-orange/80 hover:bg-hd-orange border-hd-orange text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partners Section - Improved Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-garamond text-center mb-12">SCHOOLS WE'VE WORKED WITH</h2>
          
          {/* School Logo Carousel with improved positioning */}
          <div className="mb-12">
            <Carousel 
              opts={{
                align: "center",
                loop: true,
                dragFree: false,
              }}
              plugins={[autoplayRef.current]}
              setApi={setEmblaRef}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {schoolLogos.map((school, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                    <Card className="border-none shadow-sm">
                      <CardContent className="flex items-center justify-center p-6 h-48">
                        <div className="w-full h-full flex items-center justify-center p-4">
                          <img 
                            src={school.logo} 
                            alt={school.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="-left-0 relative" />
                <CarouselNext className="-right-0 relative" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Final CTA Banner - Updated background and contact info */}
      <section 
        className="py-16 bg-hd-orange relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-hd-orange/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-garamond text-white mb-4">
            Want to bring our programs to your school?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's co-create learning that's engaging, meaningful, and memorable.
          </p>
          <a 
            href="mailto:historydiaries2016@gmail.com" 
            className="inline-flex items-center gap-2 bg-white text-hd-orange px-8 py-4 font-bold text-lg rounded-md transition-all duration-300 hover:bg-gray-100"
          >
            Contact us <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;