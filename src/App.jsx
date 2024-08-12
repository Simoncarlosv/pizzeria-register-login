import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
    return (
        <div>
            <Navbar />
            {/* <Home /> */}
            {/* <Register /> */}
            <Login />
            <Footer />
        </div>
    );
};

export default App;