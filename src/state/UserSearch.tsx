import {useState} from 'react';

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age:20},
    {name: 'Michael', age: 20}
]

const UserSearch: React.FC = () =>{
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    const onClick = () =>{
        const foundUser = users.find((user)=>{
            return user.name === name;
        })
        setUser(foundUser)
    }
    return( 
    <div>
        <h1>User Search</h1>
        <input value={name} onChange={event=>setName(event.target.value)}/>
        <button onClick={onClick}>Find User</button>
        <div>
            <h3>Name: {user && user.name}</h3>
            <h3>Age: {user && user.age}</h3>
        </div>
        </div>
    )
}

export default UserSearch;