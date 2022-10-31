const React = require('react')

class Default extends React.Component {
    render(){
        const {game, title} = this.props 
        return(
            <html>
                <head>
                <link rel="stylesheet" href="/css/app.css"/>  
                    <title>{title}</title>
                </head>
                <body>
                    <header>
                    <h1 className='title'>{title}</h1>
                        <nav>
                            <ul className='nav_links'>
                                <li><a href='/games'>News</a></li>
                                <li><a href='/games/new'>Create a Post</a></li>
                                <li>{game? <a href={`/games/${game._id}/edit`}>Edit Page</a>: ''}</li>
                                <li>{game? <a href={`/games/${game._id}`}>Show Page</a>: ''}</li>
                            </ul>
                        </nav>
                        <a className='cta' href='#'><button>Contact</button></a>
                    </header>
                    <div className='games'>
                        {this.props.children}
                        </div>
                </body>
            </html>
        )
    }
}

module.exports = Default 