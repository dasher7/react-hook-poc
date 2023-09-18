import { Contact } from '../ts/types/contacts/contacts';

export interface ContactsMethods {
  /** API that create a contact, it needs the contact object based on Contact type */
  create: (data: Contact) => Promise<Contact | null>;
}

export default function useContactsClient(): ContactsMethods {
  /**
   * Implementation of the API that creates a contact
   * @param data Contact type
   * @returns the created contact object or null if no contact object is created
   */
  const create = async (data: Contact): Promise<Contact | null> => {
    if (!data) return null;
    return new Promise<Contact>((resolve) => {
      if (resolve) return resolve(data);
    });
  };

  return { create };
}
