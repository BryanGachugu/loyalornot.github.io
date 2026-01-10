import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Heart, Shield, Users, MessageCircle, Play, Sparkles, CheckCircle2, Download, Eye, Ban } from "lucide-react";

export default function App() {
  return (
    <div className="size-full overflow-auto bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 sticky top-0 bg-gray-950/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <Heart className="size-7 text-pink-500 fill-pink-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Loyal or Not
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg shadow-purple-500/30"
            >
              Play the Game
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 size-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 size-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                <Sparkles className="inline size-3.5 mr-1.5 mb-0.5" />
                A New Kind of Social Game
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                A Game That Tests{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Assumptions
                </span>
                {" "}— Not People.
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Loyal or Not is a social game where couples and friends playfully explore trust, curiosity, and how others see them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-xl shadow-purple-500/40 text-base font-semibold h-14"
                >
                  <Play className="size-5 mr-2" />
                  Play the Game
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-white h-14"
                >
                  How It Works
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto w-full max-w-sm">
                {/* Phone mockup glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30" />
                
                {/* Phone mockup */}
                <div className="relative bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden">
                  <div className="aspect-[9/19] bg-gradient-to-br from-gray-900 via-purple-950/30 to-pink-950/30 flex flex-col items-center justify-center p-8">
                    <div className="w-full space-y-6">
                      <div className="text-center space-y-2">
                        <div className="text-sm text-purple-400 uppercase tracking-wider">Round 3 of 5</div>
                        <h3 className="text-2xl font-bold">Ready to Reveal?</h3>
                      </div>
                      
                      <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
                        <p className="text-center text-lg mb-4">
                          "Your friend thinks you're most likely to..."
                        </p>
                        <div className="flex justify-center">
                          <div className="size-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                            <Eye className="size-8" />
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold"
                      >
                        Tap to Reveal
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-8 px-4 border-y border-gray-800 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-green-500" />
              <span>Consent-based gameplay</span>
            </div>
            <div className="flex items-center gap-2">
              <Ban className="size-4 text-green-500" />
              <span>No tracking. No spying.</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="size-4 text-pink-500 fill-pink-500" />
              <span>Designed for fun, not conflict</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-xl text-gray-400">Three simple steps to start playing</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="size-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Users className="size-7" />
                </div>
                <CardTitle className="text-2xl text-white">Join the Game</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Players opt in willingly. No one is added without consent.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-pink-500/50 transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="size-14 bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                  <Sparkles className="size-7" />
                </div>
                <CardTitle className="text-2xl text-white">Play & Reveal</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  Make choices, see outcomes, and discover how perceptions align — or don't.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="size-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <MessageCircle className="size-7" />
                </div>
                <CardTitle className="text-2xl text-white">Talk About It</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  The game sparks conversation, laughter, and reflection.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Curiosity</h2>
            <p className="text-xl text-gray-400">Not for surveillance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="size-5 text-purple-400" />
                  Consent-First Design
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Everyone chooses to play. No surprises, no hidden data.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-pink-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Ban className="size-5 text-pink-400" />
                  No Background Monitoring
                </CardTitle>
                <CardDescription className="text-gray-400">
                  We don't track locations, messages, or anything else.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Heart className="size-5 text-blue-400" />
                  Social, Not Serious
                </CardTitle>
                <CardDescription className="text-gray-400">
                  It's a game that brings people together, not apart.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Eye className="size-5 text-purple-400" />
                  Built for Curiosity
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Explore trust and perception in a playful way.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-pink-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Play className="size-5 text-pink-400" />
                  Short, Addictive Rounds
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Quick sessions that keep you coming back for more.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageCircle className="size-5 text-blue-400" />
                  Conversation Starter
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Opens up dialogue about assumptions and perspectives.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Emotional Hook Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto max-w-4xl text-center relative space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            It's Not About Proof.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              It's About Perspective.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Loyal or Not isn't here to judge. It's here to start conversations and let players explore trust in a light, playful way.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20" />
        
        <div className="container mx-auto max-w-3xl text-center relative">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 border border-gray-700 shadow-2xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Download & Play
                </h2>
                <p className="text-xl text-gray-300">
                  A game for curious minds, brave conversations, and playful trust.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-xl shadow-purple-500/40 h-16 px-10 text-lg font-semibold"
              >
                <Download className="size-5 mr-2" />
                Get Started Now
              </Button>
              
              <p className="text-sm text-gray-400">
                Available on Android
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="size-6 text-pink-500 fill-pink-500" />
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Loyal or Not
              </span>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            Loyal or Not is a social game. All interactions are voluntary.
          </div>
        </div>
      </footer>
    </div>
  );
}
