import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import './PaginatedList.css';
import { Link } from 'react-router-dom';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ActionButton from '../ActionButton/ActionButton';
import * as R from 'ramda';

const PaginatedList = ({ title, items, pageLimit = 10 }) => {

    const reversedItems = R.reverse(items)
    const [flip, setFlip] = useState(true)

    const getDisplayedContent = () => {
        if(flip)
            return reversedItems.slice(0, pageLimit)
        return items.slice(0, pageLimit)
    }

    const [displayedContent, setDisplayedContent] = useState(getDisplayedContent())

    useEffect(() => {
        setDisplayedContent(getDisplayedContent())
    }, [flip])

    const handlePageChange = (currentPage, from, to) => {
        setDisplayedContent(flip ? reversedItems.slice(from, to + 1) : items.slice(from, to + 1))
    }

    const renderList = () => {
        if (displayedContent.length > 0) {
            return displayedContent.map((m, i) => {
                return (
                    <div key={m.id} className={`list__item ${i % 2 === 0 ? 'even' : 'odd'}`}>
                        <Link to={m.url}><p>{m.title}</p></Link>
                        <div className="list__actions">
                            {m.actions.map( a => <ActionButton key={m.title} action={a.action} icon={a.icon} />)}
                        </div>
                    </div>
                )
            })
        }
        else
            return <div className="list__empty">No se han encontrado episodios para este anime.</div>
    }

    return (
        <div className="list">
            <div className="list__header">
                <div className="list__tabs">
                    <span>{title}</span>
                </div>
                <div className="list__pagination">
                    <ImportExportIcon onClick={() => setFlip(!flip)} />
                    <Pagination key={flip} pageLimit={pageLimit} totalRecords={items.length} onPageChanged={handlePageChange} />
                </div>
            </div>
            <div className="list__items">
                {renderList()}
            </div>
        </div>
    )
}

export default PaginatedList
