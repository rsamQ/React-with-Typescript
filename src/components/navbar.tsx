import React from "react";
import {INavbar as IProps} from './navbarList';

const Navbar : React.FC<IProps> = ({items}) => {

    const renderList = () => {
        return items.map(item => {
            return (
                <li>
                    <a href={item.url}>{item.name}</a>
                </li>
            )
        })
    }

    return (
        <header>
            <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
            <div className="navbar-icon">
                <i className="fas fa-bars"></i>
            </div>
            <ul>
                {renderList()}
            </ul>
        </header>
    )
}

export default Navbar