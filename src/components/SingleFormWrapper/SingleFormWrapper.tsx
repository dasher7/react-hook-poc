import React, { PropsWithChildren, useEffect } from 'react';
import { SingleFormWrapperProps } from '../../ts/interfaces/SingleFormWrapper/SingleFormWrapper';

export const SingleFormWrapper: React.FC<PropsWithChildren<SingleFormWrapperProps>> = (
  props: PropsWithChildren<SingleFormWrapperProps>
) => {
  const { onCreateContact, data } = props;
  useEffect(() => {
    if (!data) return;
    onCreateContact(data);
  }, []);

  return <>{props.children}</>;
};
