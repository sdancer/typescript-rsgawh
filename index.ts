// Import stylesheets
import './style.css';

import * as gleam_wasm from './gl';
gleam_wasm.init(true);
gleam_wasm.compile('something');

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
