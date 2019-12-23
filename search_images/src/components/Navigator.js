import React from 'react'

const Navigator = (props) => {
    return (
        <div className="py-3">
            <button onClick={props.backPage} type="button" className="btn btn-info mr-1">&larr; Back </button>
            <button onClick={props.nextPage} type="button" className="btn btn-info">Next &rarr;</button>
        </div>
    )
}

export default Navigator;