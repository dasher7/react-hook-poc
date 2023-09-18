import { useState } from 'react';
import './App.css';
import OperationContext from './context/OperationContext';
import { AppRoutes } from './routes/AppRoutes';
import { Operation } from './ts/types/operation/operations';

function App() {
  const [operationContext, setOperationContext] = useState<Partial<Operation>>({});

  return (
    <div className="App">
      <header className="App-header">
        <OperationContext.Provider
          value={{
            operationContext: operationContext,
            setOperationContext: setOperationContext
          }}>
          <AppRoutes />
        </OperationContext.Provider>
      </header>
    </div>
  );
}

export default App;
