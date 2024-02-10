import React from 'react';
import FadeIn from 'react-fade-in';

function Header() {
    return (
        <FadeIn delay={500} transitionDuration={2000}>
            <h1>DiagnoseMe</h1>
        </FadeIn>
    );
}

export default Header;