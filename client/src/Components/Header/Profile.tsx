import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { MdPowerSettingsNew } from 'react-icons/md';

const Profile = ({
  account,
  setAccount,
}: {
  account: string;
  setAccount: (value: string) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Changed state to hold element

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget); //
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setAccount('');
  };
  return (
    <>
      <div className="ml-8" onClick={handleClick}>
        <p>{account}</p>
      </div>
      <Menu
        className="mt-2"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* Changed anchorEl to the actual element */}
        <MenuItem
          className="flex gap-4"
          onClick={() => {
            handleClose();
            logOut();
          }}
        >
          {' '}
          <MdPowerSettingsNew color="#0000fa" size={20} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
