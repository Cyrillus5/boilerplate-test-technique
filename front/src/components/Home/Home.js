import logo from '../../logo.svg';
import './Home.css';

function Home() {
    return (
        <div>
            <header className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="Home-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>  
        </div>        
    )
}

export default Home;