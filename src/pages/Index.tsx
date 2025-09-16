import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Hero3D } from '@/components/Hero3D';
import { GeometryViewer } from '@/components/GeometryViewer';
import { BiologyViewer } from '@/components/BiologyViewer';
import { HistoryViewer } from '@/components/HistoryViewer';
import { SubjectCards } from '@/components/SubjectCards';
import { Eye, Zap, Globe, ArrowDown } from 'lucide-react';

const Index = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<'geometry' | 'biology' | 'history' | null>(null);

  const scrollToDemo = () => {
    setShowDemo(true);
    setSelectedSubject('geometry');
    setTimeout(() => {
      document.getElementById('demo-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleSubjectSelect = (subject: 'geometry' | 'biology' | 'history') => {
    setSelectedSubject(subject);
    setShowDemo(true);
    setTimeout(() => {
      document.getElementById('demo-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const renderSubjectViewer = () => {
    switch (selectedSubject) {
      case 'geometry':
        return <GeometryViewer />;
      case 'biology':
        return <BiologyViewer />;
      case 'history':
        return <HistoryViewer />;
      default:
        return <GeometryViewer />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              AR/VR Learning
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Reimagined
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Step into the future of education with immersive 3D visualizations.<br />
              <span className="text-primary font-medium">Geometry • Biology • History</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              onClick={scrollToDemo}
              size="lg" 
              className="bg-gradient-primary glow border-transparent text-lg px-8 py-6 hover:shadow-intense transition-all duration-300"
            >
              <Eye className="mr-2 h-5 w-5" />
              Try Interactive Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-border/30 text-lg px-8 py-6 hover:border-primary/50 transition-all duration-300"
            >
              <Globe className="mr-2 h-5 w-5" />
              Explore Subjects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>

        {/* Floating feature highlights */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto"
          >
            <div className="glass rounded-lg p-4 border border-border/20">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Interactive 3D Models</span>
              </div>
            </div>
            <div className="glass rounded-lg p-4 border border-border/20">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Immersive Learning</span>
              </div>
            </div>
            <div className="glass rounded-lg p-4 border border-border/20">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Multiple Subjects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subject Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Choose Your Subject
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore different fields of knowledge through cutting-edge AR/VR technology.
              Each subject offers unique interactive experiences designed to enhance understanding.
            </p>
          </motion.div>
        </div>

        <SubjectCards onSubjectSelect={handleSubjectSelect} />
      </section>

      {/* Interactive Demo Section */}
      {showDemo && (
        <section id="demo-section" className="py-20 px-4 bg-gradient-card/10">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Interactive Demo
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Experience the power of 3D learning with our interactive visualization tools.
                This is just a preview of what's possible with AR/VR education.
              </p>
              
              {/* Subject Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  onClick={() => setSelectedSubject('geometry')}
                  variant={selectedSubject === 'geometry' ? 'default' : 'outline'}
                  className={selectedSubject === 'geometry' 
                    ? 'bg-gradient-primary glow border-primary/30' 
                    : 'glass border-border/30 hover:border-primary/50'
                  }
                >
                  Geometry
                </Button>
                <Button
                  onClick={() => setSelectedSubject('biology')}
                  variant={selectedSubject === 'biology' ? 'default' : 'outline'}
                  className={selectedSubject === 'biology' 
                    ? 'bg-gradient-secondary glow border-secondary/30' 
                    : 'glass border-border/30 hover:border-secondary/50'
                  }
                >
                  Biology & Anatomy
                </Button>
                <Button
                  onClick={() => setSelectedSubject('history')}
                  variant={selectedSubject === 'history' ? 'default' : 'outline'}
                  className={selectedSubject === 'history' 
                    ? 'bg-gradient-card glow border-accent/30' 
                    : 'glass border-border/30 hover:border-accent/50'
                  }
                >
                  History & Architecture
                </Button>
              </div>
            </motion.div>
          </div>

          {renderSubjectViewer()}
        </section>
      )}
    </div>
  );
};

export default Index;