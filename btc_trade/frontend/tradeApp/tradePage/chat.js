import React, { useState, useEffect } from 'react'

import { BaseDiv, BaseFlexDiv, BaseInlineFlexDiv, BaseSpan, BaseInput} from "../baseStyledComponents/components"


const Message = (props) => {
    return <BaseDiv {...props}>{props.children}</BaseDiv>
}


const Chat = (props) => {
    const chatContainerProps = {
        padding: '2% 2% 2% 2%',
        width: '100%',
        borderTop: '1px solid black',
        flexDirection: 'column'
    }

    return(
        <BaseInlineFlexDiv {...chatContainerProps}>
            <BaseInlineFlexDiv flex={'4'} flexDirection={'column'} justifyContent={'space-around'}>
            {props.showMessages ? 
                <>
                    <BaseInlineFlexDiv>
                        <Message>First message....</Message>
                    </BaseInlineFlexDiv>
                    <BaseInlineFlexDiv justifyContent={'flex-end'}>
                        <Message>Second message....</Message>
                    </BaseInlineFlexDiv>
                    <BaseInlineFlexDiv>
                        <Message>Third message....</Message>
                    </BaseInlineFlexDiv>
                    <BaseInlineFlexDiv justifyContent={'flex-end'}>
                        <Message>Fourth message....</Message>
                    </BaseInlineFlexDiv>
                </> : null
            }
                
            </BaseInlineFlexDiv>
            <BaseInlineFlexDiv flex={'1'}>
                <BaseInput width={'100%'}></BaseInput>
            </BaseInlineFlexDiv>
        </BaseInlineFlexDiv>
    )
}


export { Chat }