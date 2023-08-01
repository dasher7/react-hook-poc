import { Button, Grid, GridItem, Input, Select, Spinner, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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

  useEffect(() => {
    const formValues = getValues();
    setData(formValues);
  }, []);

  const onSubmit = (data: BankTransferBody) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap={4} autoFlow={'row'}>
        <GridItem colSpan={3}>
          <Text>Bonifico</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Input
            placeholder="Beneficiary"
            _placeholder={{ opacity: 1, fontStyle: 'italic' }}
            variant="fill"
            htmlSize={50}
            {...register('beneficiary', { required: true })}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Select
            placeholder="Paese banca benificario"
            variant={'filled'}
            defaultValue={'Italia'}
            {...register('country', { required: true })}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Input
            placeholder="Coordinate bancarie"
            _placeholder={{ opacity: 1, fontStyle: 'italic' }}
            variant="fill"
            htmlSize={50}
            {...register('code', { required: true })}
          />
        </GridItem>
        <GridItem />
        <Input
          placeholder="Importo"
          _placeholder={{ opacity: 1, fontStyle: 'italic' }}
          variant="fill"
          htmlSize={25}
          {...register('amount', { required: true })}
        />
        <Select
          placeholder="Divisa"
          _placeholder={{ opacity: 1, fontStyle: 'italic' }}
          variant="fill"
          defaultValue={'EUR'}
          {...register('currency', { required: true })}
        />
        <GridItem />
        <GridItem colSpan={2}>
          <Input
            placeholder="Causlae"
            _placeholder={{ opacity: 1, fontStyle: 'italic' }}
            variant="fill"
            htmlSize={25}
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
