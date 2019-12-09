// #1. Counting Sheep

// function countSheep(num) {
//   if (num === 0) {
//     return console.log('All sheep jumped over the fence');
//   } else {
//     console.log(num + 'Another sheep jumps over the fence');
//     return countSheep(num - 1);
//   }
// }
// countSheep(3);



// 2. Power Calculator

// function powerCalculator(num, exp) {
//   if (exp < 0) {
//     return 'exponent must be >= 0';
//   } else if (exp === 0) {
//     return 1;
//   } else {
//     return num * powerCalculator(num, exp - 1);
//   }
// }
// powerCalculator(10,2)



// 3. Reverse String

// function reverseString(string) {
//   if (!string.length) {
//     return '';
//   }
//   const newString = string.slice(string.length - 1);
//   return newString + reverseString(string.slice(0, -1));
// }
// reverseString('foo');



// 4. nth Triangular Number

// function triangle(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + triangle(n - 1);
// }
// triangle();



// 5. String Splitter

// function stringSplitter(str, seperator) {
//   let determinate = str.indexOf(seperator);
//   if (determinate === -1) {
//     return [str];
//   } else
//     return [
//       str.slice(0, determinate),
//       ...stringSplitter(str.slice(determinate + 1), seperator),
//     ];
// }




// 6. Fibonacci

// function fibonacciCalculator(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return fibonacciCalculator(num - 1) + fibonacciCalculator(num - 2);
// }



// 7. Factorial

// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }




// 8. Find a way out of the maze

// let mySmallMaze = [
//   [' ', ' ', ' '],
//   [' ', '*', ' '],
//   [' ', ' ', 'e']
// ];

// let maze = [
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

function exit(maze, position = [0, 0], moves = '') {
  let currentPosition = maze[position[0]][position[1]];
  let limits = [maze[0].length, maze.length];
  if (
    position[0] < limits[1] ||
    position[0] > limits[1] ||
    position[1] < limits[0] ||
    position[1] > limits[0] ||
    currentPosition === '*'
  )
    return;
  if (currentPosition === 'e') {
    return moves;
  } else {
    maze.forEach((y, yIndex) => {
      y.forEach((x, xIndex) => {
        maze[x][y] = '*';
        exit(maze, [xIndex, yIndex], '');
      });
    });
  }
}