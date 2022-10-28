const React = require('react')

class New extends React.Component{
    render(){
        return (
            <div>
                <h1>New Game Page</h1>
                <nav>
                    <a href='/games/new'>Create a New Game</a>
                </nav>
                <form action='/games' method='POST'>
                    Name: <input name='name'></input><br/>
                    Picture: <input name='image'></input><br/>
                    releaseDate: <input name='releaseDate'></input><br/>
                    price: <input name='price'></input>
                    console:<input name='console'></input><br/>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

module.exports = New 