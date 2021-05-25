import React from 'react';

const ActionButton = ({action, icon}) => {

    const renderButton = () => {
        return <div onClick={() => action()}>{icon}</div>
    }

    return (
        renderButton()
    )
}

export default ActionButton
