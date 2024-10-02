import { useEffect, useState,useContext } from "react";
import { Link, NavLink } from 'react-router-dom'
import { UserContext }  from "../context/UserContext";


    const Profile = () => {
    const [userStat, setUserStat] = useState(null);
    const { user,setUser } = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if (token) {
            fetch("http://localhost:5000/api/auth/me", {
            headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then((response) => response.json())
        .then((data) => setUserStat(data));
        }
    }, []);

    const logout = () => {
        setUser(false);
        localStorage.removeItem("token");
    };
    
    return (
<div>
    {userStat ? (

        <div>
            <p>Email: {userStat.email}</p>

            <NavLink className="btn btn-danger" to="/" onClick={logout}>
                Cerrar Sesión
            </NavLink>
        </div>

    ) : (
<p>Por favor inicia sesion para poder ver esta ventana.</p>
    )}
    </div>
); 
};
export default Profile;