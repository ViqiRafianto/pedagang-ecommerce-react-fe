/* eslint-disable react/prop-types */
function DropdownMenu({ children }) {
  return (
    <div
      className={
        "opacity-100  z-[100]  transform ease-in-out duration-300  absolute  w-0 h-0  mt-[-10px] animate-fade-in-drop"
      }
    >
      <div
        className={
          "bg-zinc-100 shadow-[#c2c2c2] relative text-black -left-64 top-[5px] w-[400px]  h-[400px] block whitespace-nowrap  shadow-md  "
        }
      >
        {children}
      </div>
    </div>
  );
}

export default DropdownMenu;
