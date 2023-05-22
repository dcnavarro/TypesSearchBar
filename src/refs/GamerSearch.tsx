import {useState, useRef, useEffect} from 'react';

const gamers = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age:20},
    {name: 'Michael', age: 20}
]

const GamerSearch: React.FC = () =>{
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [gamer, setGamer] = useState<{name: string, age: number} | undefined>();

    useEffect(()=>{
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    },[])

    const onClick = () =>{
        const foundGamer = gamers.find((gamer)=>{
            return gamer.name === name;
        })
        setGamer(foundGamer)
    }
    return( 
    <div>
        <h1>Gamer Search</h1>
        <input ref= {inputRef} value={name} onChange={event=>setName(event.target.value)}/>
        <button onClick={onClick}>Find Gamer</button>
        <div>
            <h3>Name: {gamer && gamer.name}</h3>
            <h3>Age: {gamer && gamer.age}</h3>
        </div>
        </div>
    )
}

export default GamerSearch;
