const React = require('react')
const Default = require('../layouts/Default')


class Index extends React.Component {
    render() {
        const { games } = this.props
        return (
            <Default title='Gamerish'>
                <ul>
                    {
                        this.props.games.map((game, i) => {
                            const { name, image, _id } = game
                            return (
                                <li key={game._id} className='gameBox'>
                                    <a href={`/games/${game.id}`}>{game.name}</a><br />
                                    <img src={game.image} className='gameImg'></img>
                                    <div class='gameText'>
                                        <form action={`/games/${game._id}?_method=DELETE`} method='POST'>
                                            <input type='submit' value={`Delete ${name}`} />
                                        </form>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index 