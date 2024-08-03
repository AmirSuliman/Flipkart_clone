import { Button } from '@mui/material';
import { FaCartShopping } from 'react-icons/fa6';

const CustomButtons = () => {
  return (
    <div className="flex items-center gap-10 text-sm">
      <Button
        variant="contained"
        className="!shadow-none !rounded-sm !font-semibold !bg-white !text-[#2874f0] !px-10 !py-1 !ml-[5%]"
        style={{ textTransform: 'none' }}
      >
        Login
      </Button>
      <p className="whitespace-pre">Become a Seller</p>
      <p>More</p>
      <div className="flex items-center gap-2">
        <FaCartShopping />
        Cart
      </div>
    </div>
  );
};
export default CustomButtons;
