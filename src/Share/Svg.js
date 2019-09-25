import React from 'react';
import '../index.css';
import { Popover } from 'antd';

const content = (
    <p>该收益预估假定每个月能预订15晚，价格为预期的每日价格。
        预期的每日价格基于类似房源（考虑位置、房源类型和客户接待能力）的平均价格。
        您实际能获得多少收益可能会因您的房源价格、类型和位置、实际入住率、季节、
        需求、当地法律和其他因素而有所不同。
    </p>
)

const Svg = () => (
    <span>         
        <Popover id = "learnMore"
                 title = ""
                 content = {content} 
                 placement = "bottom"
                 trigger = "click">     

            <svg role = "img" 
                 viewBox = "0 0 24 24"  
                 aria-label = "了解更多" 
                 focusable = "false" 
                 style={{   width:"11px",
                            height:"11px",
                            fill:"#484848"}}>

                <path fillRule = "evenodd"
                      d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z">
                </path>   

            </svg> 

        </Popover>         
    </span>   
)

export default Svg;