import React from 'react'

const Nav = ({ setPage,page }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary shadow-sm p-3 mb-5 rounded-bottom">
            <div className="container-fluid">
                <button className="btn text-light navbar-brand " onClick={()=>{setPage(0)}}>Spam</button>
                <button className=" navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list" ></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className={page === 0?"btn text-light nav-link  ":"btn text-white-50 nav-link "} aria-current="page" onClick={()=>{setPage(0)}}>Spam</button>
                        </li>
                        <li className="nav-item">
                            <button className={page === 1?"btn text-light nav-link  ":"btn text-white-50 nav-link "} onClick={()=>{setPage(1)}}>Test</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav