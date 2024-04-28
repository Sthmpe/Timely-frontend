import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import { Loader2 } from "lucide-react";

const UserProfilePage = () => {
	const {currentUser, isLoading: isGetLoading} = useGetMyUser();
	const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

	if (isGetLoading) {
		return(
			<>
				<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				<span className="font-bold text-xl">Loading...</span>
			</>
		);
	}

	if (!currentUser) {
		return(
			<span className="font-bold text-xl">Unable to load user profile</span>
		);
	}
	
	return(
		<UserProfileForm 
			currentUser={currentUser}
			onSave={updateUser} 
			isLoading={isUpdateLoading} 
		/>
	);
}

export default UserProfilePage;