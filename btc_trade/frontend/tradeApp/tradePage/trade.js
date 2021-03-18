import React from 'react'
import { ThemeProvider } from 'styled-components'

import { BaseInlineFlexDiv, BaseSpan } from "../baseStyledComponents/components"


const TradeListItem = (props) => {
    const { data, onClick } = props
    
    const tradeContainerProps = {
        onClick: onClick,
        cursor: 'pointer',
        justifyContent: 'space-around',
        width: '100%'
    }

    return (
        <BaseInlineFlexDiv {...tradeContainerProps}>
            <BaseInlineFlexDiv flexDirection={'column'} justifyContent={'space-between'}>
                <BaseSpan><strong>Fiat amount:</strong></BaseSpan>
                <BaseSpan><strong>Cryptocurrency:</strong></BaseSpan>
                <BaseSpan><strong>Payment method:</strong></BaseSpan>
                <BaseSpan><strong>Payment status:</strong></BaseSpan>
                <BaseSpan><strong>Buyers:</strong></BaseSpan>
                <BaseSpan><strong>Buyer reputation:</strong></BaseSpan>
            </BaseInlineFlexDiv>
            <BaseInlineFlexDiv flexDirection={'column'} justifyContent={'space-between'}>
                <BaseSpan>{data.amount}</BaseSpan>
                <BaseSpan>{data.cryptocurrency}</BaseSpan>
                <BaseSpan>{data.payment_method}</BaseSpan>
                <BaseSpan>{data.status}</BaseSpan>
                <BaseSpan>{data.buyer}</BaseSpan>
                <BaseSpan>{data.buyer_reputation}</BaseSpan>
            </BaseInlineFlexDiv>
        </BaseInlineFlexDiv>
    )
}


const TradeDetailInfo = (props) => {
    const { data } = props

    const tradeDetailsContainerProps = {
        cursor: 'pointer',
        justifyContent: 'space-around',
        width: '100%',
        padding: '2% 20% 2% 2%'
    }
    
    return (
        <ThemeProvider theme={{ fontSize: '30px'}}>
            <BaseInlineFlexDiv {...tradeDetailsContainerProps}>
                <BaseInlineFlexDiv flexDirection={'column'} justifyContent={'space-around'} key={1}>
                    <BaseSpan><strong>Fiat amount:</strong></BaseSpan>
                    <BaseSpan><strong>Cryptocurrency amount:</strong></BaseSpan>
                    <BaseSpan><strong>Payment method:</strong></BaseSpan>
                    <BaseSpan><strong>Payment status:</strong></BaseSpan>
                    <BaseSpan><strong>Buyer:</strong></BaseSpan>
                    <BaseSpan><strong>Buyer reputation:</strong></BaseSpan>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv flexDirection={'column'} justifyContent={'space-around'} key={2}>
                    <BaseSpan>{data.amount}</BaseSpan>
                    <BaseSpan>{`${data.cryptocurrency_amount} ${data.cryptocurrency}`}</BaseSpan>
                    <BaseSpan>{data.payment_method}</BaseSpan>
                    <BaseSpan>{data.status}</BaseSpan>
                    <BaseSpan>{data.buyer}</BaseSpan>
                    <BaseSpan>{data.buyer_reputation}</BaseSpan>
                </BaseInlineFlexDiv>
            </BaseInlineFlexDiv>
        </ThemeProvider>
    )
}


export { TradeListItem, TradeDetailInfo}