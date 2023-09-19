import React, { PropsWithChildren, useEffect } from 'react';
import { SingleFormWrapperProps } from '../../ts/interfaces/SingleFormWrapper/SingleFormWrapper';

export const SingleFormWrapper: React.FC<PropsWithChildren<SingleFormWrapperProps>> = (
  props: PropsWithChildren<SingleFormWrapperProps>
) => {
  const { onCreateContact, data } = props;

  /**
   * This won't never log, how in the world a component that will be destroy could run a callback based on a data that are held
   * by the child and passed to this component from the father of the child and through another wrapper component?
   * You must let this whole component held a Form ref to retrieve data held by who knows what component and then do logic based on them
   * What does this mean? loose control on the data and over engineering the code
   */
  useEffect(() => {
    if (!data) return;
    console.log(
      '[CreateContact] Step 3 - we are finally came to the spot in which we truly call the function to create the contact'
    );
    return () => onCreateContact(data);
  }, [data]);

  return <>{props.children}</>;
};
