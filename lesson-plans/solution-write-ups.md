# Solution Write-Ups

The best problem solvers don't start from nothing, they've seen many similar problems before and have learned to adapt other people's code to fit their programs.

This week take your first step to becoming an expert problem solver by studying the many ways people before you have solved common problems.
Learn also to write unit tests and to design your own solutions to coding challenges.

## Before Class

- Fork [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
  - Read through the README, this will be your main exercise for the week.
  - Follow the instructions in **Getting Started** to locally set up your repository.
  - Practice running the `example-quarter-of-the-year/sandbox.test.js` file with Study Lenses in the browser (and in VSCode if you want). (instructions in **Getting Started**)
  - Create an account on [Edabit](https://edabit.com) and take a look through the [Add up the Numbers from a Single Number](https://edabit.com/challenge/4gzDuDkompAqujpRi) exercise.
- Read through the steps of Function Design and study the example:
  - [readme: function design](../2-write/1-function-design/README.md)
  - [example: repeat-a-string](../2-write/1-function-design/examples/repeat-a-string)

## During Class

In class you will practice writing tests and analyzing solutions using a challenge from [Edabit](https://edabit.com/):

- [Add up the Numbers from a Single Number](https://edabit.com/challenge/4gzDuDkompAqujpRi)

### Before Break

Description, Syntax, Test Cases and Use Cases.

- All together:
  - look through the main introduction to this module. What is Behavior, Strategy and Implementation?
  - go over the README from [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
  - read through the first 4 sections in the example from [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
- In small groups:
  - Complete the first 4 sections of the writeup for `Add up the Numbers ...`
  - You can use the most popular solution solution by **\_sir** to write your tests:
  ```js
  function addUp(num) {
    return (num * (num + 1)) / 2;
  }
  ```

- All together:
  - read through the rest of the example in [solution-write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups)
- In small groups:

  - practice writing up 2-3 solutions to the [Add up the Numbers from a Single Number](https://edabit.com/challenge/4gzDuDkompAqujpRi) challenge (be sure to test them all!)
  - here's a few suggestions to study:

    ```js
    // Gabriel
    function addUp(num) {
      let sum = 0;
      for (let i = 1; i <= num; i++) {
        sum += i;
      }
      return sum;
    }

    // 범두
    function addUp(num) {
      var a = 0;
      for (var i = num; i > 0; i--) {
        a += i;
      }
      return a;
    }

    // doodledob
    function addUp(num) {
      x = 0;
      while (num >= 0) {
        x += num;
        num--;
      }
      return x;
    }

    // _sir
    function addUp(num) {
      return (num * (num + 1)) / 2;
    }
    ```

---

### After Break

Practice writing unit tests for functions.

- **All together**: Introduce the syntax for unit testing, and go through the example [repeat-a-string](../2-write/1-function-design/examples/repeat-a-string).
- **In small groups**: Write some tests!

Practice some [function design exercises](../2-write/1-function-design/exercises/)

- **All Together**: What is function design? What are the steps? Why is this important?
- **In small groups**: Write some functions!

## After Class

1. Take your time this week to explore other people's code. In the past modules you've studied only a small part of what JS, now you're in the wild! You'll come across all sorts of JS features and new coding styles.

Complete at least 3 [solution write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups) (that means 3 different coding challenges!) No need to rush ahead. Take your time studying solutions at your level. It's more helpful to study a variety of solutions than to study a few hard ones.

And, work your way through Chapter 1 in the [`behavior-strategy-implementation` repository](https://github.com/HackYourFutureBelgium/behavior-strategy-implementation), and continue studying your favorite tutorial(s).

Study together! Working in small groups and taking turns to predict and explain
what is happening with the code is a nice way to spend a few hours. Teaching is
a great way to learn.

2. Start writing your own solutions to coding challenges from an empty page. Practice using documentation and tests to guide your understanding of the problem, and practice remixing solutions you studied last week to solve new problems.

And, study examples & exercises from Chapter 2 in the [`behavior-strategy-implementation` repository](https://github.com/HackYourFutureBelgium/behavior-strategy-implementation), and continue studying your favorite tutorial(s).

Continue your [solution write-ups](https://github.com/HackYourFutureBelgium/solution-write-ups). No need to rush ahead! Take your time studying solutions at your level. It's more helpful to study a variety of solutions than to study a few hard ones.

Study together! Working in small groups and taking turns to predict and explain
what is happening with the code is a nice way to spend a few hours. Teaching is
a great way to learn.