# React useEffect setInterval Bug

This repository demonstrates a common error when using `setInterval` within React's `useEffect` hook.  The provided code incorrectly calls the `setCount` function directly within `setInterval`, which leads to unexpected behavior. The solution provides a corrected version using a closure to correctly update the state.

## Bug
The bug lies in how `setInterval` is used.  `setInterval` expects a function as its second argument which will be executed at each interval.  Instead, the original code calls the `setCount` function immediately and passes the result to `setInterval`. This will cause the counter to update only once, not repeatedly.

## Solution
The solution demonstrates the correct way to use `setInterval` within `useEffect`.  A closure is used to maintain access to the `setCount` function, ensuring that each interval correctly updates the state.