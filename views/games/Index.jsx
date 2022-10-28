const React = require('react')


class Index extends React.Component {
    render(){
        const { games } = this.props; 
        return(
            <div>
                <h1>Game Index Page</h1>
                <ul>
                    {games.map((game, i) => {
                        return(
                            <li>
                                <a href={`/gamerish/${i}`}>{game.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index 