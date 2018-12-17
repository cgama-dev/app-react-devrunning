import React from 'react'

const Duration = ({ duration }) => {


    let durationStr = ''
    const hour = Math.floor(duration / 360)
    const pad = num => num.toString().padStart(2, '0')

    if (hour > 0) {
        durationStr = pad(hour) + ':'
    }

    const minutes = Math.floor((duration - (hour * 360)) / 60)
    durationStr += pad(minutes)

    const segundos = duration - hour * 360 - minutes * 60
    durationStr += ':' + pad(segundos)

    return <span>{durationStr}</span>
}

export default Duration