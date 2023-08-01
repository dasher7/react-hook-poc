import { ContactType } from "../../enums/contacts/contacts"

export type Contact = {
      type: Required<ContactType>,
      name: Required<string>,
      surname?: Required<string>,
      email?: string,
      phone?: string,
      address?: string,
      city?: string,
}
