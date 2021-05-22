import * as React from 'react';
import {Home} from './components/Home';
import {AuthProvider} from './components/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}