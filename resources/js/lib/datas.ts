import { DramaIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { FaFootballBall } from 'react-icons/fa';
import { IoMdTrophy } from 'react-icons/io';
import { MdPsychology } from 'react-icons/md';

export interface ExtraCurricularObj {
    activity: string;
    description: string;
    icon: IconType;
}

export const paths: { path: `/${string}`; label: string }[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Intakes', path: '/#intakes' },
    { label: 'Courses', path: '/#courses' },
    { label: 'Governance', path: '/governance' },
    { label: 'Tenders', path: '/tenders' },
];
export const governancePaths = [
    { path: '/governance#administration', name: 'Administration' },
    { path: '/governance#board', name: 'Board of governors' },
    { path: '/governance#management', name: 'Management' },
];

export const values = [
    { label: 'Our vision', value: 'To be a Leading Institution in Education and  Training' },
    { label: 'Our Motto', value: 'Training for the future' },
    {
        label: 'Our Mission',
        value: 'To effectively implement teacher training curriculum in a stimulative environment in order to produce innovative and efficient educators',
    },
];

export const aboutUs = {
    image: '/temp/schoolGate.png',
    article:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rjlk reaklj\n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rjlk reaklj\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rjlk reaklj\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n' +
        '\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rjlk reaklj\n' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rjlk reaklj',
};

export const courses: CourseObj[] = [
    {
        title: 'Diploma in Early Childhood Teacher Education (DECTE)',
        description:
            'Designed to equip learners with the knowledge, skills, and competencies needed to teach and care for young children. The program focuses on child development, pedagogy, curriculum implementation, and classroom management for early learners. Graduates of DECTE are prepared to work as preschool teachers, caregivers, or educational facilitators in early childhood education settings',
        image: '/temp/decte.png',
    },
    {
        title: 'Diploma in Primary Teacher Education(DPTE)',
        description:
            'Professional course designed to prepare aspiring teachers for primary school education. It equips learners with pedagogical skills, subject content knowledge, and classroom management techniques to effectively teach young learners. The program focuses on competency-based education, child development, and modern teaching methodologies, ensuring graduates are well-prepared to foster a strong learning foundation in primary schools.',
        image: '/temp/dpte.png',
    },
];

export const extraCurricular: ExtraCurricularObj[] = [
    {
        activity: 'Sports & games',
        description: 'Indulge in any 8 different games including basketball, hockey, golf',
        icon: FaFootballBall,
    },
    {
        activity: 'Drama & acting',
        description: 'Indulge in any 8 different games including basketball, hockey, golf',
        icon: DramaIcon,
    },
    {
        activity: 'Competitions',
        description: 'Indulge in any 8 different games including basketball, hockey, golf',
        icon: IoMdTrophy,
    },
    {
        activity: 'Psychology counselors',
        description: 'Indulge in any 8 different games including basketball, hockey, golf',
        icon: MdPsychology,
    },
];

const april = new Date();
april.setDate(17);
april.setMonth(3);

const marchOpen = new Date();
marchOpen.setUTCDate(17);
marchOpen.setMonth(2);

const marchClose = new Date();
marchClose.setUTCDate(31);
marchClose.setMonth(2);

const janOpen = new Date();
janOpen.setMonth(0);
janOpen.setDate(17);

const janClose = new Date(janOpen);
janClose.setDate(31);

export const intakes: IntakeObj[] = [
    {
        open: marchOpen,
        closes: marchClose,
    },
    {
        open: april,
    },
    {
        open: janOpen,
        closes: janClose,
    },
];

export const newsAndAnnouncements: NewsAnnouncementObj[] = [
    {
        id: 1,
        title: 'Uhuru attends tree planting',
        article:
            'Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl.',
        image: '/temp/uhuru.jpg',
        createdAt: april.toDateString(),
    },
    {
        id: 2,
        title: 'Uhuru attends tree planting',
        article:
            'Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl.',
        image: '/temp/uhuru.jpg',
        createdAt: april.toDateString(),
    },
    {
        id: 3,
        title: 'Uhuru attends tree planting',
        article:
            'Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl.',
        image: '/temp/uhuru.jpg',
        createdAt: april.toDateString(),
    },
    {
        id: 4,
        title: 'Uhuru attends tree planting',
        article:
            'Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl.',
        image: '/temp/uhuru.jpg',
        createdAt: april.toDateString(),
    },
    {
        id: 5,
        title: 'Uhuru attends tree planting',
        article:
            'Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl.',
        image: '/temp/uhuru.jpg',
        createdAt: april.toDateString(),
    },
    {
        id: 6,
        title: 'Uhuru attends tree planting',
        article:
            'Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl Lorem ipsum dolor sit amet, consectetur fjlk kj a adipiscing elit, sed do eiusmod tempor fjlk ncm, adipiscing elit, sed do eiusmod tempor fjlk ncm, incididunt ut labore et dolore magna fjalk a4kl.',
        image: '/temp/uhuru.jpg',
        createdAt: april.toDateString(),
    },
];

export const governanceData: ManageObj[] = [
    {
        id: 1,
        name: "Kamau Njoroge",
        category: ["admin", "board"],
        title: "Principal",
    },
    {
        id: 2,
        name: "Achieng Otieno",
        category: ["admin"],
        title: "Deputy Principal - Administration",
    },
    {
        id: 3,
        name: "Wanjiku Mwangi",
        category: ["admin"],
        title: "Registrar",
    },
    {
        id: 4,
        name: "Kipchumba Lagat",
        category: ["board"],
        title: "Board Chairperson",
    },
    {
        id: 5,
        name: "Fatuma Hassan",
        category: ["board"],
        title: "Board Treasurer",
    },
    {
        id: 6,
        name: "Muthoni Kimani",
        category: ["management"],
        title: "Dean of Students",
    },
    {
        id: 7,
        name: "Ochieng Were",
        category: ["management"],
        title: "Head of Curriculum",
    },
    {
        id: 8,
        name: "Njeri Wambui",
        category: ["management"],
        title: "Finance Manager",
    },
]
