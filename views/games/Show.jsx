const React = require('react')

class Show extends React.Component {
    render() {
        const game = this.props.game
        return (
            <div>
                <h1> Show Page</h1>
                {game.name} <br />
                {game.releaseDate} <br />
                {game.console} <br />
                <form action={`/games/${game._id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='DELETE' />
                </form>
            </div>

        )
    }
}

module.exports = Show 