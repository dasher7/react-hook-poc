import { createContext } from 'react';
import { Operation } from '../ts/types/operation/operations';

interface OperationContext {
  /** the operation held in the context, it is the current operation we are working on */
  operationContext: Partial<Operation>;
  /** callback to set and update the operation */
  setOperationContext: (operation: Operation) => void;
}

/**
 * Context used to shared the current operation across the whole application
 * In this case emulate a redux component or a database connection
 */
const OperationContext = createContext({
  operationContext: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOperationContext: (opration: Operation) => {}
});

export default OperationContext;
