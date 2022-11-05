const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    return (
      <Default title='Gamerish'>
        <p>Welcome to Gamerish. Discuss what you like about all the things 
          you love about your favorite game. OR  
          Rant about what you don't like. Talk about all things GAMERISH. 
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
