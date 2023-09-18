/** Note how this interface is a duplicate of FormWrapperProps, this is just a signal of how the implementation without the hook is wrong */
export interface SingleFormWrapperProps {
      onCreateContact: (contact: unknown) => void;
      data: unknown
}