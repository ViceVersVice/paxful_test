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
        padding: '0% 2% 0% 2%',
        flexDirection: 'column'
    }

    const itemRowProps = {
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: '2px solid grey',
        padding: '1%'
    }
    
    return (
        <ThemeProvider theme={{ fontSize: '30px'}}>
            <BaseInlineFlexDiv {...tradeDetailsContainerProps}>
                <BaseInlineFlexDiv background={'#dce6f5'} {...itemRowProps}>
                    <BaseSpan><strong>Fiat amount:</strong></BaseSpan>
                    <BaseSpan>{data.amount}</BaseSpan>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv background={'#e4e6eb'} {...itemRowProps}>
                    <BaseSpan><strong>Cryptocurrency amount:</strong></BaseSpan>
                    <BaseSpan>{`${data.cryptocurrency_amount} ${data.cryptocurrency}`}</BaseSpan>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv background={'#dce6f5'} {...itemRowProps}>
                    <BaseSpan><strong>Payment method:</strong></BaseSpan>
                    <BaseSpan>{data.payment_method}</BaseSpan>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv background={'#e4e6eb'} {...itemRowProps}>
                    <BaseSpan><strong>Payment status:</strong></BaseSpan>
                    <BaseSpan>{data.status}</BaseSpan>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv background={'#dce6f5'} {...itemRowProps}>
                    <BaseSpan><strong>Buyer:</strong></BaseSpan>
                    <BaseSpan>{data.buyer}</BaseSpan>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv background={'#e4e6eb'} {...itemRowProps}>
                    <BaseSpan><strong>Buyer reputation:</strong></BaseSpan>
                    <BaseSpan>{data.buyer_reputation}</BaseSpan>
                </BaseInlineFlexDiv>
            </BaseInlineFlexDiv>
        </ThemeProvider>
    )
}


export { TradeListItem, TradeDetailInfo}