import React, { PropsWithChildren, useEffect } from 'react';
import { SingleFormWrapperProps } from '../../ts/interfaces/SingleFormWrapper/SingleFormWrapper';

export const SingleFormWrapper: React.FC<PropsWithChildren<SingleFormWrapperProps>> = (
  props: PropsWithChildren<SingleFormWrapperProps>
) => {
  const { onCreateContact, data } = props;
  useEffect(() => {
    if (!data) return;
    console.log('SingleFormWrapper - useEffect', data);
    console.log(
      '[CreateContact] Step 3 - we are finally came to the spot in which we truly call the function to create the contact'
    );
    onCreateContact(data);
  }, []);

  return <>{props.children}</>;
};
