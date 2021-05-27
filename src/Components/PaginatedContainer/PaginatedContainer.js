import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import './paginatedContainer.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PaginatedContainer = ({ pageLimit, items }) => {

    const getDisplayedContent = () => {
        return items.slice(0, pageLimit)
    }

    const [displayedContent, setDisplayedContent] = useState(getDisplayedContent())

    useEffect(() => {
        setDisplayedContent(getDisplayedContent())
    }, [items])

    const handlePageChange = (currentPage, from, to) => {
        setDisplayedContent(items.slice(from, to + 1))
    }
    
    const renderItems = () => {
        if (items.length) {
            return (
                <div className="paginated_container">
                    <div className="paginated_container__items">
                        {displayedContent && displayedContent.map((item, index) => <div key={index} className="paginated_container__item">{item}</div>)}
                        {displayedContent.length === 0 ? <div className="paginated_container__err">Aun no has marcado animes como visto</div> : null}
                    </div>
                    <div className="paginated_container__pagination">
                        {displayedContent.length > 0 ? <Pagination pageLimit={pageLimit} totalRecords={items.length} onPageChanged={handlePageChange} /> : null}
                    </div>
                </div >
            )
        } else {
            return <div className="episode-list-loader"><Loader type="Puff" color="#ffa800" height={100} width={100} /></div>
        }
    }


    return (
        renderItems()
    )
}

export default PaginatedContainer
