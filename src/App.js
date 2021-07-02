import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Layout from './core/Layout';
import './styles/home.css';

const App = () => {

    const [code, setCode] = useState('');

    return(
        <Layout>
            <div className='container'>
                <header className="container-hero">
                    <h2>Folow me There helps you to create set of instructions and share it easily.</h2>
                </header>

                <main className="container-main">
                    <div className="havecode">
                        <label htmlFor="code">I have a code</label>
                        <input placeholder="Enter the code here" type='text' id="code" value={code} onChange={(e) => setCode(e.target.value)} />
                    </div>
                    <h3>OR</h3>
                    <div className="createone">
                        <Link to='createnew'><button>Create New</button></Link>
                    </div>
                </main>
                
            </div>
        </Layout>

    )
}

export default App;