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

  /**
   * This is an inner function, nested in a React component. Just this, is incorrect.
   * React components should held the less logic they can.
   * Moreover, this function is not generic and must be implemented in every component that needs this logic.
   * Again, this function works with data held by the child and set backwards, this is the opposite way React works.
   * Nonetheless, the function it isn ot called here, but with a callback in a generic component.
   * You see the draw? A custom function, which works with data held by the child, implemented in a React component but called in a generic component.
   * @param data value that come from the child of this component, basically it represents the data held by the form
   * @returns return the object, manipulated and casted, to let the component who described and implemented the function call the API
   */
  const onCreateContact = (data: unknown) => {
    const dataBody = data as BankTransferBody;
    console.log(['BankTransferCompile - onCreateContact'], dataBody);
    console.log(
      '[CreateContact] Step 1 - we need to get data from the children and manipulate them'
    );
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
