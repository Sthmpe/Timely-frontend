import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

/**
 * Auth0ProviderWithNavigate Component
 * 
 * This component serves as a wrapper for the Auth0Provider from the Auth0 React SDK.
 * It provides authentication functionality with navigation support.
 * 
 * @param {Props} props - Props containing children (main content) to be wrapped within the Auth0Provider.
 * @returns {JSX.Element} Auth0ProviderWithNavigate component JSX
 */
const Auth0ProviderWithNavigate = ({children}: Props) => {
	const navigate = useNavigate();

	// Retrieve Auth0 configuration from environment variables
	const domain = import.meta.env.VITE_AUTH0_DOMAIN;
	const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
	const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
	const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

	// Validate Auth0 configuration
	if (!domain || !clientId || !redirectUri || !audience) {
		throw new Error("Unable to initialize authentication. Missing configuration parameters.");
	}

	/**
   * onRedirectCallback Function
   * 
   * Callback function to handle redirect after authentication.
   * It navigates to the "/auth-callback" route after successful authentication.
   */
	const onRedirectCallback = () => {
		navigate("/auth-callback");
	};

	return(
		<Auth0Provider 
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUri,
				audience,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithNavigate;