import Signin from "./ReactComponents/Authentication/Signin";
import Signup from "./ReactComponents/Authentication/Signup";
import Mainn from "./ReactComponents/Cards/Mainn";

import Nav from "./ReactComponents/NavBar/Nav";
import AutocompleteIntroduction from "./ReactComponents/NavBar/SearchBar";
import Drawer from "./ReactComponents/Adrower/Drawer"


function App() {

  return (
    <div className=" w-screen">
      <Nav />
      <div className=" min-h-screen w-screen bg-stone-300 flex justify-center flex-col gap-5 items-center pt-20">
        <AutocompleteIntroduction />
        <Mainn/>
        <Mainn/>
        <Mainn/>
        <Mainn/>
        <Mainn/>
        <Mainn/>
        <Mainn/>
        <Mainn/>
        
      </div>
         
    </div>

    

  );
}

export default App;
