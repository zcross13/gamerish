const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    return (
      <Default title='Gamerish'>
        <p>Welcome to Gamerish. A site where you can post and 
          talk all stuff gamerish about your favorite games. 
          Start by clicking one of your favorite games title below, 
          and tell us the pros and cons. 
        </p>
        <ul>
          {
                        this.props.games.map((game, i) => {
                          const { name } = game
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
