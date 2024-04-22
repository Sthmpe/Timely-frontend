import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

/**
 * AppRoutes Component
 * 
 * This component defines the routes for the application using React Router.
 * It sets up routes for different pages of the application and renders corresponding components.
 * 
 * Components Used:
 * - Routes: Component from react-router-dom for defining route configurations.
 * - Route: Component for defining individual routes.
 * - Navigate: Component for programmatic navigation.
 * - Layout: Component for the overall layout structure of the application.
 * 
 * @returns {JSX.Element} AppRoutes component JSX
 */

const AppRoutes = () => {
	return(
		<Routes>
			<Route 
				path="/" 
				element={
					<Layout showHero>
						<Homepage />
					</Layout>
				} 
			/>

			<Route 
				path="/auth-callback" 
				element={
					<AuthCallbackPage />
				}
			/>

			<Route element={<ProtectedRoute />}>
				<Route 
					path="/user-profile" 
					element={
						<Layout>
							<UserProfilePage />
						</Layout>
					} 
				/>
			</Route>

			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
