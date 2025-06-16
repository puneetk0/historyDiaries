
import { useInView } from "react-intersection-observer";
import { Book, Globe, Target, Heart, Users, Award, CheckCircle } from "lucide-react";

const AboutPage = () => {
  // Animation refs
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-hd-blue to-hd-purple py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          ref={heroRef}
          className={`container mx-auto px-4 text-center relative z-10 ${
            heroInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h1 className="font-trajan text-4xl md:text-6xl text-white mb-6">ABOUT US</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-garamond">
            Transforming Social Science Education Through Theatre and Innovation
          </p>
          <div className="h-1 w-24 bg-hd-orange mx-auto mt-8"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={storyRef}
        className={`py-20 bg-white ${
          storyInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-hd-orange rounded-full mr-4">
                  <Book size={32} className="text-white" />
                </div>
                <h2 className="text-4xl font-trajan text-gray-800">OUR STORY</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-md text-gray-700 leading-relaxed">
                History Diaries was founded in 2017 by IIT Delhi alumni, driven by a shared
passion for theatre and history. The idea was sparked during a candid
conversation with an 8th-grade student, who found history boring in the
classroom but loved watching history-based movies and series. This moment
revealed a disconnect in how history was taught and experienced, leading to
the question: Can we make history engaging, relevant, and impactful for
students?
What began as a quest to make history exciting has evolved into a mission to
reimagine social sciences—including history, geography, political science, and
economics. By leveraging the power of theatre, storytelling, and hands-on
learning, we bring the stories of history and social sciences to life, making
them experiential and meaningful.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
                  alt="Students engaged in interactive learning"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* Mission & Vision */}
   <section 
        ref={missionRef}
        className={`py-20 bg-white ${
          missionInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="relative">
              <div className="bg-gradient-to-br from-hd-purple to-hd-blue p-8 rounded-2xl text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <Target size={40} className="mr-4" />
                  <h2 className="text-3xl font-trajan">OUR VISION</h2>
                </div>
                <p className="text-xl font-garamond leading-relaxed">
                To create a generation of compassionate, critical thinkers who connect the
past to their present and shape a better future. Inspiring a deeper
understanding of the world by making social sciences engaging, relevant,
and impactful.

                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hd-orange/20 rounded-full"></div>
            </div>
            
            {/* Mission */}
            <div className="relative">
              <div className="bg-gradient-to-br from-hd-orange to-hd-orange/80 p-8 rounded-2xl text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <Users size={40} className="mr-4" />
                  <h2 className="text-3xl font-trajan">OUR MISSION</h2>
                </div>
                <p className="text-xl font-garamond leading-relaxed">
                To transform social science education by making it experiential, interactive,
and meaningful for students. Collaborating with school leaders, we bring
innovative theatre-based programs, storytelling, and hands-on learning to
inspire students, empower teachers, and enrich curriculums.
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-hd-blue/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why History Diaries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-hd-blue rounded-full mr-4">
                <Globe size={32} className="text-white" />
              </div>
              <h2 className="text-4xl font-trajan text-gray-800">WHY "HISTORY DIARIES"?</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-garamond">
            Our journey began with history—exploring the stories of people, places, and
events. But history is not an isolated subject. It is deeply interwoven with
political, cultural, social, economic, and geographical contexts. These elements
shape the world we live in today and influence our everyday lives.
At History Diaries, we believe that history isn’t just about the past—it’s about
understanding the consequences of the past and how they manifest in our
present. From the political systems that govern us to the social and economic
conditions we navigate daily, history provides a lens through which we can
make sense of these dynamics.
The diary aspect is particularly significant because it reflects the personal
connection each individual has to these stories. We all live within the pages of
history, contributing to and being shaped by it. Our name, History Diaries,
symbolizes this journey—an exploration of the stories that define us, our
societies, and our futures.
This philosophy drives everything we do at History Diaries, making learning
not just impactful but transformative.
            </p>
          </div>


          {/* Image Gallery */}
         
        </div>
      </section>
      
   
      
      {/* Why Choose Us */}
      <section 
        ref={whyChooseRef}
        className={`py-20 bg-gray-50 ${
          whyChooseInView ? 'animate-fade-in' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-trajan text-gray-800 mb-6">WHY CHOOSE US</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring innovation, expertise, and passion to transform how students learn social sciences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-hd-orange">
              <div className="flex items-center mb-4">
                <CheckCircle size={24} className="text-hd-orange mr-3" />
                <h3 className="font-garamond text-xl font-semibold">Innovative Approach</h3>
              </div>
              <p className="text-gray-600">Unique use of theatre and technology in education</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-hd-blue">
              <div className="flex items-center mb-4">
                <CheckCircle size={24} className="text-hd-blue mr-3" />
                <h3 className="font-garamond text-xl font-semibold">Curriculum Alignment</h3>
              </div>
              <p className="text-gray-600">Seamless alignment with CBSE and ICSE standards</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-hd-purple">
              <div className="flex items-center mb-4">
                <CheckCircle size={24} className="text-hd-purple mr-3" />
                <h3 className="font-garamond text-xl font-semibold">Proven Success</h3>
              </div>
              <p className="text-gray-600">Demonstrated results across leading schools in Delhi NCR</p>
            </div>
          </div>
          
          {/* Skills We Cultivate */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-trajan text-center mb-8 text-gray-800">Skills We Cultivate in Students</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-hd-orange/5 border border-hd-orange/20">
                <div className="w-16 h-16 bg-hd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-hd-orange" />
                </div>
                <h4 className="font-garamond text-lg font-semibold mb-2 text-gray-800">Critical & Creative Thinking</h4>
                <p className="text-sm text-gray-600">Analyzing information and finding innovative solutions</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-hd-blue/5 border border-hd-blue/20">
                <div className="w-16 h-16 bg-hd-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-hd-blue" />
                </div>
                <h4 className="font-garamond text-lg font-semibold mb-2 text-gray-800">Compassion & Adaptability</h4>
                <p className="text-sm text-gray-600">Developing empathy and flexibility in a changing world</p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-hd-purple/5 border border-hd-purple/20">
                <div className="w-16 h-16 bg-hd-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-hd-purple" />
                </div>
                <h4 className="font-garamond text-lg font-semibold mb-2 text-gray-800">Historical & Social Awareness</h4>
                <p className="text-sm text-gray-600">Understanding contexts that shape our world</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
