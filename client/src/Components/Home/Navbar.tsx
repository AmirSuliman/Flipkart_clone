import { navData } from '../../constants/data';

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center justify-between px-[8%] py-12 bg-white">
      {navData.map((data, index) => (
        <div key={index} className="text-center">
          <img src={data.url} alt="nav img" className="w-16" />
          <p className="font-semibold text-sm">{data.text}</p>
        </div>
      ))}
    </div>
  );
};
export default Navbar;
