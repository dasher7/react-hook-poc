/** Interface that describe the props of the component */
export interface FormWrapperProps {
      // Note that this function is a generic function that is called in a component that has no interested in calling it 
      onCreateContacts: (contact: unknown) => void;
      // date is the operation we are currently working on
      data: unknown;
}