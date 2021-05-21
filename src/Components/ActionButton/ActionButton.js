import React from 'react';

const ActionButton = ({action, icon, id}) => {

    const renderButton = () => {
        return <div key={id} onClick={() => action(id)}>{icon}</div>
    }

    return (
        renderButton()
    )
}

export default ActionButton
