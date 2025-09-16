import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Box, Heart, Building } from 'lucide-react';

interface Subject {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  features: string[];
  available: boolean;
}

const subjects: Subject[] = [
  {
    title: 'Geometry',
    description: 'Explore 3D shapes, spatial relationships, and geometric properties through interactive models.',
    icon: Box,
    color: 'primary',
    features: [
      'Interactive 3D shapes',
      'Angle calculations',
      'Volume & surface area',
      'Geometric proofs'
    ],
    available: true
  },
  {
    title: 'Biology & Anatomy',
    description: 'Visualize human anatomy, cell structures, and biological processes in stunning detail.',
    icon: Heart,
    color: 'secondary',
    features: [
      'Human anatomy models',
      'Cell structure exploration',
      'Organ system interactions',
      'Molecular visualization'
    ],
    available: false
  },
  {
    title: 'History & Architecture',
    description: 'Step inside ancient buildings, explore historical sites, and witness civilizations.',
    icon: Building,
    color: 'accent',
    features: [
      'Ancient monuments',
      'Historical reconstructions',
      'Cultural artifacts',
      'Timeline visualization'
    ],
    available: false
  }
];

export const SubjectCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {subjects.map((subject, index) => {
        const Icon = subject.icon;
        return (
          <motion.div
            key={subject.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className={`glass card-glow border-border/20 p-6 h-full ${
              subject.available ? 'hover:border-primary/50' : 'hover:border-muted/50'
            } transition-all duration-300`}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-gradient-${subject.color} shadow-glow`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {subject.title}
                    </h3>
                    {!subject.available && (
                      <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {subject.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Features:</h4>
                  <ul className="space-y-1">
                    {subject.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${subject.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={subject.available ? "default" : "outline"}
                  className={`w-full mt-4 ${
                    subject.available 
                      ? `bg-gradient-${subject.color} glow border-transparent hover:shadow-intense` 
                      : 'glass border-border/30 text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!subject.available}
                >
                  {subject.available ? 'Explore Now' : 'Coming Soon'}
                </Button>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};