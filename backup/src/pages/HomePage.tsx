import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Departments from '../components/Departments';
import Research from '../components/Research';
import ResearchLabs from '../components/ResearchLabs';
import FacultySpotlight from '../components/FacultySpotlight';
import Infrastructure from '../components/Infrastructure';
import CampusLife from '../components/CampusLife';
import StudentAchievements from '../components/StudentAchievements';
import AlumniSuccess from '../components/AlumniSuccess';
import Placements from '../components/Placements';
import NewsAnnouncements from '../components/NewsAnnouncements';
import UpcomingEvents from '../components/UpcomingEvents';
import Admissions from '../components/Admissions';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <About />
                <Departments />
                <Research />
                <ResearchLabs />
                <FacultySpotlight />
                <Infrastructure />
                <CampusLife />
                <StudentAchievements />
                <AlumniSuccess />
                <Placements />
                <NewsAnnouncements />
                <UpcomingEvents />
                <Admissions />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
