import React from 'react'

const Image = (props) => {

    return (
        <div className="col-12 col-sm-6 col-md-4-col-lg-3 mb-4">
            <div className="card">
                <img src={props.url} alt={props.tags} className="card-img-top"  height="430px;" />
            </div>
        </div>
    )
}

export default Image;