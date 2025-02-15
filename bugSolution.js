The solution involves using `Linking.addEventListener` to listen for URL changes instead of relying solely on `getInitialURL()`.  This approach ensures you catch the deep link regardless of timing issues.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = (event) => {
      setInitialUrl(event.url);
    };

    // Add event listener to detect URL changes
    const subscription = Linking.addEventListener('url', handleUrlChange);

    Linking.getInitialURL().then((url) => {
      setInitialUrl(url);
    });

    // Clean up the event listener
    return () => subscription.remove();
  }, []);

  if (initialUrl) {
    // Handle the deep link
    console.log('Initial URL:', initialUrl);
    // ... process the initialUrl
  }

  // ... rest of your app
}

 export default App; 
```