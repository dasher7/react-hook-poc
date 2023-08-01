import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <AppRoutes />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
