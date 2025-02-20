```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    // Correct logic using useRef to track previous value
    setCount(prevCount.current + 1);
    prevCount.current = count;  // update the previous count
  }, []);

  return <div>Count: {count}</div>;
}
```