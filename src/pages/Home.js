import Header from '../components/Header'
import React, { useState } from 'react'
import LoginForm from '../components/Login'

function Home() {
    const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem('loggedInUser'));

    const handleLogin = (username) => {
        // Armazena o nome do usuário na sessionStorage
        sessionStorage.setItem('loggedInUser', username);
        setLoggedInUser(username);
      };
    
    const handleLogout = () => {
        // Remove o nome do usuário da sessionStorage
        sessionStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
    }
    return(
        <div> 

        <Header/>
        {loggedInUser ? (
            window.location.href = '../../sobre.html'
            ) : (
            <LoginForm onLogin={handleLogin} />
            )
        }
        </div>

    )
}

export default Home