import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import './PaginatedList.css';
import { Link } from 'react-router-dom';
import ImportExportIcon from '@material-ui/icons/ImportExport';

const PaginatedList = ({ tabs }) => {

    const pageLimit = 9

    const getDefaultState = () => {
        return Object.entries(tabs).find(([k, i]) => i.default)[0]
    }

    const [flip, setFlip] = useState(true)
    const [tab, setTab] = useState(getDefaultState)

    const getDisplayedContent = () => {
        if (flip)
            return tabs[tab ? tab : getDefaultState()].items.reverse().slice(0, pageLimit)
        return tabs[tab ? tab : getDefaultState()].items.slice(0, pageLimit)
    }

    const [displayedContent, setDisplayedContent] = useState(getDisplayedContent())

    useEffect(() => {
        setDisplayedContent(getDisplayedContent())
    }, [tabs, flip])

    const handlePageChange = (currentPage, from, to) => {
        setDisplayedContent(tabs[tab].items.slice(from, to + 1))
    }

    const renderTabs = () => {
        return Object.entries(tabs).map(([k, i]) => <span key={k} className={k === tab ? 'activeTab' : ''} onClick={() => setTab(k)}>{i.tab}</span>)
    }

    const renderList = () => {
        if (displayedContent.length > 0) {
            return displayedContent.map((m, i) => {
                return (
                    <div key={`${tab}:${m.id}`} className={`movielist__item ${i % 2 === 0 ? 'even' : 'odd'}`}>
                        <Link to={m.url}><p>{m.title}</p></Link>
                        <div className="movielist__actions">
                            {tabs[tab].actions.map((action, index) => <span key={`${tab}:${m.id}:${index}`}>{action(m)}</span>)}
                        </div>
                    </div>
                )
            })
        }
        else
            return <div className="movielist__empty">No se han encontrado episodios para este anime.</div>
    }

    return (
        <div className="movielist">
            <div className="movielist__header">
                <div className="movielist__tabs">
                    {renderTabs()}
                </div>
                <div className="movielist__pagination">
                    <ImportExportIcon onClick={prevState => setFlip(prevState)} />
                    <Pagination key={tab} pageLimit={pageLimit} totalRecords={tabs[tab].items.length} onPageChanged={handlePageChange} />
                </div>
            </div>
            <div className="movielist__items">
                {renderList()}
            </div>
        </div>
    )
}

export default PaginatedList
