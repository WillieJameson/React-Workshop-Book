import React,{useState} from 'react'


const AuthContext = React.createContext();


const AuthService = (props) =>{
  const [User, setUser] = useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      console.log("Time to set the user");
      setUser({
        addresses: [
          {
            postalCode: "M1 2WX",
            city: "Manchester",
            streetName: "Baird Street",
            houseNumber: "2A",
            main: true
          },
          {
            postalCode: "B11 4DG",
            city: "Birmingham",
            streetName: "Stratford Road",
            houseNumber: "753",
            main: false
          }
        ]
      });
    }, 2000);
  }, []);

  return(
    <AuthContext.Provider value = {User}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthService}