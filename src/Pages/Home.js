import React from 'react';
import Developer from '../Componenets/Developer';
import About from '../Componenets/About';
import Projects from '../Componenets/Projects';
import ContactWithMe from '../Componenets/ContactWithMe';

const Home = () => {
    return (
        <div>
            <Developer></Developer>
            <About ></About>
            <Projects limit={6}></Projects>
            {/* <Price></Price> */}
            <ContactWithMe></ContactWithMe>
        </div>
    );
};

export default Home;