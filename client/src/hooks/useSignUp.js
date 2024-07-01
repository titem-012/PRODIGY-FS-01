import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const useSignUp = () => {
    const navigator = useNavigate();
    const {setIsAuth} =useAuthContext();

    const signUp = async (data) => {

        const success = handleErrorInputs(data.Fullname, data.Username, data.Password, data.Dob, data.Gender);

        if (!success) return; 

        let response = await fetch("http://localhost:8000/api/auth/signUp/",{
            method: "post",
            headers: {
                "Content-Type": "application/json",
              },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        const result = await response.json()
        if(response.ok){
            localStorage.setItem('authUser', JSON.stringify(result))
            setIsAuth(true)
            navigator("/");
            toast.success("Sign Up Success");
        }else{
            navigator("/signUp");
            toast.error(result.message);
        }




    }
    return {signUp};
}


function handleErrorInputs(fullName, userName, password, Dob, gender) {
    if (!fullName || !userName || !password || !Dob || !gender) {
        toast.error('Please fill all fields');
        return false;
    }else if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false;
    }
    return true;
}
export default useSignUp;