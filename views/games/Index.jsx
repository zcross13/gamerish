const React = require('react')


class Index extends React.Component {
    render() {
        const { games } = this.props
        return (
            <div>
                <h1>Game Index Page</h1>
                <ul>
                    {
                        this.props.games.map((game, i) => {
                            return (
                                <li key={game._id}>
                                    <a href={`/games/${game.id}`}>{game.name}</a><br/>
                                    <img src={game.image}></img>
                                    <form action={`/games/${game._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='DELETE'/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index 