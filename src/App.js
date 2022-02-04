import AppBar from "./components/AppBar/AppBar";
import Navigation from "./components/Navigation/Navigation";
import UserMenu from "./components/UserMenu/UserMenu";


const navLinks = [
  {
    href: "/университет",
    text: "университет",
    icon: HiFire,
  },
  {
    href: "/факультет",
    text: "факультет",
    icon: HiPaperClip,
  },
];


function App() {
  return (
    <AppBar>
     {{
        navigation: <Navigation links={navLinks}/>,
        userMenu: <UserMenu/>, 
      }}
   
    </AppBar>
  );
}

export default App;
