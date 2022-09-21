import React from 'react';
import Developer from '../Componenets/Developer';
import About from '../Componenets/About';
import Projects from '../Componenets/Projects';
import ContactWithMe from '../Componenets/ContactWithMe';
import HelmetMeta from '../Componenets/Custom Meta/HelmetMeta';
// import Price from '../Componenets/Price';
const Home = () => {
    return (
        <div>
            <HelmetMeta pageName='Abdul Jabbar -Portfolio'></HelmetMeta>
            <Developer></Developer>
            <About ></About>
            <Projects limit={6}></Projects>
            {/* <Price></Price> */}
            <ContactWithMe></ContactWithMe>
        </div>
    );
};

export default Home;