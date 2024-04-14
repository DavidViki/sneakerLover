import React, {useState} from "react";
import { Link, } from "react-router-dom";


function Dropdown(){
    const [openDropdown, setOpenDropdown] = useState(false);

    function handleDropdownChange () {
        setOpenDropdown(!openDropdown);
    }

    return(<div className="dropdown">
    <CustomDropdownLink onClick={ handleDropdownChange} className="dropdown-button">Brands</CustomDropdownLink>
    {openDropdown ? 
    <div className="dropdown-items">
    <CustomDropdownLink onClick={ handleDropdownChange} to="/nike">Nike</CustomDropdownLink>
    <CustomDropdownLink onClick={ handleDropdownChange} to="/adidas">Adidas</CustomDropdownLink>
    <CustomDropdownLink onClick={ handleDropdownChange} to="/reebok">Reebok</CustomDropdownLink>
    <CustomDropdownLink onClick={ handleDropdownChange} to="/puma">Puma</CustomDropdownLink> 
    </div> : null}

    
    
        </div>
        
    );
}

function CustomDropdownLink({to, children, ...props}){
    

    return(
        <li>
        <Link to={to} {...props}>
        {children}
        </Link>
        </li>
    );
}

export default Dropdown;