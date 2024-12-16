```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The second argument is not a function.
    setInterval(setCount(count + 1), 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```