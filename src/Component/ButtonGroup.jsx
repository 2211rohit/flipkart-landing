import React from 'react';


const ButtonGroup = (props) => {
    return(
        <div class="btn-group" >
            <button className="btn dropdown-toggle">
                {props.categoryList}
        </button>
        </div>
    )
}
export default ButtonGroup;