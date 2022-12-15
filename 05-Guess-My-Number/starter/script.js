'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.guess').textContent);
// console.log(document.querySelector('.check').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// 此处为简化代码，为了替代不必要的重复打字。 可以选择把某些重复内容设置为一个function。比如此处替换的 。message

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 以上内容非必须。 为一种简化代码的方式。可以用于替换下面代码中的。message重复内容

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.heighscore').textContent = highscore;
    }

    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too heigh!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }

    // 简化后的代码？？
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too heigh!' : 'To low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
});
