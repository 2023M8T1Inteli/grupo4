import React from "react";

//styles
import "./style.css";

class EditGameSidebar extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="Sidebar">
                    <div className="TitleSidebar">
                        <p className="TextSidebar">Edição</p>
                    </div>
                    <div className="Content">
                        <div className="ContentLeft"></div>
                        <div className="ContentRight"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditGameSidebar;
