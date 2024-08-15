
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Confetti from 'react-confetti'; 
import './styles.css'; 

const Home = () => {
    const [song, setSong] = React.useState('');
    const [response, setResponse] = React.useState('');
    const [showConfetti, setShowConfetti] = React.useState(false); 

    const handleInputChange = (event) => { 
        setSong(event.target.value);
    }; 

    const handleSubmit = (event) => { 
        event.preventDefault(); 
        setResponse(`Great choice! "${song}" is a fantastic song!`);
        setSong(''); 
        setShowConfetti(true); 
        setTimeout(() => setShowConfetti(false), 3000); 
    };

    return (
        <div id="app">
            {showConfetti && <Confetti />}
            <h1>What's your favorite song?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={song} 
                    onChange={handleInputChange} 
                    placeholder="Enter your favorite song" 
                    required 
                />
                <button type="submit" className="pretty-button">Submit</button>
            </form>
            {response && <p>{response}</p>} 
        </div>
    );
};

const About = () => (
    <div>
        <h2>About This App</h2>
        <p>This app allows you to share your favorite songs and celebrates your choices with confetti!</p>
    </div>
);

const App = () => {
    return (
        <Router>
             <nav className="nav">
                <Link to="/">
                    <button className="button">Home</button>
                </Link>
                <Link to="/about">
                    <button className="button">About</button>
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
