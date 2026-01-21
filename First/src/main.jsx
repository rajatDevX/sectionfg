// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import { createRoot } from 'react-dom/client'

// const myElement = <h1>I Love JSX!</h1>;

// createRoot(document.getElementById('root')).render(
//   myElement
// );
// import { createRoot } from 'react-dom/client'

// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

// createRoot(document.getElementById('root')).render(
//   myElement
// );
// import { createRoot } from 'react-dom/client'

// const myElement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// );

// createRoot(document.getElementById('root')).render(
//   myElement
// );
// import { createRoot } from 'react-dom/client'

// const myElement = (
//   <>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </>
// );

// createRoot(document.getElementById('root')).render(
//   myElement
// );
// import { createRoot } from 'react-dom/client'
// function Car() {
//   const brand = "Ford";
//   const model = "Mustang";
//   return (
//     <>
//       <h2>My Car</h2>
//       <p>It is a {brand} {model}.</p>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Car />
// )
import { createRoot } from 'react-dom/client'
import React from 'react';
import Car from './Vehicle.jsx';

// function Car(props) {
//   return (
//     <h2>I am a {props.name} Car!</h2>
//   );
// }

createRoot(document.getElementById('root')).render(

  <Car name="Ford" /> 
);