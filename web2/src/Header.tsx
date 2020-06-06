import React from 'react';

// TypeScript -> Set title as required
interface HeaderProps {
    title: string;
}


// Every component starts with a capital letter, so that it doesn't matches the tags
// function header -> const Header = () [a function inside a constant]
// header: React.FC -> A type of function for using more parameters 
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            {/* Using the javascript element passed in as title by the index.tsx file*/}
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;