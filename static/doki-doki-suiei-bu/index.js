// const Game = require('./engine').default
import Game from './engine.js'
import jsyaml from './js-yaml.mjs'

const saveData = {
  sceneId: '$start'
};
const gameRoot = document.getElementById('game-root');
const instance = new Game(gameRoot);

// fetch('./gameData.yaml').then(res => {
//   if(res.ok) {
//     res.text().then(data => {
//       const gameData = jsyaml.load(data)
//       instance.load(gameData);
//       instance.render()
//     })
//   } else {
//     throw new Error(`res is not ok: status ${res.status}`)
//   }
// })

fetch('./data.dump').then(res => {
  if(res.ok) {
    res.text().then(data => {
      const gameData = jsyaml.load(decodeURI(window.atob(data)))
      instance.load(gameData);
      instance.render()
    })
  } else {
    throw new Error(`res is not ok: status ${res.status}`)
  }
})