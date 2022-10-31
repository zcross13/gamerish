const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component{
    render(){
        const {name, _id, image, releaseDate, price, console} = this.props.game
        return(
            <Default title={`${name} Edit Page`} game={this.props.game} >
            <form action={`/games/${_id}?_method=PUT`} method='POST'>
                Name: <input type='text' name='name' defaultValue={name}></input><br/>
                Image: <input type='text' name='image' defaultValue={image}></input><br/>
                Release Date: <input type='text' name='releaseDate' defaultValue={releaseDate}></input><br/>
                Console: <input type='text' name='console' defaultValue={price}></input><br/>
                Price:<input type='text' name='price' defaultValue={console}></input><br/>
                    <input type='submit' value='Submit Changes'></input>
                    <input type='submit' value='DELETE'></input>
            </form>
            </Default>
        )
    }
}

module.exports = Edit 

