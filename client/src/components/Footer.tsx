const Footer = () => {
  return (
    <>
      <div
        className="mt-8 w-full bg-black px-8 flex flex-col space-y-4  md:space-y-0 md:justify-between text-sm py-8 
      items-start md:text-md md:px-[500px] md:flex-row"
      >
        <div className="text-white flex flex-col">
          <p>Featured Blogs</p>
          <p>Most Viewed</p>
          <p>Readers Choice</p>
        </div>
        <div className="text-white flex flex-col">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>
        <div className="text-white flex flex-col">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <p className="py-2 pb-2 text-center text-white bg-black">
        All rights reserved @Clevin-Bash blog 2023
      </p>
    </>
  );
};

export default Footer;
