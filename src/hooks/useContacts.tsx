import useContactsClient from '../client/useContactClient';
import { ContactType } from '../ts/enums/contacts/contacts';
import { OperationEnum } from '../ts/enums/operation/operation';
import { Contact } from '../ts/types/contacts/contacts';
import { Operation } from '../ts/types/operation/operations';

export interface ContactsMethods {
  /** function that allows to create a contact and saved it to the database, we can call everywhere we want */
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

  /**
   * From the value that comes from the compiled form, it creates a contact
   * @returns the mapped contact object created from the provided data operations
   */
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

  /**
   * the one and only point in the app that is able to create a contact
   * Having this function here separate the logic from all the components and encapsulate it in just one point
   * @returns the list of contacts created or the created contact object
   */
  const createContact = async (): Promise<Contact | null> => {
    if (enabled === false) return null;
    const contact = createBodyPayload();
    return await useContactClient.create(contact);
  };

  return { createContact };
}
