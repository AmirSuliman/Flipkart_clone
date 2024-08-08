import { Button, Dialog, TextField } from '@mui/material';
import React, { useState, useContext, ChangeEvent } from 'react';
import { authenticateSignup } from '../../services/axiosInstance';
import { DataContext } from '../../context/DataProvider';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

interface AccountInitialValues {
  login: {
    view: string;
    heading: string;
    subHeading: string;
  };
  signup: {
    view: string;
    heading: string;
    subHeading: string;
  };
}

interface SignupData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  phone: string;
}

const accountInitialValues: AccountInitialValues = {
  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations',
  },
  signup: {
    view: 'signup',
    heading: 'Looks like you are new here',
    subHeading: 'Signup with your mobile number to get started',
  },
};

const initialSignupData: SignupData = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  phone: '',
};

interface LoginDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signupData, setSignupData] = useState(initialSignupData);

  const { setAccount } = useContext(DataContext) || {};

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async () => {
    try {
      const response = await authenticateSignup(signupData);

      if (response?.status === 200) {
        handleClose();
        setAccount?.(signupData.firstName);
        toast.success('Signup successful');
      } else {
        toast.error(response?.data?.message || 'Signup failed');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error?.response?.data?.message || 'An error occurred during signup'
        );
      } else {
        toast.error('An unknown error occurred during signup');
      }
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="h-[80svh] w-[90svh] flex">
        <div
          style={{
            background:
              '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat',
          }}
          className="!w-2/4 h-full p-8 text-white"
        >
          <h1 className="font-semibold uppercase">{account.heading}</h1>
          <p className="mt-8">{account.subHeading}</p>
        </div>
        {account.view === 'login' ? (
          <div className="flex flex-col p-8 gap-4">
            <TextField variant="standard" label="Enter Email/Phone number" />
            <TextField variant="standard" label="Enter Password" />
            <p className="text-xs text-[#878787]">
              By continuing you agree to Flipkart's terms and privacy policy.
            </p>
            <Button
              className="!bg-[#fb641b] !rounded-sm !h-[48px] !text-white"
              style={{ textTransform: 'none' }}
            >
              Login
            </Button>
            <p className="text-center">OR</p>
            <Button
              className="!bg-white !shadow-md !rounded-sm !h-[48px] !text-[#2874f0]"
              style={{ textTransform: 'none' }}
            >
              Request OTP
            </Button>
            <p
              onClick={() => {
                toggleAccount(accountInitialValues.signup);
              }}
              className="text-sm text-center font-semibold cursor-pointer text-[#2874f0]"
            >
              New to Flipkart? Create an account
            </p>
          </div>
        ) : (
          <div className="flex flex-col p-8 gap-4">
            <TextField
              variant="standard"
              name="firstName"
              onChange={onInputChange}
              label="Enter Firstname"
            />
            <TextField
              variant="standard"
              name="lastName"
              onChange={onInputChange}
              label="Enter Lastname"
            />
            <TextField
              variant="standard"
              name="userName"
              onChange={onInputChange}
              label="Enter Username"
            />
            <TextField
              variant="standard"
              name="email"
              onChange={onInputChange}
              label="Enter Email"
            />
            <TextField
              variant="standard"
              name="password"
              onChange={onInputChange}
              label="Enter Password"
            />
            <TextField
              variant="standard"
              name="phone"
              onChange={onInputChange}
              label="Enter Phone"
            />
            <Button
              onClick={handleSignupSubmit}
              className="!bg-[#fb641b] !rounded-sm !h-[48px] !text-white"
              style={{ textTransform: 'none' }}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default LoginDialog;
