
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Theater, MapPin, GraduationCap, Users, ChevronRight, Star, Calendar,Torus,  Award, Search, Puzzle, Map, MessageCircle, Scroll, Wrench, User, Bot, ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramsPage = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animation refs
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Past productions data
  const pastProductions = [
    {
      id: 'trade-to-territory',
      title: 'Trade to Territory',
      grades: 'Grades 7 & 8',
      image: 'https://i.postimg.cc/6qycR6zQ/Trade-To-Territory.jpg',
      shows: '8+ Shows',
      students: '3000+ Students',
      description: 'A powerful blend of entertainment and education, Trade to Territory traces India\'s transformation from a prosperous trade hub to a colonized land. With Nat and Nati as witty narrators, the play captures the arrival of European powers, British expansion, and acts of Indian resistance.',
      expandedDescription: 'From the Battle of Plassey to the actions of Rani Lakshmibai and Tipu Sultan, the play highlights betrayal, bravery, and awakening. Performed with dynamic lights, dramatic sets, and immersive sound, it invites students to reflect on how history was shaped—and continues to shape us.',
      color: 'hd-orange',
      isPopular: true
    },
    {
      id: 'rise-of-hitler',
      title: 'Rise of Hitler',
      grades: 'Grades 9 & above',
      image: 'https://i.postimg.cc/5jdVnzBk/5.jpg',
      shows: '5+ Shows',
      students: '2000+ Students',
      description: 'Rise of Hitler takes audiences through the turbulent post-WWI era that paved the way for one of history\'s most notorious figures. The play explores the cultural despair, economic hardship, and political manipulation that fueled Hitler\'s ascent—and his eventual fall.',
      expandedDescription: 'Set in 20th-century Europe and presented with evocative visuals and emotionally charged performances, the show challenges students to focus on changing systemic contexts, not just personalities, to truly learn from history.',
      color: 'red-600'
    },
    {
      id: 'dandi-march',
      title: 'Dandi March',
      grades: 'Grades 10 & above',
      image: 'https://i.postimg.cc/g07wKM7z/1.jpg',
      shows: '2 Shows',
      students: '1000+ Students',
      description: 'An inspiring portrayal of Gandhiji\'s legendary march, Dandi March goes beyond the salt to reveal what it truly takes to mobilize the masses. Through compelling stagecraft, the show unpacks how leaders connect with people, build momentum, and turn a spark into a movement.',
      expandedDescription: 'It\'s a story of resilience, purpose, and strategy—delivered with captivating dramatization and immersive soundscapes. This production invites students to witness how seemingly small steps can transform into historic shifts.',
      color: 'green-600'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pastProductions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pastProductions.length) % pastProductions.length);
  };

  // Reusable CTA component
  const ReimagineCTA = ({ sectionTitle }: { sectionTitle: string }) => (
    <div className="max-w-4xl mx-auto mt-12 md:mt-16 px-4">
      <div className="bg-gradient-to-br from-hd-purple via-purple-600 to-purple-700 text-white p-6 md:p-8 rounded-2xl text-center relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-4 left-4 w-20 h-20 bg-white rounded-full blur-2xl"></div>
        </div>
        <div className="relative z-10">
          <h3 className="font-trajan text-xl md:text-2xl lg:text-3xl mb-4 leading-tight">
          Looking to reimagine how social sciences are taught at your school?
          </h3>
          <p className="text-sm mb-6 opacity-95 leading-relaxed max-w-2xl mx-auto">
          We also offer support in curriculum design, program development, and experiential learning strategies tailored to your needs. Let's co-create a powerful learning experience together.
          </p>
          <Button size="lg" className="bg-white text-hd-purple hover:bg-slate-100 text-sm px-6 md:px-8 py-3 rounded-xl shadow-lg font-semibold transition-all duration-300 hover:scale-105">
            <Award className="w-4 h-4 mr-2" />
           <a href="https://forms.gle/mS32ZjSjbbtFUti47">  Get Started Today</a>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-hd-orange via-amber-500 to-orange-600 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-16 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-56 h-56 bg-yellow-300/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-trajan text-3xl md:text-5xl lg:text-7xl text-white mb-4 md:mb-6 tracking-wide leading-tight drop-shadow-lg">
              OUR PROGRAMS
            </h1>
            
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="h-2 w-2 bg-white rounded-full mx-4 shadow-lg"></div>
              <div className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
            
            <p className="text-sm md:text-base lg:text-lg text-white/95 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm px-4">
              At History Diaries, we bring the social sciences alive through theatre, storytelling, and immersive experiences. 
              Our programs are designed to spark curiosity, deepen understanding, and make social sciences truly memorable 
              for students and educators alike.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Navigation and Content */}
      <section 
        ref={introRef}
        className={`py-12 md:py-24 ${introInView ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="theatre" className="w-full">
            {/* Sticky Navigation - Mobile Optimized */}
            <div className=" md:top-20 z-40 mb-8 md:mb-12 bg-gradient-to-b from-slate-50 via-slate-50 to-transparent pb-4">
              <div className="flex justify-center">
                <div className="w-full md:max-w-6xl bg-white/95 backdrop-blur-xl p-2 md:p-3 rounded-none md:rounded-2xl md:rounded-3xl md:shadow-2xl border-0 md:border border-slate-200/60">
                  {/* Mobile: Horizontal scroll, Desktop: Grid */}
                  <TabsList className="flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-4 w-full bg-transparent p-0 rounded-xl md:rounded-2xl gap-1 md:gap-2 h-auto scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <TabsTrigger 
                      value="theatre" 
                      className="group flex flex-col md:flex-row items-center gap-1 md:gap-3 p-2 md:p-4 bg-slate-50/50 rounded-xl md:rounded-2xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-hd-orange data-[state=active]:to-amber-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 text-slate-700 border-0 justify-center min-h-[60px] md:min-h-[80px] flex-shrink-0 w-auto md:w-full"
                    >
                      <div className="p-1.5 md:p-3 rounded-lg md:rounded-xl bg-hd-orange/15 group-data-[state=active]:bg-white/25 transition-all duration-300">
                        <Theater className="w-3 h-3 md:w-4 md:h-4 text-hd-orange group-data-[state=active]:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-center md:text-left">
                        <div className="font-trajan text-xs md:text-sm font-bold tracking-wide whitespace-nowrap">Theatre Shows</div>
                      </div>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="monuments" 
                      className="group flex flex-col md:flex-row items-center gap-1 md:gap-3 p-2 md:p-4 bg-slate-50/50 rounded-xl md:rounded-2xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-hd-blue data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 text-slate-700 border-0 justify-center min-h-[60px] md:min-h-[80px] flex-shrink-0 w-auto md:w-full"
                    >
                      <div className="p-1.5 md:p-3 rounded-lg md:rounded-xl bg-hd-blue/15 group-data-[state=active]:bg-white/25 transition-all duration-300">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-hd-blue group-data-[state=active]:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-center md:text-left">
                        <div className="font-trajan text-xs md:text-sm font-bold tracking-wide whitespace-nowrap">Monument Visits</div>  
                      </div>
                    </TabsTrigger>

                    <TabsTrigger 
                      value="detectives" 
                      className="group flex flex-col md:flex-row items-center gap-1 md:gap-3 p-2 md:p-4 bg-slate-50/50 rounded-xl md:rounded-2xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-hd-teal data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 text-slate-700 border-0 justify-center min-h-[60px] md:min-h-[80px] flex-shrink-0 w-auto md:w-full"
                    >
                      <div className="p-1.5 md:p-3 rounded-lg md:rounded-xl bg-hd-teal/15 group-data-[state=active]:bg-white/25 transition-all duration-300">
                        <Search className="w-3 h-3 md:w-4 md:h-4 text-hd-teal group-data-[state=active]:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-center md:text-left">
                        <div className="font-trajan text-xs md:text-sm font-bold tracking-wide whitespace-nowrap">Archaeological workshops</div>
                      </div>
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="training" 
                      className="group flex flex-col md:flex-row items-center gap-1 md:gap-3 p-2 md:p-4 bg-slate-50/50 rounded-xl md:rounded-2xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-hd-purple data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 text-slate-700 border-0 justify-center min-h-[60px] md:min-h-[80px] flex-shrink-0 w-auto md:w-full"
                    >
                      <div className="p-1.5 md:p-3 rounded-lg md:rounded-xl bg-hd-purple/15 group-data-[state=active]:bg-white/25 transition-all duration-300">
                        <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-hd-purple group-data-[state=active]:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-center md:text-left">
                        <div className="font-trajan text-xs md:text-sm font-bold tracking-wide whitespace-nowrap">Teacher Training</div>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </div>

            {/* Theatre Shows Tab */}
            <TabsContent value="theatre" className="space-y-12 md:space-y-16 animate-fade-in mt-0">
              {/* Section Header */}
              <div className="text-center max-w-4xl mx-auto px-4">
                <div className="inline-flex items-center bg-gradient-to-r from-hd-orange/10 to-amber-500/10 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6 border border-hd-orange/20">
                  <Theater className="w-3 h-3 md:w-4 md:h-4 text-hd-orange mr-2" />
                  <span className="text-hd-orange font-semibold text-xs md:text-sm">Our Flagship Offering</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-trajan text-slate-800 mb-3 md:mb-4 tracking-wide">
                  Curriculum-Based Theatre Shows
                </h2>
                
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-hd-orange/60"></div>
                  <div className="h-1 w-1 bg-hd-orange rounded-full mx-3"></div>
                  <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-hd-orange/60"></div>
                </div>
                
                <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  Our flagship offering—these immersive, syllabus-aligned theatre productions transform history and social science 
                  chapters into dynamic, engaging performances. Students don't just learn—they live the story, helping them build 
                  deeper emotional and intellectual connections with the subject matter.
                </p>
              </div>

              {/* Coming Soon Section */}
              <div className="px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-trajan text-slate-800 mb-4 md:mb-6 tracking-wide">Upcoming Productions</h3>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                  {/* Threads of Time */}
                  <Card className="group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white hover:-translate-y-1 md:hover:-translate-y-3">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <img 
                        src="https://i.postimg.cc/gJnLSJ5F/Threads-of-Time-Indus-Valley-Civilization-4.jpg" 
                        alt="Threads of Time Coming Soon" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-bold shadow-lg z-10">
                        Coming Soon
                      </div>
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                        <div className="text-sm md:text-base font-medium opacity-95">Preview Soon</div>
                      </div>
                    </div>
                    
                    <CardHeader className="p-4 md:p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <CardTitle className="font-trajan text-lg md:text-2xl text-slate-800 mb-2 md:mb-3 group-hover:text-hd-teal transition-colors duration-300 tracking-wide">
                            Threads of Time: The Story of Us
                          </CardTitle>
                          <CardDescription className="text-slate-600 font-semibold text-sm md:text-base">Grades 6-7</CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-hd-teal/10 to-teal-500/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-hd-teal/20">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-hd-teal" />
                          <span className="text-xs md:text-sm font-bold text-slate-700">July 2025</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                        Threads of Time transports students to the world of the Indus Valley Civilization—one of the world's earliest and most advanced urban societies. Through the eyes of children, artisans, and leaders of Harappa, Mohenjo-daro, and Dholavira, the play explores daily life, trade, innovation, and unsolved mysteries.
                      </p>
                      {expandedCard === 'threads-of-time' && (
                        <div className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                          <p className="mb-3 md:mb-4">With flowing rivers and bustling streets as its stage, the production brings alive:</p>
                          <ul className="list-disc list-inside space-y-1 text-xs md:text-sm ml-3 mb-3 md:mb-4">
                            <li>Ingenious urban planning and drainage systems</li>
                            <li>Cross-continental trade and craftsmanship</li>
                            <li>Childhood and family life in Harappan homes</li>
                            <li>Undeciphered scripts, seals, and sacred rituals</li>
                            <li>New archaeological insights from Rakhigarhi and Dholavira</li>
                          </ul>
                          <p>Grounded in archaeological records and modern research, the show fuses storytelling with visual props, audience interaction, and replica-based stagecraft—igniting curiosity about India's ancient past through light, sound, and drama.</p>
                        </div>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => toggleCardExpansion('threads-of-time')}
                        className="text-hd-teal hover:text-hd-teal hover:bg-hd-teal/10 p-0 h-auto font-semibold text-xs md:text-sm"
                      >
                        {expandedCard === 'threads-of-time' ? 'Read Less' : 'Read More'}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Flames of Change */}
                  <Card className="group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white hover:-translate-y-1 md:hover:-translate-y-3">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                      <img 
                        src="https://www.chicoer.com/wp-content/uploads/migration/2013/201310/NEWS_131019566_AR_0_HFUODORZVCSF.jpg?w=535" 
                        alt="Flames of Change Coming Soon" 
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-bold shadow-lg z-10">
                        Coming Soon
                      </div>
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                        <div className="text-sm md:text-base font-medium opacity-95">Preview Soon</div>
                      </div>
                    </div>
                    
                    <CardHeader className="p-4 md:p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <CardTitle className="font-trajan text-lg md:text-2xl text-slate-800 mb-2 md:mb-3 group-hover:text-orange-600 transition-colors duration-300 tracking-wide">
                            Flames of Change: The French Revolution Reimagined
                          </CardTitle>
                          <CardDescription className="text-slate-600 font-semibold text-sm md:text-base">Grades 9 & above</CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                        <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-50 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-orange-200">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 text-orange-600" />
                          <span className="text-xs md:text-sm font-bold text-slate-700">August 2025</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                        Flames of Change plunges students into the ideological fire of the French Revolution. This theatrical experience uncovers not just events, but ideas—liberty, equality, fraternity—and their global legacy.
                      </p>
                      {expandedCard === 'flames-of-change' && (
                        <div className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                          <p className="mb-3 md:mb-4">Guided by charged characters and striking performances, students witness:</p>
                          <ul className="list-disc list-inside space-y-1 text-xs md:text-sm ml-3 mb-3 md:mb-4">
                            <li>The spark of revolution in Paris</li>
                            <li>The rise and fall of the Reign of Terror</li>
                            <li>The dramatic ascent of Napoleon</li>
                            <li>The contradictions and failures of revolutionary ideals</li>
                          </ul>
                          <p>With lights, movement, and rich dialogue, the show asks: Did the revolution deliver on its promises? What does it teach us about real change today? A perfect blend of performance and provocation, this show encourages critical reflection on history, power, and justice.</p>
                        </div>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => toggleCardExpansion('flames-of-change')}
                        className="text-orange-600 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto font-semibold text-xs md:text-sm"
                      >
                        {expandedCard === 'flames-of-change' ? 'Read Less' : 'Read More'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Past Productions Section */}
              <div className="px-4">
                <div className="text-center mb-8 md:mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-trajan text-slate-800 mb-4 md:mb-6 tracking-wide">Past Productions</h3>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-hd-orange to-amber-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Mobile Optimized Carousel */}
                <div className="relative max-w-7xl mx-auto">
                  <div className="overflow-hidden">
                    <div 
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{ 
                        transform: `translateX(-${currentSlide * (window.innerWidth < 768 ? 100 : 50)}%)` 
                      }}
                    >
                      {pastProductions.map((production, index) => (
                        <div key={production.id} className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-4">
                          <Card className="group overflow-hidden rounded-xl md:rounded-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-1 md:hover:-translate-y-2 h-full shadow-lg hover:shadow-xl">
                            {/* Thumbnail with improved aspect ratio */}
                            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                              <img 
                                src={production.image} 
                                alt={`${production.title} Production`} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                              {production.isPopular && (
                                <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-gradient-to-r from-hd-orange to-amber-500 text-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs font-bold shadow-lg z-10 animate-pulse">
                                  ⭐ Most Popular
                                </div>
                              )}
                              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white">
                                <div className="text-xs md:text-sm font-medium opacity-90 bg-black/30 px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
                                  Production Gallery
                                </div>
                              </div>
                            </div>
                            
                            <CardHeader className="p-4 md:p-6">
                              <div className="flex justify-between items-start mb-3 md:mb-4">
                                <div className="flex-1">
                                  <CardTitle className={`font-trajan text-lg md:text-2xl text-slate-800 mb-2 md:mb-3 group-hover:text-${production.color} transition-colors duration-300 tracking-wide`}>
                                    {production.title}
                                  </CardTitle>
                                  <CardDescription className="text-slate-600 font-semibold text-sm md:text-base">{production.grades}</CardDescription>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 md:gap-3 mb-3 md:mb-4">
                                <div className={`flex items-center gap-2 bg-gradient-to-r from-${production.color}/10 to-${production.color === 'hd-orange' ? 'amber-500' : production.color}/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-${production.color}/20`}>
                                  <Theater className={`w-3 h-3 md:w-4 md:h-4 text-${production.color}`} />
                                  <span className="text-xs md:text-sm font-bold text-slate-700">{production.shows}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-hd-blue/10 to-blue-500/10 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-hd-blue/20">
                                  <Users className="w-3 h-3 md:w-4 md:h-4 text-hd-blue" />
                                  <span className="text-xs md:text-sm font-bold text-slate-700">{production.students}</span>
                                </div>
                              </div>
                            </CardHeader>
                            
                            <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
                              <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                                {production.description}
                              </p>
                              {expandedCard === production.id && (
                                <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                                  {production.expandedDescription}
                                </p>
                              )}
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => toggleCardExpansion(production.id)}
                                className={`text-${production.color} hover:text-${production.color} hover:bg-${production.color}/10 p-0 h-auto font-semibold text-xs md:text-sm`}
                              >
                                {expandedCard === production.id ? 'Read Less' : 'Read More'}
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Carousel Controls - Mobile Optimized */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-slate-700 p-2 md:p-4 rounded-full shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 border border-slate-200/50"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-slate-700 p-2 md:p-4 rounded-full shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 border border-slate-200/50"
                  >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                  
                  {/* Enhanced Carousel Indicators */}
                  <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
                    {pastProductions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          currentSlide === index 
                            ? 'w-6 md:w-8 h-2 md:h-3 bg-gradient-to-r from-hd-orange to-amber-500 shadow-lg' 
                            : 'w-2 md:w-3 h-2 md:h-3 bg-slate-300 hover:bg-slate-400 hover:scale-125'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <ReimagineCTA sectionTitle="Theatre Shows" />
            </TabsContent>

            {/* Monument Visits Tab */}
            <TabsContent value="monuments" className="space-y-8 md:space-y-12 animate-fade-in mt-0 px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-gradient-to-r from-hd-blue/15 to-blue-500/15 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6 border border-hd-blue/30 shadow-lg">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-hd-blue mr-2 md:mr-3" />
                  <span className="text-hd-blue font-semibold text-xs md:text-sm">Where Stories, Stones, and Students Come Alive</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-trajan text-slate-800 mb-4 md:mb-6 tracking-wide">
                  Theatre-Based Monument Visits
                </h2>
                
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent to-hd-blue/60"></div>
                  <div className="h-2 w-2 bg-hd-blue rounded-full mx-4 shadow-lg"></div>
                  <div className="h-px w-16 md:w-20 bg-gradient-to-l from-transparent to-hd-blue/60"></div>
                </div>
                
                <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto">
                  Our monument visits are not just field trips—they're full-fledged historical immersions. With professional actors, 
                  interactive storytelling, and live dramatizations, students engage with history at the very sites where it unfolded.
                </p>
                
                {/* Enhanced Process Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto mb-12 md:mb-16">
                  <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-4 md:p-8 rounded-2xl md:rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                      <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="text-sm md:text-base font-bold mb-1 md:mb-2">Orientation Session</div>
                    <div className="text-xs md:text-sm opacity-90">Pre-visit briefing</div>
                  </div>
                  <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-4 md:p-8 rounded-2xl md:rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                      <Theater className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="text-sm md:text-base font-bold mb-1 md:mb-2">Live Performances</div>
                    <div className="text-xs md:text-sm opacity-90">On-site dramatization</div>
                  </div>
                  <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-4 md:p-8 rounded-2xl md:rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                      <Users className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="text-sm md:text-base font-bold mb-1 md:mb-2">100-150 Students</div>
                    <div className="text-xs md:text-sm opacity-90">Group capacity</div>
                  </div>
                  <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-4 md:p-8 rounded-2xl md:rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 shadow-lg">
                      <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="text-sm md:text-base font-bold mb-1 md:mb-2">Grades 6+</div>
                    <div className="text-xs md:text-sm opacity-90">Age appropriate</div>
                  </div>
                </div>
              </div>

              {/* Monument visit cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
                {/* Qutub Complex Visit */}
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl md:rounded-3xl bg-white shadow-xl hover:-translate-y-1 md:hover:-translate-y-3 overflow-hidden">
                  <div className="bg-gradient-to-br from-hd-blue/15 to-blue-500/25 p-4 md:p-8 border-b border-hd-blue/20">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="p-3 md:p-4 bg-hd-blue/20 rounded-xl md:rounded-2xl shadow-lg">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-hd-blue" />
                      </div>
                      <div>
                        <CardTitle className="font-trajan text-xl md:text-2xl text-slate-800 mb-1 md:mb-2 tracking-wide">
                          Qutub Complex Visit
                        </CardTitle>
                        <CardDescription className="text-hd-blue font-bold text-base md:text-lg">
                          Grades 6 and above
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 md:p-8">
                    <p className="text-slate-700 leading-relaxed text-sm md:text-md mb-4 md:mb-6">
                      Step into the cradle of Delhi's medieval history with Echoes of the Past. Students wander through the Qutub Complex, 
                      guided by costumed actors portraying rulers, architects, travelers, and local citizens of the time.
<br /> <br />
                      As students move from monument to monument, stories come alive—from the vision of Qutub-ud-din Aibak and the rise of Indo-Islamic architecture, to lesser-known tales of craftsmanship, power struggles, and cultural fusion.
 
                      <br /><br />                  

                      Interactive activity sheets at each station encourage students to think critically, and a concluding reflection session ties it all together—prompting students to ask: What makes a monument more than just stone?
                    </p>
                  </CardContent>
                </Card>

                {/* Humayun's Tomb Visit */}
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl md:rounded-3xl bg-white shadow-xl hover:-translate-y-1 md:hover:-translate-y-3 overflow-hidden">
                  <div className="bg-gradient-to-br from-hd-blue/15 to-blue-500/25 p-4 md:p-8 border-b border-hd-blue/20">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="p-3 md:p-4 bg-hd-blue/20 rounded-xl md:rounded-2xl shadow-lg">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-hd-blue" />
                      </div>
                      <div>
                        <CardTitle className="font-trajan text-xl md:text-2xl text-slate-800 mb-1 md:mb-2 tracking-wide">
                          Humayun's Tomb Visit
                        </CardTitle>
                        <CardDescription className="text-hd-blue font-bold text-base md:text-lg">
                          Grades 6 and above
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 md:p-8">
                    <p className="text-slate-700 leading-relaxed text-sm md:text-md mb-4 md:mb-6">
                      Uncover the Mughal rule through the grandeur and geometry of Humayun's Tomb—Delhi's earliest example of 
                      Persian-style garden tombs and the architectural inspiration for the Taj Mahal.
                 <br /> <br />
                      In this dramatized walk, students meet characters like Humayun's grieving wife Haji Begum, architects from Persia, and historians from Akbar's court. The storytelling illuminates themes of empire, art, death, and memory.
                      <br /><br />
                      From symmetrical layouts to symbolic inscriptions, the experience invites students to interpret spaces beyond aesthetics—to understand power, identity, and the evolution of Mughal rule.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <ReimagineCTA sectionTitle="Monument Visits" />
            </TabsContent>

            {/* Time Detectives Tab */}
            <TabsContent value="detectives" className="space-y-8 md:space-y-12 animate-fade-in mt-0 px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-gradient-to-r from-hd-teal/15 to-teal-500/15 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6 border border-hd-teal/30 shadow-lg">
                  <Search className="w-3 h-3 md:w-4 md:h-4 text-hd-teal mr-2 md:mr-3" />
                  <span className="text-hd-teal font-semibold text-xs md:text-sm">Unearthing Clues from History</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-trajan text-slate-800 mb-4 md:mb-6 tracking-wide">
                Time Detectives - Archaeology Workshop
                </h2>
                
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent to-hd-teal/60"></div>
                  <div className="h-2 w-2 bg-hd-teal rounded-full mx-4 shadow-lg"></div>
                  <div className="h-px w-16 md:w-20 bg-gradient-to-l from-transparent to-hd-teal/60"></div>
                </div>
                
                <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto">
                  This hands-on, school-based workshop transforms students into young archaeologists for a day. Led by a facilitator from an archaeology background, 
                  Time Detectives takes students through the thrilling process of historical discovery using replica artifacts, excavation simulations, and collaborative challenges.
                </p>
              </div>

              {/* Time Detectives Workshop Card */}
              <div className="max-w-5xl mx-auto">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl md:rounded-3xl bg-white shadow-xl hover:-translate-y-1 md:hover:-translate-y-3 overflow-hidden">
                  <div className="bg-gradient-to-br from-hd-teal/15 to-teal-500/25 p-4 md:p-8 border-b border-hd-teal/20">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className="p-3 md:p-4 bg-hd-teal/20 rounded-xl md:rounded-2xl shadow-lg">
                        <Search className="w-8 h-8 md:w-10 md:h-10 text-hd-teal" />
                      </div>
                      <div>
                        <CardTitle className="font-trajan text-xl md:text-2xl lg:text-3xl text-slate-800 mb-2 md:mb-3 tracking-wide">
                          Time Detectives - Archaeology Workshop
                        </CardTitle>
                        <CardDescription className="text-hd-teal font-bold text-base md:text-lg lg:text-xl">
                          Grades 6+ | Right in Your School
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-6 md:mb-10">
                      <div>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-md mb-4 md:mb-6 font-medium">
                        This hands-on, school-based workshop transforms students into young archaeologists for a day. Led by a facilitator from an archaeology background, Time Detectives takes students through the thrilling process of historical discovery using replica artifacts, excavation simulations, and collaborative challenges. <br /><br />
Students dig through soil grids, reconstruct broken pottery, interpret archaeological maps, and decode symbols—experiencing how archaeologists uncover the past, layer by layer. The workshop encourages critical thinking, patience, observation, and teamwork—all while making the mysteries of history tangible and exciting. <br /><br />
From a Mystery Box to a simulated dig site, from decoding seals to sealing a time capsule, this in-school adventure opens up history not just as a subject—but as a journey of exploration and wonder.
                        </p>
                      </div>
                      
                      <div>
                        {/* Workshop Highlights */}
                        <div className="bg-gradient-to-br from-hd-teal/8 to-teal-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-hd-teal/20 shadow-lg">
                          <h4 className="font-trajan text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4 tracking-wide flex items-center gap-2 md:gap-3">
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-hd-teal" />
                            Workshop Highlights
                          </h4>
                          <div className="grid grid-cols-1 gap-2 md:gap-3">
                            <div className="flex items-center gap-2 md:gap-3 bg-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                              <div className="p-1.5 md:p-2 bg-hd-teal/15 rounded-lg">
                                <Puzzle className="w-3 h-3 md:w-4 md:h-4 text-hd-teal flex-shrink-0" />
                              </div>
                              <span className="text-xs md:text-sm font-semibold text-slate-700">Simulated Excavation with Grid Mapping</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 bg-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                              <div className="p-1.5 md:p-2 bg-hd-teal/15 rounded-lg">
                                <Map className="w-3 h-3 md:w-4 md:h-4 text-hd-teal flex-shrink-0" />
                              </div>
                              <span className="text-xs md:text-sm font-semibold text-slate-700">Archaeological Treasure Hunt</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 bg-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                              <div className="p-1.5 md:p-2 bg-hd-teal/15 rounded-lg">
                              <Torus className="w-3 h-3 md:w-4 md:h-4 text-hd-teal flex-shrink-0" />
                              </div>
                              <span className="text-xs md:text-sm font-semibold text-slate-700">Pottery Reconstruction Challenge</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 bg-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                              <div className="p-1.5 md:p-2 bg-hd-teal/15 rounded-lg">
                                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-hd-teal flex-shrink-0" />
                              </div>
                              <span className="text-xs md:text-sm font-semibold text-slate-700">Interactive Session with Archaeologist</span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 bg-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                              <div className="p-1.5 md:p-2 bg-hd-teal/15 rounded-lg">
                                <Scroll className="w-3 h-3 md:w-4 md:h-4 text-hd-teal flex-shrink-0" />
                              </div>
                              <span className="text-xs md:text-sm font-semibold text-slate-700">Time Capsule Reflection</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 justify-center">
                      <div className="flex items-center gap-3 md:gap-4 bg-gradient-to-r from-slate-100 to-slate-50 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="p-1.5 md:p-2 bg-slate-200/50 rounded-lg">
                          <Wrench className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-700">All Materials Provided</span>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4 bg-gradient-to-r from-slate-100 to-slate-50 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="p-1.5 md:p-2 bg-slate-200/50 rounded-lg">
                          <User className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-700">Led by an Expert </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <ReimagineCTA sectionTitle="Archaeological Workshops" />
            </TabsContent>

            {/* Teacher Training Tab */}
            <TabsContent value="training" className="space-y-8 md:space-y-12 animate-fade-in mt-0 px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-hd-purple/10 px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                  <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-hd-purple mr-2" />
                  <span className="text-hd-purple font-semibold text-xs md:text-sm">Empowering Educators</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-trajan text-slate-800 mb-3 md:mb-4 tracking-wide">
                  Teacher Training Programs
                </h2>
                
                <div className="bg-gradient-to-r from-hd-purple/10 to-purple-500/10 p-4 md:p-6 rounded-xl md:rounded-2xl mb-6 md:mb-8 border border-hd-purple/20">
                  <p className="text-base md:text-lg text-slate-700 font-bold mb-2">
                    Empowering Educators to Bring Social Sciences Alive
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 font-semibold">
                    For Teachers of Grades 6–12
                  </p>
                </div>
                
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 md:mb-6">
                  Teaching social sciences is not just about delivering content—it's about shaping mindsets, encouraging critical thinking, 
                  and helping students see the world through multiple lenses. Yet, many educators struggle to move beyond textbooks due to a lack of innovative tools and training. Our teacher training workshops are designed to re-energize social science classrooms by blending creativity, technology, and interdisciplinary thinking. Whether you're a seasoned educator or just beginning your journey, these programs equip you with practical tools to make learning dynamic, student-centered, and future-ready.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
                {/* Part 1: Drama in the Classroom */}
                <Card className="group hover:shadow-xl transition-all duration-500 border border-slate-200/50 rounded-2xl md:rounded-3xl bg-white overflow-hidden hover:-translate-y-1 md:hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-hd-purple/10 to-purple-500/20 p-4 md:p-8 border-b border-hd-purple/20">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="p-3 md:p-4 bg-hd-purple/20 rounded-xl md:rounded-2xl">
                        <Theater className="w-6 h-6 md:w-8 md:h-8 text-hd-purple" />
                      </div>
                      <div>
                        <CardTitle className="font-trajan text-lg md:text-2xl text-slate-800 mb-1 md:mb-2 tracking-wide">
                          Part 1: Bringing Lessons to Life
                        </CardTitle>
                        <CardDescription className="text-hd-purple font-bold text-sm md:text-base">
                          Drama in the Classroom
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 md:p-8">
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                      Discover how theatre techniques can turn ordinary lessons into unforgettable experiences. 
                      This workshop helps educators tap into the narrative richness of social sciences by using drama to explore historical events, civic dilemmas, and social issues.
                    </p>
                    
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                      Teachers learn to design and deliver interactive lessons that build emotional connection, engagement, and deeper understanding.
                    </p>
                    
                    <p className="mb-3 md:mb-4 font-semibold text-slate-800 text-base md:text-lg">Participants leave with the confidence to:</p>
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-start gap-2 md:gap-3 bg-hd-purple/5 p-3 md:p-4 rounded-lg md:rounded-xl border border-hd-purple/10">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm md:text-base">Use role-play, tableaux, and dramatic monologues in class</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 bg-hd-purple/5 p-3 md:p-4 rounded-lg md:rounded-xl border border-hd-purple/10">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm md:text-base">Encourage perspective-taking and empathy through storytelling</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 bg-hd-purple/5 p-3 md:p-4 rounded-lg md:rounded-xl border border-hd-purple/10">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm md:text-base">Transform dull chapters into participatory learning adventures</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Part 2: Teaching with GenAI */}
                <Card className="group hover:shadow-xl transition-all duration-500 border border-slate-200/50 rounded-2xl md:rounded-3xl bg-white overflow-hidden hover:-translate-y-1 md:hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-hd-purple/10 to-purple-500/20 p-4 md:p-8 border-b border-hd-purple/20">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="p-3 md:p-4 bg-hd-purple/20 rounded-xl md:rounded-2xl">
                        <Bot className="w-6 h-6 md:w-8 md:h-8 text-hd-purple" />
                      </div>
                      <div>
                        <CardTitle className="font-trajan text-lg md:text-2xl text-slate-800 mb-1 md:mb-2 tracking-wide">
                          Part 2: Teaching with GenAI
                        </CardTitle>
                        <CardDescription className="text-hd-purple font-bold text-sm md:text-base">
                          Revolutionizing the Classroom Experience
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 md:p-8">
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                      Unlock the power of Generative AI to design smart, creative, and engaging lessons. 
                      In this hands-on workshop, educators are introduced to AI tools like ChatGPT, Canva AI, and NotebookLM.
                    </p>
                    
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                      Learning how to use them to create lesson plans, generate classroom visuals, simulate debates, and more. The goal is to make technology a teacher's ally—not a challenge.
                    </p>
                    
                    <p className="mb-3 md:mb-4 font-semibold text-slate-800 text-base md:text-lg">Participants learn how to:</p>
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-start gap-2 md:gap-3 bg-hd-purple/5 p-3 md:p-4 rounded-lg md:rounded-xl border border-hd-purple/10">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm md:text-base">Use AI to save prep time while increasing impact</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 bg-hd-purple/5 p-3 md:p-4 rounded-lg md:rounded-xl border border-hd-purple/10">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm md:text-base">Personalize learning materials based on student interests</span>
                      </div>
                      <div className="flex items-start gap-2 md:gap-3 bg-hd-purple/5 p-3 md:p-4 rounded-lg md:rounded-xl border border-hd-purple/10">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm md:text-base">Foster curiosity and digital literacy in their students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 md:mb-8">
                  These programs are ideal for schools looking to reimagine teaching, support teacher growth, and build classrooms that are as inspiring as they are informative.
                </p>
              </div>

              <ReimagineCTA sectionTitle="Social Sciences" />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;