import { CheckCircleIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <List spacing={3}>
      <ListItem onClick={() => navigate('bank-transfer-compile')}>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Bonifico
      </ListItem>
    </List>
  );
};
