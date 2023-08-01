import { PropsWithChildren } from 'react';
import { FormWrapperProps } from '../../ts/interfaces/FormWrapper/FormWrapper';
import { SingleFormWrapper } from '../SingleFormWrapper/SingleFormWrapper';

export const FormWrapper: React.FC<PropsWithChildren<FormWrapperProps>> = (
  props: PropsWithChildren<FormWrapperProps>
) => {
  const { data } = props;

  return (
    <SingleFormWrapper data={data} onCreateContact={props.onCreateContacts}>
      {props.children}
    </SingleFormWrapper>
  );
};
