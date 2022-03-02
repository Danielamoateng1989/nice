import React from 'react'
import { TimePicker } from 'antd'


const Timepicker = () => {

    const onChange = (time, timeString) => {
        console.log(time, timeString);
    }


    return (
        <React.Fragment>
            <TimePicker use12Hours format="h:mm a" onChange={onChange} />
        </React.Fragment>
    )
}

export default Timepicker