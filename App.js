// App.js

import React, { lazy, Suspense } from 'react';

// Lazy-loaded components
const LazyComponent1 = lazy(() => import('./components/LazyComponent1'));
const LazyComponent2 = lazy(() => import('./components/LazyComponent2'));

function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent1 />
        <LazyComponent2 />
      </Suspense>
    </div>
  );
}

export default App;
