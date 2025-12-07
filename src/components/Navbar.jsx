import Button from "./Button";

const navButtons = ["Home", "Shop the Store", "Our Story", "Chat to Us"];

const Navbar = () => {
  return (
    <header className="flex w-full border-b border-dashed border-primary relative before:content-[''] before:absolute before:bottom-0 before:left-4.5 before:translate-y-[50%] before:w-3 before:h-3 before:bg-primary after:content-[''] after:absolute after:bottom-0 after:right-4.5 after:translate-y-[50%] after:w-3 after:h-3 after:bg-primary">
      <div className="w-6  border-r border-dashed border-primary"></div>
      <div className="py-4 grow px-4 flex justify-between items-center">
        <span className="font-medium font-ballinger text-primary text-2xl">
          germian
        </span>
        <div className="hidden md:flex gap-x-1">
          {navButtons.map((btnText) => (
            <Button key={btnText}>{btnText}</Button>
          ))}
        </div>
        <div></div>
      </div>
      <div className="w-6  border-l border-dashed border-primary"></div>
    </header>
  );
};

export default Navbar;
