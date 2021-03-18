import React from 'react';
import styled from 'styled-components';
import {backgroundCss, borderedCss, marginCss, flexBoxCss, fontStyleCss, paddingCss, sizeCss, cursorCss, pointerEventsCss} from './css.js';


const BaseDiv = styled.div`
    ${marginCss};
    ${backgroundCss};
    ${paddingCss};
    ${flexBoxCss};
    ${borderedCss};
    ${sizeCss};
    ${fontStyleCss};
    ${cursorCss};
    ${pointerEventsCss};
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
    ${pointerEventsCss};
`

const BaseInput = styled.input`
    ${marginCss};
    ${backgroundCss};
    ${paddingCss};
    ${flexBoxCss};
    ${borderedCss};
    ${sizeCss};
    ${pointerEventsCss};
    box-sizing: border-box;
`

export { BaseDiv, BaseSpan, BaseFlexDiv, BaseInlineFlexDiv, BaseInput}