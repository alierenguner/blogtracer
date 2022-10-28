import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeContext from '@/store/context';

const container = document.getElementById('root');

if (container === null) {
    throw new Error('Root container missing in Index.HTML.')
}

const root = ReactDOM.createRoot(container);
root.render(
    <React.Fragment>
        <Provider store={storeContext}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.Fragment>
)