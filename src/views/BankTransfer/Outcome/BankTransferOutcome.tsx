import { useEffect } from 'react';
import useContacts from '../../../hooks/useContacts';
import { OperationEnum } from '../../../ts/enums/operation/operation';
import { Operation } from '../../../ts/types/operation/operations';

const MOCKED_OPERATION: Operation = {
  type: OperationEnum.BANK_TRANSFER,
  uid: '324832948',
  body: {}
};

export const BankTransferOutcome = () => {
  const contacts = useContacts({ operation: MOCKED_OPERATION });

  useEffect(() => {
    contacts.createContact();
  }, []);

  return <div>Bonifico effettuato con successo</div>;
};
