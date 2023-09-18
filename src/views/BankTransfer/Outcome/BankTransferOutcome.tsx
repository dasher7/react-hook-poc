import { useContext, useEffect } from 'react';
import OperationContext from '../../../context/OperationContext';
import useContacts from '../../../hooks/useContacts';
import { Operation } from '../../../ts/types/operation/operations';

export const BankTransferOutcome = () => {
  const operationContext = useContext(OperationContext);
  const contacts = useContacts({
    operation: operationContext.operationContext as Operation,
    enabled: true
  });

  useEffect(() => {
    contacts.createContact();
  }, []);

  return <div>Bonifico effettuato con successo</div>;
};
