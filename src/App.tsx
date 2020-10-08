import React, { useState } from "react";
import "./App.css";
import "./index.css"
import Auth from "./components/Auth";
import Registration from "./components/Registration";
import Welcome from "./components/Welcome";
import { AuthorizationPages } from "./models/enums";
import { User } from "./models/User";

const users: User[] = [
  {
  id: 1,
  name: 'Rakhat',
  email: 'rakha.aubakirov@gmail.com',
  password: '1234',
  nameError: '',
  emailError: '', 
  passwordError: '',
  }


];

function App() {
  const [showedElement, setShowedElement] = useState(<></>);

  return (
    <div className="card">
      <div className="buttons">
        <button onClick={() => showPage(AuthorizationPages.Auth)}>Login</button>
        <button onClick={() => showPage(AuthorizationPages.Registration)}>Sign Up</button>
      </div>

      {showedElement}
    </div>
  );

  function showPage(page?: AuthorizationPages, user?: User) {
    switch (page) {
      case AuthorizationPages.Auth:
        setShowedElement(
          (prevElement) =>
            (prevElement = <Auth login={authenticateUser} cancel={showPage} />)
        );
        break;

      case AuthorizationPages.Registration:
        setShowedElement(
          (prevElement) =>
            (prevElement = (
              <Registration registrate={createNewUser} cancel={showPage} />
            ))
        );
        break;

      case AuthorizationPages.Welcome:
        if (user) {
          setShowedElement((prevElement) => (prevElement = <Welcome user={user} />));
        }
        break;

      default:
        setShowedElement((prevElement) => (prevElement = <></>));
        break;
    }
  }

  function createNewUser(user: User) {
    if (users && user) {
      const checker = users.find((u) => u.email === user.email);
      if (checker) {
        return;
      }
      
      user.id = users.length + 1;
      users.push(user);
      showPage(AuthorizationPages.Auth);
    }
  }

  function authenticateUser(user: User) {
    if (users && user) {
      console.log(user);
      const checker = users.find(
        (u) => u.email === user.email && u.password === user.password
      );
      if (checker) {
        showPage(AuthorizationPages.Welcome,checker);
      }
    }
  }
}

export default App;
