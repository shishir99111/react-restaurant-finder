import React, { Fragment } from 'react'
import ReactStars from 'react-rating-stars-component'

const RatingBox = ({ rating }) => {
    const default_option = {
        size: 12,
        count: 5,
        color2: '#e7711b'
    };

    return (<Fragment>
        <span className="rating-color" >({rating})</span>

        {/* Rating component */}
        <ReactStars
            className="rating"
            size={default_option.size}
            count={default_option.count}
            edit={false}
            value={rating}
            half={true}
            color2={default_option.color2}
        />
    </Fragment>)
}

export default RatingBox;