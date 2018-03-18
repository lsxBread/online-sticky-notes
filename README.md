----
## Use React, Redux, Immutable to code Snake Game.
----
Snake is a classic game that has always been implemented in various languange, such as Java, python. During past month, I was studying JS and React from the beginning and thus planned to achieve this game by using React + Redux. I found two similar repo github:

*	I learned from its UI design [Tetris](https://github.com/chvin/react-tetris) 
* 	I learned from its logical design about how to achieve the animation about moving snake [Snake](https://github.com/caohuilin/Snake_React) 
 
Open [https://lsxbread.github.io/react_snake/](https://lsxbread.github.io/react_snake/) to play!

The Game framework is the use of [React](https://facebook.github.io/react/) + [Redux](http://redux.js.org/), together with [Immutable.js](https://facebook.github.io/immutable-js/).

----
### Interface preview
![Interface review](https://media.giphy.com/media/dgB8Ns5j96wKdbuVFT/giphy.gif)

The game has a smooth experience and user can ajust the moving speed by pressing UP/DOWN button before starting the game.

### Responsive
![Responsive](https://media.giphy.com/media/xk8qLzzOLjAhAAYEdJ/giphy.gif)

This project is availble both in PC and mobile platform. Using mouse in PC and use touch as input in mobile.

### Data persistence
![Data persistence](https://media.giphy.com/media/9G59BfiXFbbi1H1Qv5/giphy.gif)

To avoid the unexpected break of game, such as power outage, web page refresh/close, etc. The state of game is stored in `localStorage` to make sure you can continue playing in any cases

### Redux state ([Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension))

I use the React-Redux to manage all the game state during game play, and these info are saved to localstorage whenever they are updated

### Performance improvement

To avoid any unexpected Component Render, I use the combination of Immutable.js and shouldComponentUpdate() to improve the performance of game, expecially when running in mobile.

### Next step

I did not implement the sound effects yet, but only leave a button there which indicates the music switching. I will do it later by using WAA.

## Development
### Install
```
npm install
```
### Run
```
npm start
```
The browser will go to [http://localhost:3000/](http://localhost:3000/)

### Build
```
npm run build
```

Will build the application in the build folder.