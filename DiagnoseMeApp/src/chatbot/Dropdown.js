import React, { useState, useEffect } from 'react';

const Dropdown = ({ options }) => {
    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredOptions, setFilteredOptions] = useState([]);

    useEffect(() => {
        setFilteredOptions(
            options.filter(
                option => option.toLowerCase().indexOf(search.toLowerCase()) > -1
            )
        );
    }, [search]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            if (display && /^[a-zA-Z]$/.test(key)) {
                setSearch(search + key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [search, display]);

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={() => setDisplay(!display)}>
                {search}
            </div>
            {display && (
                <div className="dropdown-body">
                    {filteredOptions.map((option, i) => (
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