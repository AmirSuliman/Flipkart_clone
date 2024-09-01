import { Button } from '@mui/material';
import { FaCartShopping } from 'react-icons/fa6';
import LoginDialog from '../Login/LoginDialog';
import { useState, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext) || {};

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="flex items-center gap-10 text-sm">
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          onClick={() => {
            handleOpen();
          }}
          variant="contained"
          className="!shadow-none !rounded-sm !font-semibold !bg-white !text-[#2874f0] !px-10 !py-1 !ml-[5%]"
          style={{ textTransform: 'none' }}
        >
          Login
        </Button>
      )}
      <p className="whitespace-pre">Become a Seller</p>
      <p>More</p>
      <div className="flex items-center gap-2">
        <FaCartShopping />
        Cart
      </div>
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
};
export default CustomButtons;
