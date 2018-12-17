import React from 'react'

const Distance = ({ distance, metric }) => {
    let distanceStr = ''

    if (metric === 'metric') {
        distanceStr = distance + 'km'
    } else {
        const distanceMi = distance * 0.621371
        distanceStr = distanceMi + 'mi'
    }

    return <span>{distanceStr}</span>
}

export default Distance