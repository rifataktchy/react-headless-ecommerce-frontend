const Footer = () => {
    return (
        <footer className="conatiner flex-col flex text-black p-10 mx-auto pl-10">
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="font-bold text-xl pb-1">Gadget Heaven</h1>
            <p>Leading the way in cutting-edge technology and innovation.</p>
          </div>
  <div className="flex flex-row w-11/12 mx-auto pl-60 pt-2">
  <nav className="flex flex-col w-1/3 ">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col w-1/3">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="flex flex-col w-1/3">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

  </div>
</footer>
    );
};

export default Footer;