const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    return (
      <Default title='Gamerish'>
        <p>Welcome to Gamerish. Discuss all the things you love 
          about your favorite games and rant about what you don't. 
          Talk about all things <span>GAMERISH</span><br/>
          Select a game below and write your first comment.
        </p>
        <ul>
          {
                        this.props.games.map((game, i) => {
                          return (
                            <li key={game._id} className='gameContainer'>
                              <a href={`/games/${game.id}`}>{game.name}</a><br />
                              <img src={game.image} className='gameImg' />
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
