import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const navigator = useNavigate()
    const {setIsAuth} =useAuthContext();

    const login = async (data) => {

        const success = handleErrorInputs(data.Username, data.Password);

        if (!success) return; 

        let response = await fetch("http://localhost:8000/api/auth/login/",{
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
            navigator("/")
            toast.success("Login Success");
        }else{
            toast.error(JSON.stringify(result));
        }




    }

    return {login};
}
function handleErrorInputs(userName, password) {
    if (!userName || !password) {
        toast.error('Please fill all fields');
        return false;
    }
    return true;
}

export default useLogin;