import React from 'react';
import styled from 'styled-components/macro';
import Anchor from 'components/Anchor';
import { sectionPadding } from 'utils/style';
import { media } from 'utils/style';

const Footer = () => (
  <FooterContainer role="contentinfo">
    <FooterDate>{`© ${new Date().getFullYear()}`} Hamish Williams.</FooterDate>
    <Anchor secondary href="/humans.txt">
      Crafted by yours truly
    </Anchor>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  width: 100vw;
  padding: 70px 30px;
  z-index: 16;
  position: relative;
  font-size: 16px;
  color: rgb(var(--rgbTitle) / 0.6);
  ${sectionPadding}

  @media (max-width: ${media.tablet}px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  ${Anchor} {
    display: inline-flex;
  }
`;

const FooterDate = styled.span`
  padding-right: 5px;
  display: inline-flex;
`;

export default Footer;