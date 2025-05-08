import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
         <p className="my-5 text-sm" style={{ color: '#808080' }}>
         Whether you’re in the gym training for Strong Viking or facing a challenging obstacle during the run, sometimes you need that extra boost of encouragement to keep going.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Class Schedule</p>
          <p>Privacy Policy</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> 123 Evo Gym Way, Fitness City, FC 98765 </p>
          <p>(+212)777146546</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
