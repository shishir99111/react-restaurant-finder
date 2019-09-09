import React from 'react'
import CategoryInfo from './CategoryInfo'
import RatingBox from './RatingBox'


const ListItem = ({ info }) => {
    return (
        <div className="list-item row padding-10 rating-area flex-center" onClick={() => window.location = info.url} >
            <div className="col-8">
                <h4>{info.name}</h4>
                <div>
                    <span className="rating">
                        <RatingBox rating={info.rating}/>
                    </span>
                    <span>({info.review_count})</span>
                    <span>.</span>
                    <span>{info.price} - {info.categories && info.categories[0] ? info.categories[0].title : ''}</span>
                </div>
                <div>
                    {
                        info.location && info.location.display_address &&
                            <span>{info.location.display_address.join(' , ')}</span>
                    }
                </div>
                <div>
                    {/* Opening Status component */}
                    { info.is_closed ?  'CLOSED': 'OPEN'}
                </div>
                <div>
                    <CategoryInfo categories={info.categories} />
                </div>
            </div>
            <div className="col-4 f-right">
                <div style={{ backgroundImage: `url(${info.image_url})` }} className="item-image" alt="restro"></div>
            </div>
        </div>
    )
}

export default ListItem
