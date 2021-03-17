import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import {backgroundCss, borderedCss, marginCss, flexBoxCss, fontStyleCss, paddingCss, sizeCss, cursorCss, fitCss} from './css.js';


const BaseDiv = styled.div`
    ${marginCss};
    ${backgroundCss};
    ${paddingCss};
    ${flexBoxCss};
    ${borderedCss};
    ${sizeCss};
    ${fontStyleCss};
    ${cursorCss};
`

const BaseFlexDiv = styled(BaseDiv)`
    display: flex;
`

const BaseInlineFlexDiv = styled(BaseDiv)`
    display: inline-flex;
`


const BaseSpan = styled.span`
    ${borderedCss};
    ${fontStyleCss};
    ${marginCss};
`


const BaseIcon = styled.i`
    ${marginCss};
    ${backgroundCss};
    ${paddingCss};
    ${flexBoxCss};
    ${borderedCss};
    ${sizeCss};
    ${fontStyleCss};
    ${cursorCss};
`

const BaseInput = styled.input`
    ${marginCss};
    ${backgroundCss};
    ${paddingCss};
    ${flexBoxCss};
    ${borderedCss};
    ${sizeCss};
    box-sizing: border-box;
`

export { BaseDiv, BaseSpan, BaseFlexDiv, BaseInlineFlexDiv, BaseInput}