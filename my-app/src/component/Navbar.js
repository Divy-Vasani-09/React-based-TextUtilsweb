import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `} >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <form className="d-flex" style={{backgroundColor : props.mode==='light'?'white':'black', color : props.mode==='light'?'black':'white'}} role="search">
                        <input className="form-control me-2" type="search"  placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit" >Search</button>
                        <div className="form-check form-switch form-dark mx-2 my-1">
                            <input className="form-check-input form-dark " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string.isRequired //if you don't give any "about text" then this give error
}

// Specifies the default values for props:
// Navbar.defaultProps = {
//   title: 'SET title here',
//   aboutText: 'SET about text here'
// };