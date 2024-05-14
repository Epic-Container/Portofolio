import React from 'react'
interface NavbarProps {
  mode: string,
  text: string
}
const Navbar:React.FC<NavbarProps> = ({mode, text}) => {
  return (
    <div className={"flex justify-between gap-4 bg-[#343434] opacity-80 m-2 p-3 rounded-lg text-white w-[92%] fixed border-2 border-gray-700 " + mode}>
      <div className="font-bold opacity-100">
        Portofolio
      </div>
      <button className='opacity-100'>
        {text}
      </button>
    </div>
  );
};
export default Navbar;