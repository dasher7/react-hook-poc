import useContactsClient from '../client/useContactClient';
import { ContactType } from '../ts/enums/contacts/contacts';
import { OperationEnum } from '../ts/enums/operation/operation';
import { Contact } from '../ts/types/contacts/contacts';
import { Operation } from '../ts/types/operation/operations';

export interface ContactsMethods {
  createContact: () => Promise<Contact | null>;
}

export interface ContactsProps {
  operation: Operation;
  enabled: boolean;
}

useContacts.defaultProps = {
  enabled: true
};

/**
 * This hook can be used to store and then create a list of contacts.
 * You can hook this function to a component, or to a parent component.
 * We will use this into view components that own a form and the checkboxes to create a list of contacts.
 * @returns the list of contacts that were created
 */
export default function useContacts(props: ContactsProps): ContactsMethods {
  const { operation, enabled } = props;
  const useContactClient = useContactsClient();

  const createBodyPayload = (): Contact => {
    let contact;
    switch (operation.type) {
      case OperationEnum.BANK_TRANSFER:
        contact = {
          type: ContactType.PERSON,
          name: 'Andrea',
          surname: 'Bredice'
        };
        break;
    }
    return contact as Contact;
  };

  const createContact = async (): Promise<Contact | null> => {
    if (enabled === false) return null;
    const contact = createBodyPayload();
    return await useContactClient.create(contact);
  };

  return { createContact };
}
