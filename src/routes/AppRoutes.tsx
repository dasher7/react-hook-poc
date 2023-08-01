import { Route, Routes } from 'react-router-dom';
import BankTransferCompile from '../views/BankTransfer/Compile/BankTransferCompile';
import { Home } from '../views/Home/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bank-transfer-compile" element={<BankTransferCompile />} />
    </Routes>
  );
};
