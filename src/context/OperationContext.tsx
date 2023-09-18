import { createContext } from 'react';
import { Operation } from '../ts/types/operation/operations';

interface OperationContext {
  operationContext: Partial<Operation>;
  setOperationContext: (operation: Operation) => void;
}

const OperationContext = createContext({
  operationContext: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOperationContext: (opration: Operation) => {}
});

export default OperationContext;
