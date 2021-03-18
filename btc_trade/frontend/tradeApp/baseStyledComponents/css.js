import { css } from 'styled-components';


const backgroundCss = css`
    background-color: ${props => props.backgroundColor || props.theme.backgroundColor};
    background: ${props => props.background || props.theme.background};
`


const fontStyleCss = css`
    font-family: ${props => props.fontFamily || props.theme.fontFamily };
    font-size: ${props => props.fontSize || props.theme.fontSize};
    opacity: ${props => props.opacity};
    color: ${props => props.fontColor || props.theme.fontColor };
    font-weight: ${props => props.fontWeight};
`


const borderedCss = css`
    border: ${props => props.border};
    border-style: ${props => props.borderStyle};
    border-radius: ${props => props.borderRadius};
    border-left: ${props => props.borderLeft};
    border-right: ${props => props.borderRight};
    border-bottom: ${props => props.borderBottom};
    border-top: ${props => props.borderTop};
    box-shadow: ${props => props.boxShadow};
`


const marginCss = css`
    margin: ${props => props.margin || ''};
    margin-top: ${props => props.marginTop || ''};
    margin-bottom: ${props => props.marginBot || ''};
    margin-left: ${props => props.marginLeft || ''};
    margin-right: ${props => props.marginRight || ''};
`


const paddingCss = css`
    padding: ${props => props.padding || ''};
    padding-top: ${props => props.paddingTop || ''};
    padding-bottom: ${props => props.paddingBot || ''};
    padding-left: ${props => props.paddingLeft || ''};
    padding-right: ${props => props.paddingRight || ''};
`


const sizeCss = css`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    max-width: ${props => props.maxWidth || ''};
    max-height: ${props => props.maxHeight || ''};
    min-width: ${props => props.minWidth || ''};
    min-height: ${props => props.minHeight || ''};
`


const flexBoxCss = css`
    display: ${props => props.display || ''};
    flex: ${props => props.flex || '0 1 auto'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    align-self: ${props => props.alignSelf || 'auto'};
    align-items: ${props => props.alignItems || 'stretch'};
    flex-direction: ${props => props.flexDirection || 'row'};
    overflow: ${props => props.overflow || ''};
    overflow-x: ${props => props.overflowX || ''};
    overflow-y: ${props => props.overflowY || ''};
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
`


const fitCss = css`
    object-fit: ${props => props.objectFit}
`


const cursorCss = css`
    cursor: ${props => props.cursor}
`


const pointerEventsCss = css`
    pointer-events: ${props => props.pointerEvents || props.theme.pointerEvents || 'auto'}
`


export {backgroundCss, borderedCss, marginCss, flexBoxCss, sizeCss, fontStyleCss, paddingCss, cursorCss, fitCss, pointerEventsCss};