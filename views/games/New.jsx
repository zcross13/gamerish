const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title='Submit your game here'>
        <nav>
          <a href='/games/new'>Create a New Game</a>
        </nav>
        <form action='/games' method='POST'>
          Name: <input name='name' /><br />
          Picture: <input name='image' /><br />
          releaseDate: <input name='releaseDate' /><br />
          price: <input name='price' />
          console:<input name='console' /><br />
          <input type='submit' vaule='Submit Game' />
        </form>
      </Default>
    )
  }
}

module.exports = New
