import Footer from "../../components/Footer/Footer";
import ProgressGauges from "../../components/ProgressGauges/ProgressGauges";

import "./Homepage.scss"

const Homepage = () => {
    return (
        <>
        <main className="home__container">
            <h1>Greatness Starts Here</h1>
            <ProgressGauges />
        </main>
        <Footer />
        </>
    );
};

export default Homepage;