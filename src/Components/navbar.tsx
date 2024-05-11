import React, {useState} from 'react'
const Navbar = () => {
  const [dark, darkSet] = useState(false)
  let element = "true"
  function darkmode () {
    darkSet(!dark)
  }
  useEffect(() => {
    if (dark == false) {
      element = "true"
    } else {
      element = "false"
    }
  }, [dark])
  
  
  return (
    <div className="bg-black text-white">
      <span className="">Portofolio</span>
      <div className="flex justify-between gap-4">
        <div className="hover:text-white">Home</div>
        <div className="hover:text-white">Contact</div>
        <div className="hover:text-white">Blog</div>
      </div>
    </div>
  );
};
export default Navbar;