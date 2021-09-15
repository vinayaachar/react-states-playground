import ReactDOM  from "react-dom";
import GuestList from './state/GuestList';
import UserSearch from "./refs/UserSearch";
const App= () => {
  return <div>
    <h1>Hi there!</h1>
    <GuestList />
    <UserSearch />
  </div>
};

ReactDOM.render(<App />, document.querySelector('#root'));