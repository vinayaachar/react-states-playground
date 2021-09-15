import { useState } from "react";

const users = [
  {name: 'Vinay', age: 33},
  {name: 'Anna', age: 33},
  {name: 'Meera', age: 1}
];

const UserSearch: React.FC = () => {

  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return <div>
    User Search
    <input value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick= {onClick}>Find User</button>
    <div>
      {user?.name}
      {user && user.age}
    </div>
  </div>
}


export default UserSearch;