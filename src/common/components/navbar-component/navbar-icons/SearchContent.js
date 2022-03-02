import React from 'react';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButtons from "../../buttons/icon-buttons";

const SearchContent = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickAway = () => {
        setOpen(false);
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="same-style header-search d-none d-lg-block">
                <IconButtons onClick={e => handleClick(e)} buttonClass={"search-active"} iconClass={"pe-7s-search"}/>
                {open ?
                    <div className="search-content active" >
                        <form action="#">
                            <input type="text" placeholder="Search" />
                            <button className="button-search">
                                <i className="pe-7s-search" />
                            </button>
                        </form>
                    </div>
                    : null}
            </div>
        </ClickAwayListener>

    );
};

export default SearchContent;