const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    return (
      <Default title='Gamerish'>
        <ul>
          {
                        this.props.games.map((game, i) => {
                          const { name } = game
                          return (
                            <li key={game._id} className='gameBox'>
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
