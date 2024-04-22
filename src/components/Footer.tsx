/**
 * Footer Component
 * 
 * This component represents the footer section of the website.
 * It contains the name/logo of the website and links to "Privacy Policy", and "Terms of Service".
 * The links are arranged horizontally on larger screens and vertically on smaller screens.
 * 
 * @returns {JSX.Element} Footer component JSX
 */
const Footer = () => {
  return(
	<div className="bg-orange-500 py-10">
		<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
			<span className="text-3xl text-white font-bold tracking-tight">
				TimeLY.com
			</span>
			<span className="text-white font-bold tracking-tighter flex gap-4">
				<span>Privacy Policy</span>
				<span>Terms Of Service</span>
			</span>
		</div>
	</div>
  );
};

export default Footer;