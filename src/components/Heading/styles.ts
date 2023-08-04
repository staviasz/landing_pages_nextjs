import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface TitleProps {
  $colordark: string;
  size: string;
  $uppercase: string;
}

interface TitleSize {
  [key: string]: (theme: Theme) => ReturnType<typeof css>;
}

const mediaFont = (theme: Theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleSize: TitleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xhuge: (theme) => css`
    ${mediaFont(theme)}
    font-size: ${theme.font.sizes.xhuge};
  `,
};

export const Title = styled.h1<TitleProps>`
  ${({ theme, $colordark, size, $uppercase }) => css`
    color: ${$colordark === 'dark'
      ? theme.colors.primaryColor
      : theme.colors.white};
    ${titleSize[size](theme)}
    text-transform: ${$uppercase};
    font-family: ${theme.font.family.secondary};
    font-style: italic;
  `}
`;
