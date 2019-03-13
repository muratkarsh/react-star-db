import React from 'react'
import PropTypes from 'prop-types'

const Row = ({ left, right }) => (
    <div className="row">
        <div className="col col-md-12 col-lg-6">
            {left}
        </div>

        <div className="col col-md-12 col-lg-6">
            {right}
        </div>
    </div>
)

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
}

export default Row