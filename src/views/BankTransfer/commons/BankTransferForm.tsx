import { Button, Grid, GridItem, Input, Select, Spinner, Text } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import OperationContext from '../../../context/OperationContext';
import { OperationEnum } from '../../../ts/enums/operation/operation';
import { FormData } from '../../../ts/interfaces/Form/Form';
import { BankTransferBody } from '../../../ts/types/BankTransfer/BankTransfer';
import { Operation } from '../../../ts/types/operation/operations';

export const BankTransferForm = (props: FormData) => {
  const { setData } = props;
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isLoading, isSubmitting }
  } = useForm<BankTransferBody>();

  const navigate = useNavigate();
  const operationContext = useContext(OperationContext);

  useEffect(() => {
    return () => {
      const formValues = getValues();
      setData(formValues);
      console.log(
        '[CreateContact] Step (-1) - we have to send the data back to the parent ... to send them again in another component',
        formValues
      );
    };
  }, []);

  /**
   * It is the main point of the whole implementation
   * In the first implementation, the one that does not used the hook, we are forced to map the contact anc call the api here
   * In the second implementation, the one that uses the hook, we just save the contact in the Context and we do not do any logic regarding the creation of the contact
   * @param data BankTransferBody, it comes from the form
   */
  const onSubmit = (data: BankTransferBody) => {
    console.log('[BankTransferForm - onSubmit]', data);
    console.log(
      '[CreateContact] Step 0 - we are getting values from the form and sending them to the main component'
    );
    const operation: Operation<BankTransferBody> = {
      body: data,
      type: OperationEnum.BANK_TRANSFER,
      uid: '78798'
    };
    console.log('[BankTransferForm - onSubmit]: setting up context', operation);
    operationContext.setOperationContext(operation);
    navigate('/bank-transfer-outcome');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap={4} autoFlow={'row'}>
        <GridItem colSpan={3}>
          <Text style={{ fontSize: 48, color: '#F5E3E0', fontWeight: 500, fontStyle: 'bold' }}>
            Bonifico
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Input
            placeholder="Beneficiario"
            _placeholder={{ opacity: 1, fontStyle: 'italic' }}
            variant="fill"
            htmlSize={50}
            color={'black'}
            {...register('beneficiary', { required: true })}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Select
            placeholder="Paese banca benificario"
            variant={'filled'}
            defaultValue={'IT'}
            color={'black'}
            {...register('country', { required: true })}>
            <option value="IT">Italia</option>
            <option value="USA">Stati uniti di America</option>
            <option value="UK">Gran Bretagna</option>
          </Select>
        </GridItem>
        <GridItem colSpan={2}>
          <Input
            placeholder="Coordinate bancarie"
            _placeholder={{ opacity: 1, fontStyle: 'italic' }}
            variant="fill"
            htmlSize={50}
            color={'black'}
            {...register('code', { required: true })}
          />
        </GridItem>
        <GridItem />
        <Input
          placeholder="Importo"
          _placeholder={{ opacity: 1, fontStyle: 'italic' }}
          variant="fill"
          htmlSize={25}
          color={'black'}
          {...register('amount', { required: true })}
        />
        <Select
          placeholder="Divisa"
          _placeholder={{ opacity: 1, fontStyle: 'italic' }}
          variant="fill"
          defaultValue={'EUR'}
          color={'black'}
          {...register('currency', { required: true })}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </Select>
        <GridItem />
        <GridItem colSpan={2}>
          <Input
            placeholder="Causlae"
            _placeholder={{ opacity: 1, fontStyle: 'italic' }}
            variant="fill"
            htmlSize={25}
            color={'black'}
            {...register('description', { required: true })}
          />
        </GridItem>
        <GridItem />
        <GridItem colStart={2}>
          {isLoading || isSubmitting ? (
            <Spinner />
          ) : (
            <Button type="submit" size={'lg'}>
              Invia
            </Button>
          )}
        </GridItem>
      </Grid>
    </form>
  );
};
