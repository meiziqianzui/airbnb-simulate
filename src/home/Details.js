import React, { Component } from 'react';
import { DatePicker } from 'antd';




const { RangePicker } = DatePicker;

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

     onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      
     onOk = (value) => {
        console.log('onOk: ', value);
      }


    render() {
        return (
            <div style = {{ width:"30",
                            height:"500px",
                            position:"sticky",
                            top:"0"}}>
                <div>
                    ￥903 每晚
                    <br/>秋季特惠8.5折
                    <br/>229t条
                </div>
                <div>
                    日期
                    <br/>
                    <RangePicker
                            showTime = {{ format: 'HH:mm' }}
                            format = "YYYY-MM-DD HH:mm"
                            placeholder = { ['Start Time', 'End Time'] }
                            onChange = { this.onChange }
                            onOk = { this.onOk }
                            />
                    <br />
                    房客
                    <br/>
                </div>        


            </div>           
        );
    }
}



class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>

                <div>
                    <Right/>



                </div>

            </div>    
        );
    }
}

export default Details;