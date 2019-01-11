import React from 'react'
import moment from 'moment-timezone'

const DateStr = ({date, timezone}) => {

    const d = moment.tz(date, "GMT")
    
    console.log(date, timezone)

    const d2 = d.clone().tz(timezone)

    
    return <span>{d2.format('DD/MM/YYYY h:mm:ss')}</span>
}

export default DateStr