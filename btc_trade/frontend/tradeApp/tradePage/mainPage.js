import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'
import { BaseDiv, BaseSpan,  BaseFlexDiv, BaseInlineFlexDiv } from '../baseStyledComponents/components.js'

import { TradeList } from './tradesList.js'
import { Chat } from './chat.js'
import { TradeDetailInfo } from './trade.js'


const fetchTradeDetailsInfo = (tradeId) => {
    return fetch(`${window.location.origin}/api/trades/${tradeId}`).then(data => data.json())
}


const MainPage = () => {
    const [tradeDetailsData, setTradeDetailsData] = useState(null)

    console.log("DET DATA::", tradeDetailsData)


    const getTradeInfoDetailsAction = (tradeId) => {
        return e => {
            fetchTradeDetailsInfo(tradeId).then(data => setTradeDetailsData(data))
            return e
        }
    }

    return (
        <ThemeProvider theme={{ fontFamily: "'Lato', sans-serif", fontSize: '20px'}}>
            <BaseFlexDiv flexWrap={'wrap'} height={'100vh'}>
                <BaseInlineFlexDiv flex={'1'} key={1}>
                    <TradeList getTradeInfoDetailsAction={getTradeInfoDetailsAction}></TradeList>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv flex={'3'} flexDirection={'column'} key={2}>
                    <BaseInlineFlexDiv flex={'1'}>
                        {tradeDetailsData ? <TradeDetailInfo data={tradeDetailsData}></TradeDetailInfo> : null}
                    </BaseInlineFlexDiv>
                    <BaseInlineFlexDiv flex={'1'}>
                        <Chat showMessages={Boolean(tradeDetailsData)}></Chat>
                    </BaseInlineFlexDiv>
                </BaseInlineFlexDiv>
                
            </BaseFlexDiv>
        </ThemeProvider>
        
    )
}


export {MainPage}