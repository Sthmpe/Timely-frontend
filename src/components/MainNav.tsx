import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

/**
 * MainNav Component
 * 
 * This component represents the main navigation menu of the website. 
 * It typically includes links to different sections or actions, such as logging in.
 * 
 * Components Used:
 * - useAuth0: Hook from Auth0 React SDK for authentication.
 * - Button: Custom UI component for clickable elements.
 * - UsernameMenu: Component for displaying username menu when authenticated.
 * 
 * @returns {JSX.Element} MainNav component JSX
 */

const MainNav = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return(
		<span className="flex space-x-2 items-center">
			{ isAuthenticated ? (
				<UsernameMenu />
			) : (
				<Button
					variant="ghost"
					className="font-bold hover:text-orange-500 hover:bg-white"
					onClick={async () => await loginWithRedirect()}
				>
					Log In
				</Button>
			)}
		</span>
	);
};

export default MainNav;