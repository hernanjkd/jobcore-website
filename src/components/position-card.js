import React from 'react'
import PropTypes from 'prop-types'

const PositionCard = ({ data }) => (
    <div className="position-card border">
        <div className="d-flex justify-content-between">
            <div>
                <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                <span>{data.location}</span>
            </div>
            <div>
                <i class="far fa-calendar-check mr-1 text-purple"></i>
                <span>{data.amount} / Hour</span>
            </div>
        </div>

        <h6>{data.position}</h6>

        <p>{data.description}</p>

        <div className="d-flex justify-content-between align-items-center">
            <button className="btn radius btn-darkgreen d-inline" type="submit">
                {data.type}
            </button>
            <small>{data.expiration}</small>
        </div>
    </div>
)

PositionCard.propTypes = {
    data: PropTypes.object,
}

export default PositionCard
