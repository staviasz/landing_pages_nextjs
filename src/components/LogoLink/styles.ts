import styled, { css } from 'styled-components';

export const LinkContent = styled.a`
  ${() => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    > img {
      max-height: 3rem;
    }
  `}
`;
