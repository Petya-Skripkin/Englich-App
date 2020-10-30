/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import "./index.css";
import { WORDS } from "./mock";

let i = Math.round(Math.random() * (WORDS.length - 1)),
  er1 = Math.round(Math.random() * (WORDS.length - 1)),
  er2 = Math.round(Math.random() * (WORDS.length - 1)),
  num = Define(i, er1, er2);

if (er1 === i) {
  er1--;
}

if (er2 === i) {
  er2++;
}

if (er1 === er2) {
  er2 = er1 != 0 && er1 !== 10 && er1 + 1 !== i ? er1++ : er1--;
}

function Define(i: number, er1: number, er2: number) {
  let rand = Math.floor(Math.random() * Math.floor(3));
  return rand === 0 ? i : rand === 1 ? er1 : er2;
}

const result = WORDS[num];

let app = document.getElementById("app");

app.innerHTML = `
<p class="label" id="label">${result.en}</p>
<div class="buttons-container">
  <button class="button" id="1">${WORDS[i].ru}</button>
  <button class="button" id="2">${WORDS[er1].ru}</button>
  <button class="button" id="3">${WORDS[er2].ru}</button>
</div>
`;


const buttonsContainer = app.querySelector(".buttons-container");

function ColorBuild() {
  setTimeout(() => window.close(), 300);
  return "green";
}

buttonsContainer.addEventListener("click", (e) => {
  const target: any = e.target;
  
  if (!target.classList.contains("button")) {
    return;
  }
  
  target.style.backgroundColor =
  target.textContent === result.ru ? ColorBuild() : "red";
});
