import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');

if (container === null) {
    throw new Error('Root container missing in Index.HTML.')
}

const root = ReactDOM.createRoot(container);
root.render(
    <React.Fragment>
        <Router>
            <App />
        </Router>
    </React.Fragment>
)