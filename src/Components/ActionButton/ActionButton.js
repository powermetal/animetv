import React from 'react';

const ActionButton = ({action, icon, text}) => {

    const renderButton = () => {
        return <div className="action-button" onClick={() => action()}>{icon} <span>{text}</span></div>
    }

    return (
        renderButton()
    )
}

export default ActionButton
