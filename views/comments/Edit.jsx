const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
  render() {
    const { username, text, gameId, _id } = this.props.comment
    return (
      <Default title={`Edit Page`} >
        <form method='POST' action={`/games/${_id}/comment?_method=PUT`}>
          Text: <input name='text' defaultValue={text}></input>
          <input type='submit' value='Submit Changes' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
