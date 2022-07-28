
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import Alert from "./components/alert";
// import Practise2 from "./components/Practise2";

 
function App() {

  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);
  
  let showAlert = (message,type)=>{
    setalert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  let toogleFunction = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert('Dark Mode Started', 'success')
      document.title = 'My Notes | Dark Mode';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode  Started', 'success')
      document.title = 'My Notes | Light  Mode';
    }
  }


  return (
    <>
      <Navbar title='My Notes' mode={mode} toggleBtn={toogleFunction}/>
      {/* <Practise2/> */}
      <Alert alert={alert}/>
      <div className="container my-4" >
        <Form heading="My Notes" mode={mode} alert={showAlert}/>
      </div>
    </>
  );
}

export default App;
