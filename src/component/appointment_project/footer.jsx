import React from 'react';

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();
    
    return (
        <footer>
            <p> All Contents @ {currentYear} Pet Clinic. All rights reserved</p>
        </footer>
    )
}

export default Footer;