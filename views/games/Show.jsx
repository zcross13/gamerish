const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
    render() {
        const { _id, name, image, system, releaseDate, price } = this.props.game.game
        const [...comments] = this.props.game.comments
        console.log(comments)
        return (
            <Default title={`${name} Show Page`}>
                <div>
                    {name}<br />
                    <img src={image} className='gameImg'></img><br />
                    {system}<br />
                    {releaseDate}<br />
                    {price}
                </div>
                <form action={`/games/${_id}/new`} method='POST'>
                    Username: <input type='text' name='username'></input><br />
                    Comment: <input type='text' name='text'></input><br />
                    <input type='submit' value='Post Comment'></input>
                </form>
                <ul className='commentContainer'>
                    {
                        this.props.game.comments.map((comment) => {
                            const { username, text} = comment
                            console.log(comments)
                            return (
                                <li key={comment._id} className='commentBox'>
                                    {comment.username} :<br/>
                                    {comment.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Show 