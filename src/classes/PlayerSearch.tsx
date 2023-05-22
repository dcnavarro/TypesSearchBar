import {Component} from 'react';

interface Player{
    name: string;
    age: number;
}

interface PlayerSearchProps {
    players: Player[]
}

interface PlayerSearchState{
    name: string;
    player: Player | undefined;
}

class PlayerSearch extends Component<PlayerSearchProps>{
state: PlayerSearchState = {
    name: '',
    player: undefined
};

onClick = () => {
        const foundPlayer = this.props.players.find((player)=>{
            return player.name === this.state.name;
        })
        this.setState({player: foundPlayer})    
}

render(){
    const {name, player} = this.state
    return(
        <div>
        <h1>Player Search</h1>
        <input value={name} onChange={event=>this.setState({name: event.target.value})}/>
        <button onClick={this.onClick}>Find Player</button>
        <div>
            <h3>Name: {player && player.name}</h3>
            <h3>Age: {player && player.age}</h3>
        </div>
        </div>
       
    )
}

}

export default PlayerSearch;