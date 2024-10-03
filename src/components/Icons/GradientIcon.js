import React from 'react';
import { RxCaretSort } from 'react-icons/rx';
import styled from 'styled-components';

const GradientIconContainer = styled.div`
  display: inline-block;
  svg {
    fill: url(#gradient); /* Ensure the fill uses the gradient */
  }
`;

const GradientIcon = ({ ...props }) => (
  <GradientIconContainer>
    <svg width="0" height="0">
      <defs>
        {/* Define the linear gradient */}
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="blue" />
        </linearGradient>
      </defs>
    </svg>
    <RxCaretSort {...props} style={{ fill: 'url(#gradient)' }} /> {/* Apply the gradient to the icon */}
  </GradientIconContainer>
);

export default GradientIcon;
