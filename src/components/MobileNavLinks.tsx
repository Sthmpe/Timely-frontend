import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * MobileNavLinks Component
 * 
 * This component renders navigation links for the mobile navigation menu.
 * It typically includes links to user profile and logout functionality.
 * 
 * Components Used:
 * - Link: From react-router-dom for navigation functionality.
 * - Button: Custom UI component for clickable elements.
 * - useAuth0: Hook from Auth0 React SDK for authentication.
 * 
 * @returns {JSX.Element} MobileNavLinks component JSX
 */

const MobileNavLinks = () => {
	const { logout } = useAuth0();

	return(
		<>
			<Link
				to="/user-profile" 
				className="flex bg-white items-center font-bold hover:text-orange-500">
				User Profile
			</Link>
			<Button
				onClick={() => logout()} 
				className="felx items-center px-3 font-bold hover:bg-gray-500"
			>
				Log Out
			</Button>
		</>
	);
}

export default MobileNavLinks;