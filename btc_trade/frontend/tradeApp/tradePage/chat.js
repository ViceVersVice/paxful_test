import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { BaseDiv, BaseInlineFlexDiv, BaseSpan, BaseInput} from "../baseStyledComponents/components"


const Message = (props) => {
    return <BaseDiv {...props}>{props.children}</BaseDiv>
}


const SendButton = (props) => {
    const [highlight, setHighlight] = useState(false)

    const highlightButton = (e) => {
        setHighlight(true);
    };

    const unhighlightButton = (e) => {
        setHighlight(false);
    };

    const buttonProps = {
        width: '100%',
        height: '40px',
        borderRadius: '15px',
        background: highlight ? '#b1f2b5': '#b7c8eb',
        margin: '2% 0% 0% 0%',
        justifyContent: 'center',
        alignItems: 'center',
        onMouseEnter: highlightButton,
        onMouseLeave: unhighlightButton,
    }
    return(
        <BaseInlineFlexDiv {...buttonProps}>
            <BaseSpan>Send message</BaseSpan>
        </BaseInlineFlexDiv>
    )
}


const Chat = (props) => {
    const { showMessages } = props

    const chatContainerProps = {
        padding: '2% 2% 2% 2%',
        width: '100%',
        flexDirection: 'column',
    }

    const theme = {
        pointerEvents: showMessages ? 'auto' : 'none',
        background: showMessages ? '' : '#d0d3d9'
    }

    return(
        <ThemeProvider theme={theme}>
            <BaseInlineFlexDiv {...chatContainerProps}>
                <BaseInlineFlexDiv flex={'3'} flexDirection={'column'} justifyContent={'space-around'}>
                {showMessages ? 
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
                    <BaseInput width={'100%'} placeholder={'Write message...'}></BaseInput>
                </BaseInlineFlexDiv>
                <BaseInlineFlexDiv flex={'1'}>
                   <SendButton></SendButton>
                </BaseInlineFlexDiv>
            </BaseInlineFlexDiv>
        </ThemeProvider>
        
    )
}


export { Chat }
