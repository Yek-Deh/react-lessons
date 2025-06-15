import './App.css';
import LoanForm from './LoanForm';
import { UserContext } from "./contexts/UserContext";

function App() {
  return (
     <UserContext.Provider
      value={{ userName: "Ali", email: "Ali@gmail.com", name: "Ali" }}
    >
      <div className="App" style={{ marginTop: "250px" ,backgroundColor:"#222"}}>
        <LoanForm />
      </div>
    </UserContext.Provider>
  );
}

export default App;
