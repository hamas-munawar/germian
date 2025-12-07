const Footer = () => {
  return (
    <footer className="flex h-8 w-full border-t border-dashed border-primary relative before:content-[''] before:absolute before:top-0 before:left-4.5 before:-translate-y-[50%] before:w-3 before:h-3 before:bg-primary after:content-[''] after:absolute after:top-0 after:right-4.5 after:-translate-y-[50%] after:w-3 after:h-3 after:bg-primary">
      <div className="w-6  border-r border-dashed border-primary"></div>
      <div className="grow"></div>
      <div className="w-6  border-l border-dashed border-primary"></div>
    </footer>
  );
};

export default Footer;
