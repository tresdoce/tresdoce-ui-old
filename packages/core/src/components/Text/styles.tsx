import styled, { css } from 'styled-components';
import { FontStyle, FontWeight, StyleTextProps } from './Text.types';

const getFontFamily = (theme: any, weight: FontWeight, fontStyle: FontStyle) => {
  let fontFamily;
  switch (weight) {
    case 'extraLight':
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'hairlineItalic' : 'hairline';
      break;
    case 'light':
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'lightItalic' : 'light';
      break;
    case 'normal':
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'regularItalic' : 'regular';
      break;
    case 'regular':
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'regularItalic' : 'regular';
      break;
    case 'semiBold':
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'boldItalic' : 'bold';
      break;
    case 'bold':
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'boldItalic' : 'bold';
      break;
    case 'ultraBold':
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'blackItalic' : 'black';
      break;
    default:
      fontFamily = (fontStyle === 'italic' || fontStyle === 'oblique') ? 'regularItalic' : 'regular';
      break;
  }

  return theme.typography.family[fontFamily];
};

export const textStyle = css`
  ${({ theme }) => `
    font-family: ${theme.typography.family.regular};
    font-weight: ${theme.typography.weight.normal};
    letter-spacing: ${theme.typography.letterSpacing.normal};
  `};
`;
export const P = styled.p<StyleTextProps>`
  ${textStyle};
  ${({ theme, align, capitalize, weight, fontStyle }) => `
    font-family: ${getFontFamily(theme, weight, fontStyle)};
    font-size: ${theme.typography.variants.p.size};
    line-height: ${theme.typography.variants.p.lineHeight};
    font-weight: ${weight ? weight : theme.typography.variants.p.weight};
    font-style: ${fontStyle ? fontStyle : 'normal'};
    text-align: ${align ? theme.typography.align[align] : 'left'};
    text-transform: ${capitalize ? theme.typography.capitalize[capitalize] : 'initial'};
  `};
`;
