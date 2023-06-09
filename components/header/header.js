import Link from 'next/link';
import classNamees from './header.module.css';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href='/'>Art Revolution</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><Link className="nav-link" href='/artist'>Artists</Link></li>
                            <li className="nav-item"><Link className="nav-link" href='/about'>About</Link></li>
                            <li className="nav-item"><Link className="nav-link" href='/contact'>Contact</Link></li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="navbar-brand" href='/'>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
