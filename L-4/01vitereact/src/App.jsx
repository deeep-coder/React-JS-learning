
import Chai from "/.Chai"


function App() { //this is called methode
    
  const username = "chai aur code"
// {} is called evaluated expression means we are not write JS , we write JS outcome which is evauated

  return (

    // In Jsx we can export one element only, so we can export more than one elements at one time using "fragment"<> </>
    <>
    <h1>Hii Deep welcome to {username} </h1>  
    <Chai/> 
    <p>Hello Deep</p> 
    </>
   
  )
}

export default App
