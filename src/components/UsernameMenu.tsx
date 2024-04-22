import { CircleUserRound } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

/**
 * UsernameMenu Component
 * 
 * This component represents the username menu in the header, displaying the user's email address and providing options like user profile and logout.
 * 
 * Libraries/Components Used:
 * - lucide-react: Library for SVG icons.
 * - DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger: Custom UI components for dropdown menu functionality.
 * - useAuth0: Hook from Auth0 React SDK for authentication.
 * - react-router-dom: Library for routing in React applications.
 * - Separator: Custom UI component for a visual separator.
 * - Button: Custom UI component for clickable elements.
 * 
 * @returns {JSX.Element} UsernameMenu component JSX
 */

const UsernameMenu = () => {
	const { user, logout } = useAuth0(); 

	return(
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
				<CircleUserRound className="text-orange-500" />
				{user?.email}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link 
						to="/user-profile" 
						className="font-bold hover:text-orange-500"
					>
						User Profile
					</Link>
				</DropdownMenuItem>
				<Separator />
				<DropdownMenuItem>
					<Button
						onClick={() => logout()} 
						className="flex flex-1 font-bold bg-orange-500"
					>
						Log Out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UsernameMenu;