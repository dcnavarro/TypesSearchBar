// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
// import PlayerSearch from "./classes/PlayerSearch";
import GamerSearch from "./refs/GamerSearch";


 
// 2) Get a reference to the div with ID root
const el = document.getElementById("root");
 
// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);
 
// 4) Create a component
const App = () => {
  return (
    <div>
    <div>
      <GuestList />
      <br />
    </div> 
    <hr />
    <div>
        <UserSearch />
        <br />
    </div>
    <hr />
    <div>
        <EventComponent />
        <br />
    </div>
    <hr />
    {/* <div>
        <PlayerSearch />
        <br />
    </div>
    <hr /> */}
    <div>
        <GamerSearch />
        <br />
    </div>
    </div>
  );
};
 
// 5) Show the component on the screen
root.render(<App />);
