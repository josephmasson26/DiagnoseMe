import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options }) => {
    const [display, setDisplay] = useState(false);
    const [openedOnce, setOpenedOnce] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isMouseInside, setIsMouseInside] = useState(false); // New state variable
    const dropdownBodyRef = useRef(null);

    useEffect(() => {
        setFilteredOptions(
            options.filter(
                option => option.toLowerCase().indexOf(search.toLowerCase()) > -1
            )
        );
    }, [search]);

    useEffect(() => {
        if (dropdownBodyRef.current) {
            dropdownBodyRef.current.style.height = display ? `${dropdownBodyRef.current.scrollHeight}px` : '0px';
        }

        const handleKeyDown = (event) => {
            const key = event.key;
            if (display && /^[a-zA-Z]$/.test(key) && isMouseInside) { // Check isMouseInside
                setSearch(search + key);
            } else if (display && key === 'Backspace' && isMouseInside) { // Check isMouseInside
                setSearch(search.slice(0, -1));
            } else if (display && key === ' ' && isMouseInside) { // Check isMouseInside
                setSearch(search + ' ');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [search, display, isMouseInside]); // Add isMouseInside to dependency array

    const toggleDropdown = () => {
        if (!openedOnce) {
            setDisplay(!display);
            setOpenedOnce(true);
        }
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" 
                 onMouseUp={() => { toggleDropdown(); setIsMouseInside(true); }} // Set isMouseInside to true
                 onMouseLeave={() => setIsMouseInside(false)} // Set isMouseInside to false
            >
                {search}
            </div>
            {display &&(
                <div className={`dropdown-body ${display ? 'expanded' : ''}`} ref={dropdownBodyRef} >                {filteredOptions.map((option, i) => (
                    <div className="dropdown-item" key={i} onClick={() => setSearch(option)}>
                        {option}
                    </div>
                ))}
            </div>
            )}
        </div>
    );
};

export default Dropdown;