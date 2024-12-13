import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import filmListImg from './images/logo/filmlist.png';
import addEditImg from './images/logo/addedit.png';
import scoreImg from './images/logo/score.png';
import logo from './images/logo/1.svg';

function App() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="App">
            {/* Barre de menu */}
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Film List Logo" />
                </div>
                <div className="navbar-item">
                    <h2
                        tabIndex="0"
                        onClick={() => handleNavigation('/film-list')}
                        aria-label="Go to Film List"
                    >
                        Film List
                    </h2>
                    <h2
                        tabIndex="0"
                        onClick={() => handleNavigation('/film-modify')}
                        aria-label="Go to Add/Edit"
                    >
                        Add/Edit
                    </h2>
                    <h2
                        tabIndex="0"
                        onClick={() => handleNavigation('/film-score')}
                        aria-label="Go to Film Score"
                    >
                        Score
                    </h2>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="grid-container">
                <div className="grid-item" onClick={() => handleNavigation('/film-list')}>
                    <img src={filmListImg} alt="Navigate to Film List" />
                </div>
                <div className="grid-item" onClick={() => handleNavigation('/film-modify')}>
                    <img src={addEditImg} alt="Navigate to Add/Edit" />
                </div>
                <div className="grid-item" onClick={() => handleNavigation('/film-score')}>
                    <img src={scoreImg} alt="Navigate to Film Score" />
                </div>
            </div>
        </div>
    );
}

export default App;
