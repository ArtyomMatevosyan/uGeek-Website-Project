import styled from "styled-components";

export const StyledSelectContainer = styled.div`
  width: ${({ width }) => width};
  .Select__control {
    background: transparent;
    box-shadow: none;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 20px;
    border-color: transparent;
    font-weight: 500;
    font-size: ${({ fontSize }) => fontSize ? `${fontSize}` : '18px'};
    border: none;
    width: ${({ width }) => width} !important;
  }

  .Select__single-value {
    color: ${({ scroll }) => scroll > 100 ? '#2F0D46' : '#fff'};
    font-weight: 500;
  }

  .Select__control {
    width: 75px;
    margin-bottom: 5px;
  }

  .Select__control:hover {
    border: none;
    outline: none;
  }

  .Select__control--is-focused {
    outline: none;
    border-color: transparent;
  }

  .Select__control--is-focused:hover {
    border-color: transparent;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__option {
    cursor: pointer;
    background-color: transparent;
  }

  .Select__option--is-selected {
    background-color: transparent;
    color: #F49A0D;
  }

  .Select__value-container {
    display: flex;
    flex-wrap: nowrap;
  }

  .Select__indicator svg {
    fill: ${({ scroll }) => scroll > 100 ? '#2F0D46' : '#fff'};
  }

  .Select__single-value {
    color: ${({ withCard }) => withCard ? 'unset' : 'unset'};
    font-weight: 600;
  }

  .Select__menu {
    background-color:  ${({ scroll }) => scroll > 100 ? '#f5f7fa' : 'rgba(0, 0, 0, 0.2)'};
    margin-top: 13px;
    border-radius: 0;
    top: ${({ withCard }) => withCard ? '0' : '100%'};
  }

  .Select__option:hover {
    color: #F49A0D;
    background-color: transparent;
  }

  .Select__menu-list {
    max-height: ${({ withCard }) => withCard ? '110px' : 'unset'};
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
      background-color: #f1f2f4;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #54187D;
      border-radius: 1px;
    }
  }

  .Select__control--menu-is-open {
    .Select__indicator {
      transform: rotate(180deg);
    }
  }
`;
