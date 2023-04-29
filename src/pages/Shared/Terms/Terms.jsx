import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque saepe aspernatur consectetur eaque eligendi deleniti cum excepturi facilis repellat necessitatibus?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;