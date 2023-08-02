import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 4.4rem;
    overflow-y: auto;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
