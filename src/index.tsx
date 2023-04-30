import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return <h1>My React and TypeScript App!</h1>;
}

function greet(name: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}!`);
    }, 1000);
  });
}

async function print() {
  const response = await greet('John Doe');
  console.log(response);
}

print();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
