import React from 'react';
import IconButtons from "../../buttons/icon-buttons";
import ClickableMainMenu from "../clickable-main-menu/clickable-main-menu";

const ClickableNavbar = () => {
    const [drawer,setDrawer] = React.useState(false);

    function handleDrawer() {
        setDrawer(true)
    }

    return (
        <div>
            <div className="clickable-menu clickable-mainmenu-active">
                <button className="drawer-icon" onClick={()=>handleDrawer()}>
                    <i className="pe-7s-menu"></i>
                </button>
            </div>
            {
                drawer ? <ClickableMainMenu setDrawer={setDrawer}/> : null
            }
        </div>
    );
};

export default ClickableNavbar;