import AppBar from "./components/AppBar";

const navLinks = [
  {
    href: "/университет",
    text: "университет",
  },
  {
    href: "/факультет",
    text: "факультет",
  },
];


function App() {
  return <AppBar links={navLinks}/>;
}

export default App;
