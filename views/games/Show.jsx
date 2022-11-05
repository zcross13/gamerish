const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
    render() {
        const { _id, name, image, system, releaseDate, price } = this.props.game.game
        const [...comments] = this.props.game.comments
        console.log(this.props.game.game)
        return (
            <Default title={`${name} Show Page`} css='/css/Show.css'>
                <div className='gameBox'>
                    <img src={image} className='gameImg' /><br />
                    Title:{name}<br />
                    Console:{system}<br />
                    Release Date:{releaseDate}<br />
                    USD:{price}
                </div>
                <form action={`/games/${_id}/new`} method='POST'>
                    Username: <input type='text' name='username' /><br />
                    Comment: <input type='text' name='text' /><br />
                    <input type='hidden' name='gameId' value={_id} />
                    <input type='submit' value='Post Comment' />
                </form>
                <ul className='commentContainer'>
                    {
                        this.props.game.comments.map((comment) => {
                            const { username, text, gameId } = comment
                            console.log(comments)
                            return (
                                <li key={comment._id} className='commentBox'>
                                    {comment.username}:<br />
                                    {comment.text}
                                    <div class='gameText'>
                                        <form action={`/games/${comment._id}/comment?_method=DELETE`} method='POST'>
                                            <input type='submit' value={`Delete Comment`} />
                                        </form>
                                        <a href={`/games/${gameId}/${comment._id}/editComment`}><input type='button'/>Edit</a>
                                    </div>
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
