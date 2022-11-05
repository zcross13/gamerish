const React = require('react')

class Default extends React.Component {
  render () {
    const { title } = this.props
    console.log(this.props)
    return (
      <html>
        <head>
          <link rel='stylesheet' href={this.props.css ? this.props.css : '/css/app.css'} />
          <title>{title}</title>
        </head>
        <body>
          <header>
          
            <nav className='nav_links'>
              <ul>
              <h1 className='title'>{title} </h1>
                <li><a href='/games'>News</a></li>
                <li><a href='/games/new'>Create a Post</a></li>
                {/* <li><a className='cta' href='#'><button>Contact</button></a></li> */}
              </ul>
            </nav>
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
