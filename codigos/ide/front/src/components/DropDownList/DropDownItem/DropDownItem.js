import React from "react";
import "./style.css";

class DropDownItem extends React.Component {
    render() {
        const { children } = this.props; 

        return (
            <>
                <div className="ContainerItem">
                    {children}
                </div>
            </>
        );
    }
}

export default DropDownItem;
