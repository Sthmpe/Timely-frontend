import Layout from "@/layouts/layout";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader2 } from "lucide-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return(
			<Layout>
				<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				<span className="font-bold text-xl">Loading...</span>
			</Layout>
		);
	}

	if (isAuthenticated) {
		return(
			<Outlet />
		);
	}

	return(
		<Navigate to="/" replace />
	);
};

export default ProtectedRoute;