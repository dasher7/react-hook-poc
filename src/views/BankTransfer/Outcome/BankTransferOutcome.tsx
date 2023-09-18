import { useContext, useEffect } from 'react';
import OperationContext from '../../../context/OperationContext';
import useContacts from '../../../hooks/useContacts';
import { Operation } from '../../../ts/types/operation/operations';

export const BankTransferOutcome = () => {
  const operationContext = useContext(OperationContext);
  const contacts = useContacts({
    operation: operationContext.operationContext as Operation,
    enabled: true // note how we can disable the whole operation just by passing false to this parameter
  });

  useEffect(() => {
    /** we do create the contact just when we finish the operation, we can have full control till the end of the process
     * moreover, we can alert the user easily
     */
    contacts.createContact();
  }, []);

  return <div>Bonifico effettuato con successo</div>;
};
