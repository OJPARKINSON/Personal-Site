import Header from "../components/header";
import Section from "../components/section";
import About from "../components/about";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";

const Home = () => (
    <div className="container">
        <Head>
            <title>Oliver Parkinson</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400&display=swap"
                rel="stylesheet"
            />
        </Head>

        <Header/>

        <About/>

        <div className="Spacer"/>

        <Portfolio/>

        <div className="Spacer"/>

        <Section label="Contact" border={false}>
            <Contact/>
        </Section>
    </div>
);

export default Home;
