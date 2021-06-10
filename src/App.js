import React from 'react';
import './styles/main.scss';
import {Link, BrowserRouter} from 'react-router-dom';
import Layout from './core/Layout';

const App = () => {
    return(
        <Layout>
                <div className='container__hero'>
                    <h1>Follow Me There is a instruction sharing platform. You can easily create a set of instructions and share it.</h1>
                </div>
                <main className='main'>
                    <div className='main__codeinput'>
                        <form>
                            <input type='text' placeholder='Someone gave me a code' />
                            <button type='submit'>GO</button>
                        </form>
                    </div>
                    <div className='main__others'>
                        <div className='main__others__link'>
                            <Link to='/'>How It Works?</Link>
                        </div>
                        <div className='main__others__link'>
                            <Link to='/'>Create One</Link>
                        </div>
                    </div>
                </main>
        </Layout>
    )
}

export default App;