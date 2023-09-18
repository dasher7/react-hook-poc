import { Contact } from '../ts/types/contacts/contacts';

export interface ContactsMethods {
  create: (data: Contact) => Promise<Contact | null>;
}

export default function useContactsClient(): ContactsMethods {
  const create = async (data: Contact): Promise<Contact | null> => {
    if (!data) return null;
    return new Promise<Contact>((resolve) => {
      if (resolve) return resolve(data);
    });
  };

  return { create };
}
