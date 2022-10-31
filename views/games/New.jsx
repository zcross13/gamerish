const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component{
    render(){
        return (
            <Default title = 'Submit your game here'>
                <nav>
                    <a href='/games/new'>Create a New Game</a>
                </nav>
                <form action='/games' method='POST'>
                    Name: <input name='name'></input><br/>
                    Picture: <input name='image'></input><br/>
                    releaseDate: <input name='releaseDate'></input><br/>
                    price: <input name='price'></input>
                    console:<input name='console'></input><br/>
                    <input type='submit' vaule='Submit Game'></input>
                </form>
            </Default>
        )
    }
}

module.exports = New 