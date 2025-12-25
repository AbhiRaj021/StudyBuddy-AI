import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import AboutStudyBuddy from "./AboutStudyBuddy";
import AdvanceLearning from "./AdvanceLearning";
import AllFeature from "./AllFeature";
import EverythingNeed from "./EverythingNeed";
import FAQ from "./FAQ";
import FutureLearning from "./FutureLearning";
import InstantKnowledge from "./InstantKnowledge";
import LandingPage from "./LandingPage";
import LearningTool from "./LearningTool";
import SimplePricing from "./SimplePricing";
import StartLearning from "./Startlearning";

const HeroSection = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            <LandingPage />
            <div id="everythingNeed">
                <EverythingNeed />
            </div>
            <LearningTool />
            <InstantKnowledge />
            <AdvanceLearning />
            <AllFeature />
            <StartLearning />
            <div id="simplePricing">
                <SimplePricing />
            </div>
            <div id="faq">
                <FAQ />
            </div>
            <FutureLearning />
            <div id="aboutStudyBuddy">
                <AboutStudyBuddy />
            </div>
            <Footer />
        </div>
    )
}

export default HeroSection;