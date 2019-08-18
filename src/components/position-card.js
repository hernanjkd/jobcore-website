import React from 'react'
import PropTypes from 'prop-types'

const PositionCard = ({ data }) => (
    <div className="position-card border">
        <div className="d-flex justify-content-between">
            <div>
                <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                <span>Miami Beach</span>
            </div>
            <div>
                <i class="far fa-calendar-check mr-1 text-purple"></i>
                <span> $11.53 - $12.03 / Hour</span>
            </div>
        </div>

        <h6>Bartenders</h6>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            enim delectus saepe cumque totam dolor aut reprehenderit optio
            itaque magni.
        </p>

        <div className="d-flex justify-content-between">
            <button className="btn radius btn-darkgreen d-inline" type="submit">
                Freelance
            </button>
            <small>Ends in 3 Days 21h 24m 36s</small>
        </div>
    </div>
)

PositionCard.propTypes = {
    data: PropTypes.object,
}

export default PositionCard
