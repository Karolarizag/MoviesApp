import styled from "styled-components";

export const RailContainer = styled.div`
  z-index: 10;
  color: var(--white);
  margin-bottom: 5vh;
  display: block;
  z-index: -1;
  
  >ul {
    position: relative;
  }

  .react-multi-carousel-list {
    overflow: initial !important;
  }

  .react-multi-carousel-item {
    display: contents !important;
  }
`;
