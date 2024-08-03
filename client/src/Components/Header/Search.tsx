import { InputBase } from '@mui/material';
import { IoIosSearch } from 'react-icons/io';

const Search = () => {
  return (
    <div className="bg-white w-[38%] rounded-sm ml-4 flex items-center justify-between">
      <InputBase
        placeholder="Search products, brands and more"
        className="w-full ml-4"
      />
      <IoIosSearch className="text-blue-500 mr-4" size={30} />
    </div>
  );
};
export default Search;
