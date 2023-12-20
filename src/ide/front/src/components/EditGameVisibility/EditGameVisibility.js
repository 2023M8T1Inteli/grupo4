import React from "react";
import "./style.css";
import { MdOutlinePublic, MdOutlinePublicOff } from "react-icons/md";

class EditGameVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublic: true,
            buttonText: "Público",
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            isPublic: !prevState.isPublic,
            buttonText: prevState.isPublic ? "Privado" : "Público",
        }));
    };

    render() {
        const { isPublic, buttonText } = this.state;

        return (
            <>
                <div className="container">
                    <button className="visibilityBtn" onClick={this.handleClick}>
                        <div className="visibilityBtnText">
                            {buttonText}
                        </div>

                        <div className="visibilityBtnIcon" style={{ backgroundColor: isPublic ? 'green' : 'red' }}>
                            {isPublic ? <MdOutlinePublic /> : <MdOutlinePublicOff />}
                        </div>
                    </button>
                </div>
            </>
        );
    }
}

export default EditGameVisibility;
