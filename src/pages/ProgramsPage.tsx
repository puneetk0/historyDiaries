import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Theater, MapPin, GraduationCap, Users, Clock, Eye, ChevronRight, Play, Star, Calendar, Award, X, Search, Puzzle, Map, MessageCircle, Scroll, Wrench, User, Bot } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ProgramsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Animation refs
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: tabsRef, inView: tabsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openVideoModal = (videoId: string) => {
    // Only open modal for videos that are actually available
    if (videoId === 'trade-to-territory' || videoId === 'rise-of-hitler' || videoId === 'dandi-march') {
      setSelectedVideo(videoId);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-hd-orange via-amber-500 to-orange-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-16 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-56 h-56 bg-yellow-300/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <Theater className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-semibold text-sm">Transforming Education Through Theatre</span>
            </div>
            
            <h1 className="font-trajan text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide leading-tight drop-shadow-lg">
              OUR PROGRAMS
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="h-2 w-2 bg-white rounded-full mx-4 shadow-lg"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
            
            <p className="text-base md:text-lg text-white/95 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm">
              At History Diaries, we bring the social sciences alive through theatre, storytelling, and immersive experiences. 
              Our programs are designed to spark curiosity, deepen understanding, and make social sciences truly memorable 
              for students and educators alike.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section 
        ref={introRef}
        className={`py-16 ${introInView ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6">
          <div
            ref={tabsRef}
            className={`${tabsInView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <Tabs defaultValue="theatre" className="w-full">
              {/* Enhanced Tab Navigation */}
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white/90 backdrop-blur-sm p-2 rounded-2xl shadow-xl border border-slate-200/60 max-w-4xl w-full h-auto">
                  <TabsTrigger 
                    value="theatre" 
                    className="group relative flex flex-col items-center gap-3 p-6 bg-transparent rounded-xl transition-all duration-300 data-[state=active]:bg-hd-orange data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-50 text-slate-700 border-0"
                  >
                    <div className="p-3 rounded-xl bg-hd-orange/10 group-data-[state=active]:bg-white/20 transition-all duration-300 shadow-sm">
                      <Theater className="w-6 h-6 text-hd-orange group-data-[state=active]:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-center">
                      <div className="font-trajan text-base font-bold mb-1 tracking-wide">Theatre Shows</div>
                      <div className="text-sm opacity-80 font-medium">Curriculum-based performances</div>
                    </div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="monuments" 
                    className="group relative flex flex-col items-center gap-3 p-6 bg-transparent rounded-xl transition-all duration-300 data-[state=active]:bg-hd-blue data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-50 text-slate-700 border-0"
                  >
                    <div className="p-3 rounded-xl bg-hd-blue/10 group-data-[state=active]:bg-white/20 transition-all duration-300 shadow-sm">
                      <MapPin className="w-6 h-6 text-hd-blue group-data-[state=active]:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-center">
                      <div className="font-trajan text-base font-bold mb-1 tracking-wide">Monument Visits</div>
                      <div className="text-sm opacity-80 font-medium">Historical site experiences</div>
                    </div>
                  </TabsTrigger>
                  
                  <TabsTrigger 
                    value="training" 
                    className="group relative flex flex-col items-center gap-3 p-6 bg-transparent rounded-xl transition-all duration-300 data-[state=active]:bg-hd-purple data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-50 text-slate-700 border-0"
                  >
                    <div className="p-3 rounded-xl bg-hd-purple/10 group-data-[state=active]:bg-white/20 transition-all duration-300 shadow-sm">
                      <GraduationCap className="w-6 h-6 text-hd-purple group-data-[state=active]:text-white transition-colors duration-300" />
                    </div>
                    <div className="text-center">
                      <div className="font-trajan text-base font-bold mb-1 tracking-wide">Teacher Training</div>
                      <div className="text-sm opacity-80 font-medium">Educator empowerment</div>
                    </div>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Theatre Shows Tab */}
              <TabsContent value="theatre" className="space-y-16 animate-fade-in">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center bg-gradient-to-r from-hd-orange/10 to-amber-500/10 px-4 py-2 rounded-full mb-6 border border-hd-orange/20">
                    <Theater className="w-4 h-4 text-hd-orange mr-2" />
                    <span className="text-hd-orange font-semibold text-sm">Our Flagship Offering</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-trajan text-slate-800 mb-4 tracking-wide">
                    Curriculum-Based Theatre Shows
                  </h2>
                  
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-hd-orange/60"></div>
                    <div className="h-1 w-1 bg-hd-orange rounded-full mx-3"></div>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-hd-orange/60"></div>
                  </div>
                  
                  <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
                    Our flagship offering—these immersive, syllabus-aligned theatre productions transform history and social science 
                    chapters into dynamic, engaging performances. Students don't just learn—they live the story, helping them build 
                    deeper emotional and intellectual connections with the subject matter.
                  </p>
                </div>

                {/* Past Productions */}
                <div>
                  <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-trajan text-slate-800 mb-6 tracking-wide">Past Productions</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-hd-orange to-amber-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Trade to Territory */}
                    <Card className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white hover:-translate-y-3 min-h-[600px]">
                      {/* Video Thumbnail - Fixed height */}
                      <div 
                        className="relative h-56 bg-[url(public/Images/3.jpg)] overflow-hidden cursor-pointer"
                        onClick={() => openVideoModal('trade-to-territory')}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-hd-orange to-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10">
                          Most Popular
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-base font-medium opacity-95">Watch Trailer</div>
                        </div>
                      </div>
                      
                      <CardHeader className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <CardTitle className="font-trajan text-2xl text-slate-800 mb-3 group-hover:text-hd-orange transition-colors duration-300 tracking-wide">
                              Trade to Territory
                            </CardTitle>
                            <CardDescription className="text-slate-600 font-semibold text-base">Grades 7 & 8</CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-hd-orange/10 to-amber-500/10 px-4 py-2 rounded-lg border border-hd-orange/20">
                            <Theater className="w-4 h-4 text-hd-orange" />
                            <span className="text-sm font-bold text-slate-700">8+ Shows</span>
                          </div>
                          <div className="flex items-center gap-2 bg-gradient-to-r from-hd-blue/10 to-blue-500/10 px-4 py-2 rounded-lg border border-hd-blue/20">
                            <Users className="w-4 h-4 text-hd-blue" />
                            <span className="text-sm font-bold text-slate-700">3000+ Students</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="px-6 pb-6">
                        <p className="text-slate-700 leading-relaxed text-base mb-4">
                          A powerful blend of entertainment and education, Trade to Territory traces India's transformation from a prosperous 
                          trade hub to a colonized land. With Nat and Nati as witty narrators, the play captures the arrival of European powers, 
                          British expansion, and acts of Indian resistance.
                        </p>
                        {expandedCard === 'trade-to-territory' && (
                          <p className="text-slate-700 leading-relaxed text-base mb-4">
                            From the Battle of Plassey to the actions of Rani Lakshmibai and Tipu Sultan, the play highlights betrayal, bravery, and awakening. Performed with dynamic lights, dramatic sets, and immersive sound, it invites students to reflect on how history was shaped—and continues to shape us.
                          </p>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleCardExpansion('trade-to-territory')}
                          className="text-hd-orange hover:text-hd-orange hover:bg-hd-orange/10 p-0 h-auto font-semibold text-sm"
                        >
                          {expandedCard === 'trade-to-territory' ? 'Read Less' : 'Read More'}
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Rise of Hitler */}
                    <Card className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white hover:-translate-y-3 min-h-[600px]">
                      {/* Video Thumbnail - Fixed height */}
                      <div 
                        className="relative h-56 bg-gradient-to-br from-red-500/20 to-orange-500/20 overflow-hidden cursor-pointer"
                        onClick={() => openVideoModal('rise-of-hitler')}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-base font-medium opacity-95">Watch Trailer</div>
                        </div>
                      </div>
                      
                      <CardHeader className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <CardTitle className="font-trajan text-2xl text-slate-800 mb-3 group-hover:text-red-600 transition-colors duration-300 tracking-wide">
                              Rise of Hitler
                            </CardTitle>
                            <CardDescription className="text-slate-600 font-semibold text-base">Grades 9 & above</CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-red-100 to-red-50 px-4 py-2 rounded-lg border border-red-200">
                            <Theater className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-bold text-slate-700">5+ Shows</span>
                          </div>
                          <div className="flex items-center gap-2 bg-gradient-to-r from-hd-blue/10 to-blue-500/10 px-4 py-2 rounded-lg border border-hd-blue/20">
                            <Users className="w-4 h-4 text-hd-blue" />
                            <span className="text-sm font-bold text-slate-700">2000+ Students</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="px-6 pb-6">
                        <p className="text-slate-700 leading-relaxed text-base mb-4">
                          Rise of Hitler takes audiences through the turbulent post-WWI era that paved the way for one of history's most 
                          notorious figures. The play explores the cultural despair, economic hardship, and political manipulation that 
                          fueled Hitler's ascent—and his eventual fall.
                        </p>
                        {expandedCard === 'rise-of-hitler' && (
                          <p className="text-slate-700 leading-relaxed text-base mb-4">
                            Set in 20th-century Europe and presented with evocative visuals and emotionally charged performances, the show challenges students to focus on changing systemic contexts, not just personalities, to truly learn from history.
                          </p>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleCardExpansion('rise-of-hitler')}
                          className="text-red-600 hover:text-red-600 hover:bg-red-50 p-0 h-auto font-semibold text-sm"
                        >
                          {expandedCard === 'rise-of-hitler' ? 'Read Less' : 'Read More'}
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Dandi March */}
                    <Card className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white hover:-translate-y-3 min-h-[600px]">
                      {/* Video Thumbnail - Fixed height */}
                      <div 
                        className="relative h-56 bg-gradient-to-br from-green-500/20 to-emerald-500/20 overflow-hidden cursor-pointer"
                        onClick={() => openVideoModal('dandi-march')}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-base font-medium opacity-95">Watch Trailer</div>
                        </div>
                      </div>
                      
                      <CardHeader className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <CardTitle className="font-trajan text-2xl text-slate-800 mb-3 group-hover:text-green-600 transition-colors duration-300 tracking-wide">
                              Dandi March
                            </CardTitle>
                            <CardDescription className="text-slate-600 font-semibold text-base">Grades 10 & above</CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-50 px-4 py-2 rounded-lg border border-green-200">
                            <Theater className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-bold text-slate-700">2 Shows</span>
                          </div>
                          <div className="flex items-center gap-2 bg-gradient-to-r from-hd-blue/10 to-blue-500/10 px-4 py-2 rounded-lg border border-hd-blue/20">
                            <Users className="w-4 h-4 text-hd-blue" />
                            <span className="text-sm font-bold text-slate-700">1000+ Students</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="px-6 pb-6">
                        <p className="text-slate-700 leading-relaxed text-base mb-4">
                          An inspiring portrayal of Gandhiji's legendary march, Dandi March goes beyond the salt to reveal what it truly 
                          takes to mobilize the masses. Through compelling stagecraft, the show unpacks how leaders connect with people, build momentum, and turn a spark into a movement.
                        </p>
                        {expandedCard === 'dandi-march' && (
                          <p className="text-slate-700 leading-relaxed text-base mb-4">
                            It's a story of resilience, purpose, and strategy—delivered with captivating dramatization and immersive soundscapes. This production invites students to witness how seemingly small steps can transform into historic shifts.
                          </p>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleCardExpansion('dandi-march')}
                          className="text-green-600 hover:text-green-600 hover:bg-green-50 p-0 h-auto font-semibold text-sm"
                        >
                          {expandedCard === 'dandi-march' ? 'Read Less' : 'Read More'}
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Threads of Time */}
                    <Card className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white hover:-translate-y-3 min-h-[600px]">
                      {/* Preview Thumbnail - Fixed height, no click action */}
                      <div className="relative h-56 bg-gradient-to-br from-hd-teal/20 to-teal-500/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10">
                          Coming Soon
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                            <Eye className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-base font-medium opacity-95">Preview Soon</div>
                        </div>
                      </div>
                      
                      <CardHeader className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <CardTitle className="font-trajan text-2xl text-slate-800 mb-3 group-hover:text-hd-teal transition-colors duration-300 tracking-wide">
                              Threads of Time: The Story of Us
                            </CardTitle>
                            <CardDescription className="text-slate-600 font-semibold text-base">Grades 6-7</CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-hd-teal/10 to-teal-500/10 px-4 py-2 rounded-lg border border-hd-teal/20">
                            <Calendar className="w-4 h-4 text-hd-teal" />
                            <span className="text-sm font-bold text-slate-700">Coming Soon</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="px-6 pb-6">
                        <p className="text-slate-700 leading-relaxed text-base mb-4">
                          Threads of Time transports students to the world of the Indus Valley Civilization—one of the world's earliest and most advanced urban societies. Through the eyes of children, artisans, and leaders of Harappa, Mohenjo-daro, and Dholavira, the play explores daily life, trade, innovation, and unsolved mysteries.
                        </p>
                        {expandedCard === 'threads-of-time' && (
                          <div className="text-slate-700 leading-relaxed text-base mb-4">
                            <p className="mb-4">With flowing rivers and bustling streets as its stage, the production brings alive:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-3 mb-4">
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
                          className="text-hd-teal hover:text-hd-teal hover:bg-hd-teal/10 p-0 h-auto font-semibold text-sm"
                        >
                          {expandedCard === 'threads-of-time' ? 'Read Less' : 'Read More'}
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Flames of Change */}
                    <Card className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 bg-white hover:-translate-y-3 min-h-[600px]">
                      {/* Preview Thumbnail - Fixed height, no click action */}
                      <div className="relative h-56 bg-gradient-to-br from-red-600/20 to-orange-600/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10">
                          Coming Soon
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                            <Eye className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-base font-medium opacity-95">Preview Soon</div>
                        </div>
                      </div>
                      
                      <CardHeader className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <CardTitle className="font-trajan text-2xl text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-300 tracking-wide">
                              Flames of Change: The French Revolution Reimagined
                            </CardTitle>
                            <CardDescription className="text-slate-600 font-semibold text-base">Grades 9 & above</CardDescription>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-50 px-4 py-2 rounded-lg border border-orange-200">
                            <Calendar className="w-4 h-4 text-orange-600" />
                            <span className="text-sm font-bold text-slate-700">Coming Soon</span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="px-6 pb-6">
                        <p className="text-slate-700 leading-relaxed text-base mb-4">
                          Flames of Change plunges students into the ideological fire of the French Revolution. This theatrical experience uncovers not just events, but ideas—liberty, equality, fraternity—and their global legacy.
                        </p>
                        {expandedCard === 'flames-of-change' && (
                          <div className="text-slate-700 leading-relaxed text-base mb-4">
                            <p className="mb-4">Guided by charged characters and striking performances, students witness:</p>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-3 mb-4">
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
                          className="text-orange-600 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto font-semibold text-sm"
                        >
                          {expandedCard === 'flames-of-change' ? 'Read Less' : 'Read More'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Monument Visits Tab */}
              <TabsContent value="monuments" className="space-y-16 animate-fade-in">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center bg-gradient-to-r from-hd-blue/15 to-blue-500/15 px-6 py-3 rounded-full mb-8 border border-hd-blue/30 shadow-lg">
                    <MapPin className="w-5 h-5 text-hd-blue mr-3" />
                    <span className="text-hd-blue font-bold text-lg">Where Stories, Stones, and Students Come Alive</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-trajan text-slate-800 mb-6 tracking-wide">
                    Theatre-Based Monument Visits
                  </h2>
                  
                  <div className="flex items-center justify-center mb-8">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-hd-blue/60"></div>
                    <div className="h-2 w-2 bg-hd-blue rounded-full mx-4 shadow-lg"></div>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-hd-blue/60"></div>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-4xl mx-auto">
                    Our monument visits are not just field trips—they're full-fledged historical immersions. With professional actors, 
                    interactive storytelling, and live dramatizations, students engage with history at the very sites where it unfolded.
                  </p>
                  
                  {/* Enhanced Process Overview */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                    <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <div className="text-base font-bold mb-2">Orientation Session</div>
                      <div className="text-sm opacity-90">Pre-visit briefing</div>
                    </div>
                    <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Theater className="w-8 h-8" />
                      </div>
                      <div className="text-base font-bold mb-2">Live Performances</div>
                      <div className="text-sm opacity-90">On-site dramatization</div>
                    </div>
                    <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="text-base font-bold mb-2">100-150 Students</div>
                      <div className="text-sm opacity-90">Group capacity</div>
                    </div>
                    <div className="bg-gradient-to-br from-hd-blue via-blue-600 to-blue-700 text-white p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="text-base font-bold mb-2">Grades 6+</div>
                      <div className="text-sm opacity-90">Age appropriate</div>
                    </div>
                  </div>
                </div>

                {/* First two cards in a row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-12">
                  {/* Qutub Complex Visit */}
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl bg-white shadow-xl hover:-translate-y-3 overflow-hidden">
                    <div className="bg-gradient-to-br from-hd-blue/15 to-blue-500/25 p-8 border-b border-hd-blue/20">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-hd-blue/20 rounded-2xl shadow-lg">
                          <MapPin className="w-8 h-8 text-hd-blue" />
                        </div>
                        <div>
                          <CardTitle className="font-trajan text-2xl text-slate-800 mb-2 tracking-wide">
                            Qutub Complex Visit
                          </CardTitle>
                          <CardDescription className="text-hd-blue font-bold text-lg">
                            Grades 6 and above | Echoes of the Past
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <p className="text-slate-700 leading-relaxed text-lg mb-6">
                        Step into the cradle of Delhi's medieval history with Echoes of the Past. Students wander through the Qutub Complex, 
                        guided by costumed actors portraying rulers, architects, travelers, and local citizens of the time.
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed text-base mb-6">
                        As students move from monument to monument, stories come alive—from the vision of Qutub-ud-din Aibak and the rise of Indo-Islamic architecture, to lesser-known tales of craftsmanship, power struggles, and cultural fusion.
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed text-base">
                        Interactive activity sheets at each station encourage students to think critically, and a concluding reflection session ties it all together—prompting students to ask: What makes a monument more than just stone?
                      </p>
                    </CardContent>
                  </Card>

                  {/* Humayun's Tomb Visit */}
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl bg-white shadow-xl hover:-translate-y-3 overflow-hidden">
                    <div className="bg-gradient-to-br from-hd-blue/15 to-blue-500/25 p-8 border-b border-hd-blue/20">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-hd-blue/20 rounded-2xl shadow-lg">
                          <MapPin className="w-8 h-8 text-hd-blue" />
                        </div>
                        <div>
                          <CardTitle className="font-trajan text-2xl text-slate-800 mb-2 tracking-wide">
                            Humayun's Tomb Visit
                          </CardTitle>
                          <CardDescription className="text-hd-blue font-bold text-lg">
                            Grades 6 and above | Mughal Grandeur
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <p className="text-slate-700 leading-relaxed text-lg mb-6">
                        Uncover the Mughal rule through the grandeur and geometry of Humayun's Tomb—Delhi's earliest example of 
                        Persian-style garden tombs and the architectural inspiration for the Taj Mahal.
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed text-base mb-6">
                        In this dramatized walk, students meet characters like Humayun's grieving wife Haji Begum, architects from Persia, and historians from Akbar's court. The storytelling illuminates themes of empire, art, death, and memory.
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed text-base">
                        From symmetrical layouts to symbolic inscriptions, the experience invites students to interpret spaces beyond aesthetics—to understand power, identity, and the evolution of Mughal rule.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Time Detectives Workshop - Full width card with all content visible */}
                <div className="max-w-7xl mx-auto">
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl bg-white shadow-xl hover:-translate-y-3 overflow-hidden">
                    <div className="bg-gradient-to-br from-hd-teal/15 to-teal-500/25 p-10 border-b border-hd-teal/20">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="p-5 bg-hd-teal/20 rounded-3xl shadow-lg">
                          <Search className="w-12 h-12 text-hd-teal" />
                        </div>
                        <div>
                          <CardTitle className="font-trajan text-4xl text-slate-800 mb-3 tracking-wide">
                            Time Detectives Workshop
                          </CardTitle>
                          <CardDescription className="text-hd-teal font-bold text-xl">
                            Grades 6+ | Unearthing Clues from History—Right in Your School
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                          <p className="text-slate-700 leading-relaxed text-xl mb-8 font-medium">
                            This hands-on, school-based workshop transforms students into young archaeologists for a day. Led by a facilitator from an archaeology background, Time Detectives takes students through the thrilling process of historical discovery using replica artifacts, excavation simulations, and collaborative challenges.
                          </p>
                          
                          <p className="text-slate-700 leading-relaxed text-lg mb-8">
                            Students dig through soil grids, reconstruct broken pottery, interpret archaeological maps, and decode symbols—experiencing how archaeologists uncover the past, layer by layer.
                          </p>
                          
                          <p className="text-slate-700 leading-relaxed text-lg">
                            From a Mystery Box to a simulated dig site, from decoding seals to sealing a time capsule, this in-school adventure opens up history not just as a subject—but as a journey of exploration and wonder.
                          </p>
                        </div>
                        
                        <div>
                          {/* Workshop Highlights */}
                          <div className="bg-gradient-to-br from-hd-teal/8 to-teal-50 p-8 rounded-3xl border border-hd-teal/20 shadow-lg">
                            <h4 className="font-trajan text-2xl font-bold text-slate-800 mb-6 tracking-wide flex items-center gap-3">
                              <Star className="w-6 h-6 text-hd-teal" />
                              Workshop Highlights
                            </h4>
                            <div className="grid grid-cols-1 gap-4">
                              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-hd-teal/15 rounded-xl">
                                  <Puzzle className="w-6 h-6 text-hd-teal flex-shrink-0" />
                                </div>
                                <span className="text-lg font-semibold text-slate-700">Simulated Excavation with Grid Mapping</span>
                              </div>
                              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-hd-teal/15 rounded-xl">
                                  <Map className="w-6 h-6 text-hd-teal flex-shrink-0" />
                                </div>
                                <span className="text-lg font-semibold text-slate-700">Archaeological Treasure Hunt</span>
                              </div>
                              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-hd-teal/15 rounded-xl">
                                  <div className="w-6 h-6 text-hd-teal flex-shrink-0 text-2xl">🏺</div>
                                </div>
                                <span className="text-lg font-semibold text-slate-700">Pottery Reconstruction Challenge</span>
                              </div>
                              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-hd-teal/15 rounded-xl">
                                  <MessageCircle className="w-6 h-6 text-hd-teal flex-shrink-0" />
                                </div>
                                <span className="text-lg font-semibold text-slate-700">Interactive Session with Archaeologist</span>
                              </div>
                              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-hd-teal/15 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-hd-teal/15 rounded-xl">
                                  <Scroll className="w-6 h-6 text-hd-teal flex-shrink-0" />
                                </div>
                                <span className="text-lg font-semibold text-slate-700">Time Capsule Reflection</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Additional Info */}
                      <div className="flex flex-wrap gap-6 justify-center">
                        <div className="flex items-center gap-4 bg-gradient-to-r from-slate-100 to-slate-50 px-8 py-4 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="p-3 bg-slate-200/50 rounded-xl">
                            <Wrench className="w-7 h-7 text-slate-600" />
                          </div>
                          <span className="text-lg font-bold text-slate-700">All Materials Provided</span>
                        </div>
                        <div className="flex items-center gap-4 bg-gradient-to-r from-slate-100 to-slate-50 px-8 py-4 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="p-3 bg-slate-200/50 rounded-xl">
                            <User className="w-7 h-7 text-slate-600" />
                          </div>
                          <span className="text-lg font-bold text-slate-700">Led by PhD Archaeologist</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Teacher Training Tab */}
              <TabsContent value="training" className="space-y-12 animate-fade-in">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center bg-hd-purple/10 px-4 py-2 rounded-full mb-6">
                    <GraduationCap className="w-4 h-4 text-hd-purple mr-2" />
                    <span className="text-hd-purple font-semibold text-sm">Empowering Educators</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-trajan text-slate-800 mb-4 tracking-wide">
                    Teacher Training Programs
                  </h2>
                  
                  <div className="bg-gradient-to-r from-hd-purple/10 to-purple-500/10 p-6 rounded-2xl mb-8 border border-hd-purple/20">
                    <p className="text-lg text-slate-700 font-bold mb-2">
                      Empowering Educators to Bring Social Sciences Alive
                    </p>
                    <p className="text-sm text-slate-600 font-semibold">
                      For Teachers of Grades 6–12
                    </p>
                  </div>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    Teaching social sciences is not just about delivering content—it's about shaping mindsets, encouraging critical thinking, 
                    and helping students see the world through multiple lenses. Yet, many educators struggle to move beyond textbooks due to a lack of innovative tools and training.
                  </p>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our teacher training workshops are designed to re-energize social science classrooms by blending creativity, technology, and interdisciplinary thinking. Whether you're a seasoned educator or just beginning your journey, these programs equip you with practical tools to make learning dynamic, student-centered, and future-ready.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                  {/* Part 1: Drama in the Classroom */}
                  <Card className="group hover:shadow-xl transition-all duration-500 border border-slate-200/50 rounded-3xl bg-white overflow-hidden hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-hd-purple/10 to-purple-500/20 p-8 border-b border-hd-purple/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-hd-purple/20 rounded-2xl">
                          <Theater className="w-8 h-8 text-hd-purple" />
                        </div>
                        <div>
                          <CardTitle className="font-trajan text-2xl text-slate-800 mb-2 tracking-wide">
                            Part 1: Bringing Lessons to Life
                          </CardTitle>
                          <CardDescription className="text-hd-purple font-bold text-base">
                            Drama in the Classroom
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <p className="text-slate-700 leading-relaxed text-base mb-4">
                        Discover how theatre techniques can turn ordinary lessons into unforgettable experiences. 
                        This workshop helps educators tap into the narrative richness of social sciences by using drama to explore historical events, civic dilemmas, and social issues.
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed text-base mb-6">
                        Teachers learn to design and deliver interactive lessons that build emotional connection, engagement, and deeper understanding.
                      </p>
                      
                      <p className="mb-4 font-semibold text-slate-800 text-lg">Participants leave with the confidence to:</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3 bg-hd-purple/5 p-4 rounded-xl border border-hd-purple/10">
                          <ChevronRight className="w-5 h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-base">Use role-play, tableaux, and dramatic monologues in class</span>
                        </div>
                        <div className="flex items-start gap-3 bg-hd-purple/5 p-4 rounded-xl border border-hd-purple/10">
                          <ChevronRight className="w-5 h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-base">Encourage perspective-taking and empathy through storytelling</span>
                        </div>
                        <div className="flex items-start gap-3 bg-hd-purple/5 p-4 rounded-xl border border-hd-purple/10">
                          <ChevronRight className="w-5 h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-base">Transform dull chapters into participatory learning adventures</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Part 2: Teaching with GenAI */}
                  <Card className="group hover:shadow-xl transition-all duration-500 border border-slate-200/50 rounded-3xl bg-white overflow-hidden hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-hd-purple/10 to-purple-500/20 p-8 border-b border-hd-purple/20">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-hd-purple/20 rounded-2xl">
                          <Bot className="w-8 h-8 text-hd-purple" />
                        </div>
                        <div>
                          <CardTitle className="font-trajan text-2xl text-slate-800 mb-2 tracking-wide">
                            Part 2: Teaching with GenAI
                          </CardTitle>
                          <CardDescription className="text-hd-purple font-bold text-base">
                            Revolutionizing the Classroom Experience
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <p className="text-slate-700 leading-relaxed text-base mb-4">
                        Unlock the power of Generative AI to design smart, creative, and engaging lessons. 
                        In this hands-on workshop, educators are introduced to AI tools like ChatGPT, Canva AI, and NotebookLM.
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed text-base mb-6">
                        Learning how to use them to create lesson plans, generate classroom visuals, simulate debates, and more. The goal is to make technology a teacher's ally—not a challenge.
                      </p>
                      
                      <p className="mb-4 font-semibold text-slate-800 text-lg">Participants learn how to:</p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3 bg-hd-purple/5 p-4 rounded-xl border border-hd-purple/10">
                          <ChevronRight className="w-5 h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-base">Use AI to save prep time while increasing impact</span>
                        </div>
                        <div className="flex items-start gap-3 bg-hd-purple/5 p-4 rounded-xl border border-hd-purple/10">
                          <ChevronRight className="w-5 h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-base">Personalize learning materials based on student interests</span>
                        </div>
                        <div className="flex items-start gap-3 bg-hd-purple/5 p-4 rounded-xl border border-hd-purple/10">
                          <ChevronRight className="w-5 h-5 text-hd-purple mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-base">Foster curiosity and digital literacy in their students</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-sm text-slate-600 leading-relaxed mb-8">
                    These programs are ideal for schools looking to reimagine teaching, support teacher growth, and build classrooms that are as inspiring as they are informative.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-hd-purple via-purple-600 to-purple-700 text-white p-8 rounded-2xl text-center relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-4 left-4 w-20 h-20 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-trajan text-2xl md:text-3xl mb-4 leading-tight">
                        Looking to reimagine how social sciences are taught at your school?
                      </h3>
                      <p className="text-sm mb-6 opacity-95 leading-relaxed max-w-2xl mx-auto">
                        We also offer support in curriculum design, program development, and experiential learning strategies 
                        tailored to your needs. Let's co-create a powerful learning experience together.
                      </p>
                      <Button size="lg" className="bg-white text-hd-purple hover:bg-slate-100 text-sm px-8 py-3 rounded-xl shadow-lg font-semibold transition-all duration-300 hover:scale-105">
                        <Award className="w-4 h-4 mr-2" />
                        Get Started Today
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={closeVideoModal}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-trajan text-2xl text-slate-800">
              {selectedVideo === 'trade-to-territory' && 'Trade to Territory - Trailer'}
              {selectedVideo === 'rise-of-hitler' && 'Rise of Hitler - Trailer'}
              {selectedVideo === 'dandi-march' && 'Dandi March - Trailer'}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black rounded-b-lg overflow-hidden">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProgramsPage;
