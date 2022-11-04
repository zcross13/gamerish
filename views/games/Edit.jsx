const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
  render () {
    const { name, _id, image, releaseDate, price, console } = this.props.game.game
    return (
      <Default title={`${name} Edit Page`} game={this.props.game}>
        <form method='POST' action={`/games/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Image: <input type='text' name='image' defaultValue={image} /><br />
          Release Date: <input type='text' name='releaseDate' defaultValue={releaseDate} /><br />
          Console: <input type='text' name='console' defaultValue={price} /><br />
          Price:<input type='text' name='price' defaultValue={console} /><br />
          <input type='submit' value='Submit Changes' />
          <input type='submit' value='DELETE' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
