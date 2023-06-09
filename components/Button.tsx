import React, { useState } from "react";

const Button = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <div>{count}</div>
        </div>
    );
};

export default Button;
