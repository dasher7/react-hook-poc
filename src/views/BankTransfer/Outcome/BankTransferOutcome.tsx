import { useContext, useEffect } from 'react';
import OperationContext from '../../../context/OperationContext';
import useContacts from '../../../hooks/useContacts';
import { BankTransferBody } from '../../../ts/types/BankTransfer/BankTransfer';
import { Operation } from '../../../ts/types/operation/operations';

export const BankTransferOutcome = () => {
  const operationContext = useContext(OperationContext);
  const contacts = useContacts({
    operation: operationContext.operationContext as Operation<BankTransferBody>,
    enabled: true // note how we can disable the whole operation just by passing false to this parameter
  });

  useEffect(() => {
    createContact();
  }, []);

  const createContact = async () => {
    /** we do create the contact just when we finish the operation, we can have full control till the end of the process
     * moreover, we can alert the user easily
     */
    console.log('[useContact - step one and only]: call create contact with hook');
    const contact = await contacts.createContact();
    contact && console.log('[useContact - step enabled and alert]: contact created');
  };

  return <div>Bonifico effettuato con successo</div>;
};
