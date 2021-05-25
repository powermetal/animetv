import React, { useState, useEffect } from 'react';
import './paginatedContainer.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LazyPaginatedContainer = ({ getContent, renderItem }) => {

    const [state, setState] = useState({ page: 1, items: {} })

    const onNextPage = () => onPageChange(state.page + 1)

    const onPreviousPage = () => {
        const nextPage = state.page > 1 ? state.page - 1 : state.page
        onPageChange(nextPage)
    }

    const onPageChange = async newPage => {
        if (state.items[newPage])
            setState({ ...state, page: newPage })
        else {
            const newItems = await getContent(newPage);
            if (newItems && newItems.length)
                setState({
                    ...state,
                    page: newPage,
                    items: { ...state.items, [newPage]: newItems }
                })
        }
    }

    useEffect(() => onPageChange(1), [])

    const renderItems = () => {
        if (state.items[state.page]) {
            return state.items[state.page].map(e => renderItem(e))
        } else {
            return <div className="episode-list-loader"><Loader type="Puff" color="#ffa800" height={100} width={100} /></div>
        }
    }

    const renderButtons = () => {
        if(state.items[state.page])
            return (
            <div className="paginated_container__pagination">
                <button onClick={onPreviousPage}><NavigateBeforeIcon />prev</button>
                <button onClick={onNextPage}>next <NavigateNextIcon /></button>
            </div>
            )
    }

    return (
        <div className="paginated_container">
            <div className="paginated_container__items">
                {renderItems()}
            </div>
            {renderButtons()}
        </div>
    )
}

export default LazyPaginatedContainer
