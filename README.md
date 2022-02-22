# Welcome

A Front end mentor challenge on Rock Paper Scissors. You can view the project on Front End Mentor [here](https://www.frontendmentor.io/solutions/rock-paper-scissors-game-made-with-react-TJAwRWY_Z)

## General preview:

![Design preview for the Rock, Paper, Scissors coding challenge](./design/desktop-preview.jpg)

This challenge was built with React and Redux.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

**I have yet to implement local storage for storing state upon refresh... This is currently something I am learning about.**

### Built with

- Semantic HTML5 markup
- Desktop-first workflow
- React - JS library
- Redux - State Management
- SASS - For styles

### What I learned

1) Redux

This is the first project using Redux as a state management and it works! I am also developing a full stack e-commerce project which also implements Redux in a more complex way; you can see this in my personal portfolio or in my respositories in my GitHub.

2) CSS animations

Although I have encorporated CSS animations into various other projects of mine, I consider this project a test as it allowed me to animate numerous parts. For example, the hover over a button changed the box shadow, position and colour. This generally developed my understanding of CSS animations.

3) Improved code

I utilised various JS methods such as map, join and more to *clean* up my code. Take a look [here](https://github.com/norvalbv/rock-paper-scissors/blob/main/src/components/game/gamebuttons.jsx) of an example of code I am super proud of.


### What I struggled on

There are two key areas in which I struggled:

1) Positioning of the buttons in the correct position.

The hardest part for me was to position the five buttons in the 'hard mode' correctly. Do I position the elements with grid, with flex or none of the above? I ended up using flex to position each button centered and lined and then used transform: translate() to individually my positions of each element. Later, within media queries adjusted the postitioning of each element in new transform: translate() declarations.

2) Storing the state of the current score.

The function for obtaining results is within one function (as seen in the code) and therefore, the intial way for me to solve this was by useState. As the useState hook updates the VDom before it updates the actual Dom there is a delayed response in the results. Hence, when a player picks a button the results are stated from the previous game and not the current. The project works by passing props from the state and getting current data from a saved variable inside the function which makes the project work although this still can be considered 'spaghetti code' and needs to be refactored either using Redux or something else. I am currently looking at fixing/improving this.

### About Me

- [My Personal Portfolio](https://benjaminnorval.netlify.app/)
- [Front End Mentor - @norvalbv](https://www.frontendmentor.io/profile/norvalbv)
