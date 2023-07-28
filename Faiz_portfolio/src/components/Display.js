import "../App.css";
import Home from "./Home";
import About from "./About";
import Experience from "./Resume";
import Contact from "./Contact";

export default function Display() {
  return (
    <div className="pl-[25%]    w-screen back text-white  ">
      <Home />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
