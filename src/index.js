import React from "react";
import ReactDOM from "react-dom";
import Test from './components/test';
import { StateProvider } from './store.js';

const App = () => (
    <StateProvider>
        <Test message='WORLD' />,
    </StateProvider>
)

const currentNode = document.getElementById("root")
ReactDOM.render(<App/>, currentNode);

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }