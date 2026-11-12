import {
  Settings,
  FileText,
  Monitor,
  CheckCircle,
  Atom,
  Gauge,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ExpertiseCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export interface Experience {
  id: string;
  organization: string;
  designation: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  showcaseItems: string[];
  type: 'nuclear' | 'thermal';
}

export interface Technology {
  name: string;
  category: string;
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const expertiseData: ExpertiseCategory[] = [
  {
    icon: Settings,
    title: 'Control & Instrumentation Engineering',
    description: 'Core C&I system design and engineering for power generation projects.',
    items: [
      'C&I system design and engineering',
      'Control philosophy',
      'Instrumentation engineering',
      'Control logic and functional requirements',
      'Field instrumentation specifications',
      'Technical documentation',
    ],
  },
  {
    icon: FileText,
    title: 'Engineering Documentation',
    description: 'Comprehensive technical documentation for power plant C&I systems.',
    items: [
      'Piping and Instrumentation Diagrams (P&IDs)',
      'Wiring Diagrams',
      'Logic Diagrams',
      'Mimic Diagrams',
      'Terminal Lists',
      'Cable Schedules',
      'Design Manuals',
      'Instrument Datasheets',
    ],
  },
  {
    icon: Monitor,
    title: 'Distributed Control Systems',
    description: 'Experience with major DCS platforms for boiler and turbine control.',
    items: [
      'MaxDNA Control Systems',
      'Siemens TELEPERM ME DCS',
      'ABB PROCONTROL P13/42 DCS',
      'Boiler operation control and protection',
      'Turbine governing and protection systems',
      'Control logic troubleshooting',
    ],
  },
  {
    icon: CheckCircle,
    title: 'System Validation & Testing',
    description: 'Systematic validation and testing of computer-based control systems.',
    items: [
      'System Validation Plans',
      'Validation Procedures',
      'Computer-based system validation',
      'Control logic testing',
      'Functional testing',
      'Factory Acceptance Testing (FAT)',
    ],
  },
  {
    icon: Atom,
    title: 'Nuclear Power Engineering',
    description: 'C&I engineering for pressurised heavy water reactor nuclear power projects.',
    items: [
      '2 × 700 MWe PHWR project C&I engineering',
      'Preliminary Safety Analysis Reports',
      'Regulatory design approval processes',
      'Technical specifications',
      'Safety-related design documentation',
    ],
  },
  {
    icon: Gauge,
    title: 'Instrumentation & Monitoring',
    description: 'Field instrumentation and turbine supervisory systems.',
    items: [
      'Field instrumentation',
      'Turbine supervisory instrumentation',
      'Bently Nevada 3300 series',
      'Bently Nevada 3500 series',
      'Machine health monitoring',
      'Instrument calibration and troubleshooting',
    ],
  },
];

export const experienceData: Experience[] = [
  {
    id: '01',
    organization: 'Nuclear Power Corporation of India Limited (NPCIL)',
    designation: 'Technical Officer – Control & Instrumentation',
    duration: 'November 2010 – Present',
    location: 'Mumbai Metropolitan Region',
    description:
      'Working in the design and engineering of Control & Instrumentation systems for 2 × 700 MWe PHWR nuclear power projects.',
    responsibilities: [
      'Design and engineering of C&I systems for nuclear power projects.',
      'Preparation and review of P&IDs, wiring diagrams, logic diagrams, mimic diagrams, terminal lists, cable schedules, and design manuals.',
      'Preparation and review of System Validation Plans and procedures for computer-based systems.',
      'Testing and validation of C&I system control logic and functions.',
      'Preparation of technical specifications for C&I systems and field instrumentation.',
      'Preparation of Preliminary Safety Analysis Reports.',
      'Coordination of C&I design engineering approvals with regulatory authorities.',
      'Technical bid evaluation of C&I systems and field instrumentation packages.',
      'Review and approval of vendor datasheets and technical specifications.',
      'Design and engineering support for C&I systems in operating nuclear power plants.',
    ],
    highlights: [
      '2 × 700 MWe PHWR',
      'Nuclear Power Engineering',
      'System Validation',
      'Regulatory Approvals',
    ],
  },
  {
    id: '02',
    organization: 'Gujarat Industries Power Company Limited (GIPCL)',
    designation: 'Deputy Manager – Control & Instrumentation',
    duration: 'December 2001 – November 2010',
    location: 'Greater Surat Area, Gujarat',
    description:
      'Worked on the engineering, commissioning, maintenance, and troubleshooting of Control & Instrumentation systems for 2 × 125 MWe coal-based thermal power projects.',
    responsibilities: [
      'Engineering of C&I systems for coal-based thermal power projects.',
      'Review and approval of vendor and consultant engineering drawings.',
      'Engineering documentation including P&IDs, logic diagrams, loop drawings, hook-up drawings, cable schedules, and instrument schedules.',
      'Erection, commissioning, and FAT of MaxDNA control systems.',
      'Troubleshooting and implementation of boiler control and protection logic in Siemens TELEPERM ME DCS.',
      'Maintenance and troubleshooting of turbine governing and protection systems using ABB PROCONTROL P13/42 DCS.',
      'Maintenance and calibration of Bently Nevada 3300 and 3500 series turbine supervisory instrumentation systems.',
      'Procurement and vendor development for C&I systems.',
      'Technology upgrades of field instrumentation.',
      'Execution and management of annual maintenance contracts.',
      'Resource planning for daily operations, shutdowns, and project activities.',
    ],
    highlights: [
      '2 × 125 MWe Thermal Power',
      'DCS Commissioning',
      'Boiler & Turbine Control',
      'Instrumentation Maintenance',
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: '01',
    title: '700 MWe PHWR Nuclear Power Projects',
    organization: 'NPCIL',
    category: 'Nuclear Power / C&I Engineering',
    description:
      'Control & Instrumentation design and engineering involvement for 2 × 700 MWe Pressurised Heavy Water Reactor nuclear power projects.',
    showcaseItems: [
      'C&I design and engineering',
      'Engineering documentation',
      'System validation',
      'Control logic and functional testing',
      'Technical specifications',
      'Regulatory approval documentation',
    ],
    type: 'nuclear',
  },
  {
    id: '02',
    title: '125 MWe Coal-Based Thermal Power Projects',
    organization: 'GIPCL',
    category: 'Thermal Power / C&I Engineering',
    description:
      'Engineering and technical execution involvement for 2 × 125 MWe coal-based thermal power projects.',
    showcaseItems: [
      'MaxDNA control systems',
      'Siemens TELEPERM ME DCS',
      'ABB PROCONTROL P13/42',
      'Boiler control and protection',
      'Turbine governing and protection',
      'Commissioning and maintenance',
    ],
    type: 'thermal',
  },
];

export const technologiesData: Technology[] = [
  { name: 'MaxDNA DCS', category: 'Control Systems' },
  { name: 'Siemens TELEPERM ME', category: 'Control Systems' },
  { name: 'ABB PROCONTROL P13/42', category: 'Control Systems' },
  { name: 'Bently Nevada 3300 Series', category: 'Monitoring' },
  { name: 'Bently Nevada 3500 Series', category: 'Monitoring' },
  { name: 'Field Instrumentation', category: 'Instrumentation' },
  { name: 'Computer-Based Control Systems', category: 'Control Systems' },
  { name: 'Boiler Control Systems', category: 'Protection' },
  { name: 'Turbine Governing Systems', category: 'Protection' },
  { name: 'Turbine Supervisory Instrumentation', category: 'Monitoring' },
];

export const statsData = [
  { value: '24+', label: 'Years', sublabel: 'Professional Experience' },
  { value: '16', label: 'Years', sublabel: 'At NPCIL' },
  { value: '9', label: 'Years', sublabel: 'At GIPCL' },
  { value: '2', label: 'Sectors', sublabel: 'Thermal & Nuclear Power' },
];

