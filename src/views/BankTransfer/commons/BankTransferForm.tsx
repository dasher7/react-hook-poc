import { Button, Grid, GridItem, Input, Select, Spinner, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../../../ts/interfaces/Form/Form';
import { BankTransferBody } from '../../../ts/types/BankTransfer/BankTransfer';

export const BankTransferForm = (props: FormData) => {
  const { setData } = props;
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isLoading, isSubmitting }
  } = useForm<BankTransferBody>();

  const navigate = useNavigate();

  useEffect(() => {
    const formValues = getValues();
    setData(formValues);
    console.log('[BankTransferForm - useEffect]', formValues);
  }, [isSubmitting]);

  const onSubmit = (data: BankTransferBody) => {
    console.log('[BankTransferForm - onSubmit]', data);
    console.log(
      '[CreateContact] Step 0 - we are getting values from the form and sending them to the main component'
    );
    navigate('/bank-transfer-outcome');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap={4} autoFlow={'row'}>
        <GridItem colSpan={3}>
          <Text>Bonifico</Text>
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
