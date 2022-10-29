const React = require('react')

class Edit extends React.Component{
    render(){
        const {name, _id, releaseDate, price, console} = this.props.game
        return(
            <>
            <h1>{name} Edit Page</h1>
            <form action={`/games/${_id}?_method=PUT`} method='POST'>
                Name: <input type='text' name='name' defaultValue={name}></input><br/>
                Color: <input type='text' name='price' defaultValue={price}></input><br/>
                <input type='submit' value='Submit Changes'></input>
                <input type='submit' value='DELETE'></input>
            </form>
            </>
        )
    }
}

module.exports = Edit 

