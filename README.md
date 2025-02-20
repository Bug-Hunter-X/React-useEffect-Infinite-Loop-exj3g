# React useEffect Infinite Loop

This example demonstrates a common error in React's `useEffect` hook: creating an infinite loop by including the state variable that is being updated within the dependency array.

The `bug.js` file contains the erroneous code. The `bugSolution.js` demonstrates the correct approach to avoid this error.

## Bug
The `useEffect` hook attempts to update `count` within the dependency array `[count]`.  This leads to an infinite loop as each state update triggers a re-render, which in turn re-runs the `useEffect` again, leading to another update, and so on.

## Solution
The solution uses the `useRef` hook to maintain a previous state value, allowing the state to update based on a reference value that does not trigger the infinite loop.