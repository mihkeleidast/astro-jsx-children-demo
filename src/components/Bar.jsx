import React from 'react';

const Bar = (props) => {
    return (
        <div>
            {props.items.map((i) => (
                <div>{i.children}</div>
            ))}
        </div>
    );
};

export default Bar;