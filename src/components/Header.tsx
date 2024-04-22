import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

/**
 * Header Component
 * 
 * This component represents the header of the website. It contains a navigation bar with a logo,
 * mobile navigation menu, and main navigation menu. The logo is a link to the homepage ("/").
 * 
 * Components Used:
 * - Link: From react-router-dom for navigation functionality.
 * - MobileNav: Component for mobile navigation menu.
 * - MainNav: Component for main navigation menu.
 * 
 * @returns {JSX.Element} Header component JSX
 */


const Header = () => {
  return(
	<div className="border-b-2 border-b-orange-500 py-6">
		<div className="container mx-auto flex justify-between items-center">
			<Link 
				to="/"
				className="text-3xl font-bold tracking-tight text-orange-500"
			>
				TimeLY.com
			</Link>
			<div className="md:hidden">
				<MobileNav />
			</div>
			<div className="hidden md:block">
				<MainNav />
			</div>
		</div>
	</div>
  );
};

export default Header;