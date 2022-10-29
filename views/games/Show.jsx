const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
    render() {
        const game = this.props.game
        return (
            <Default title={`${game.name} Show Page`}>
                {game.name} <br />
                {game.releaseDate} <br />
                {game.console} <br />
                <form action={`/games/${game._id}?_method=DELETE`} method='POST'>
                    <input type='submit' value='DELETE' />
                </form>
            </Default>
        )
    }
}

module.exports = Show 