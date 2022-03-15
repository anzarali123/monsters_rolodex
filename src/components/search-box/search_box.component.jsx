import React from "react";
import './search-box.style.css'
class SearchBox extends React.Component {
    render() {
        const {onSearchChange,placeholder,className} = this.props;
        return(
            <input type="search" placeholder={placeholder} className={className}
            onChange={onSearchChange}
            />
        )
    }
}
export default SearchBox;