```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: trying to set count inside the useEffect's dependency
    setCount(count + 1); 
  }, [count]);

  return <div>Count: {count}</div>;
}
```