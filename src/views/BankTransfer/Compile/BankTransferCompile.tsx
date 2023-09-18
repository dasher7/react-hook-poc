import { useEffect, useState } from 'react';
import { FormWrapper } from '../../../components/FormWrapper/FormWrapper';
import { ContactType } from '../../../ts/enums/contacts/contacts';
import { BankTransferBody } from '../../../ts/types/BankTransfer/BankTransfer';
import { Contact } from '../../../ts/types/contacts/contacts';
import { BankTransferForm } from '../commons/BankTransferForm';

export default function BankTransferCompile() {
  const [data, setData] = useState<BankTransferBody | undefined>(undefined);

  useEffect(() => {
    console.log(['BankTransferCompile - useEffect'], data);
  }, [data]);

  const onCreateContact = (data: unknown) => {
    const dataBody = data as BankTransferBody;
    return {
      name: dataBody.beneficiary.split(' ')[0],
      surname: dataBody.beneficiary.split(' ')[0],
      type: ContactType.PERSON
    } as Contact;
  };

  return (
    <FormWrapper onCreateContacts={onCreateContact} data={data}>
      <BankTransferForm setData={setData} />
    </FormWrapper>
  );
}
