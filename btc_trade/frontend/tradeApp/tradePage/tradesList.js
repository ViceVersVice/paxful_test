import React, { useState, useEffect } from 'react'

import { BaseDiv, BaseFlexDiv, BaseInlineFlexDiv } from "../baseStyledComponents/components"
import { TradeListItem } from './trade.js'


const fetchTradesList = () => {
    return fetch(`${window.location.origin}/api/trades/`).then(data => data.json())
}


const TradeList = (props) => {
    const { getTradeInfoDetailsAction } = props

    const [tradesData, setTradesData] = useState([])

    const getTradesList = () => {
        fetchTradesList().then(data => {
            setTradesData(data)
        })
    }


    useEffect(
        () => {
            if(!tradesData.length){
                getTradesList()
            }
            
        }
    )
    
    const tradesListContainerProps = {
        flexDirection: 'column', 
        width: '100%', 
        borderRight: '1px solid black'
    }

    const tradeItemsContainerProps = {
        padding: '5px',
        margin: '5px', 
        borderBottom: '1px solid black', 
        background: '#daeaed',
        
    }
    return (
        <BaseFlexDiv {...tradesListContainerProps}>
            {
                tradesData.map(data => {
                    
                    return(
                        <BaseInlineFlexDiv key={data.id} {...tradeItemsContainerProps}>
                            <TradeListItem data={data} onClick={getTradeInfoDetailsAction(data.id)} />
                        </BaseInlineFlexDiv>
                    )
                })
            }
        </BaseFlexDiv>
    )
}

export { TradeList }