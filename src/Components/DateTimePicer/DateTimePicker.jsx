import React from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import Timepicker from './TimePicker'

const DateTimePicker = () => {
    const dateFormatList = ['MM/DD/YYYY', 'DD/MM/YY'];

    return (

        <React.Fragment>
            <h1 className="date_time_heading"> Pick a date and Time</h1>
            <div className="container">
                <div className="container-date">
                    <DatePicker format={dateFormatList} />
                </div>

                <div className="container-time">
                    <Timepicker />
                </div>
                <button className="date_time_btn">ADD</button>
            </div>
        </React.Fragment>



    )
}

export default DateTimePicker


