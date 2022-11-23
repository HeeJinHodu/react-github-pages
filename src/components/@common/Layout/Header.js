import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  & > h2 {
    display: inline;

    font-size: 20px;
    line-height: 24px;

    margin-left: 121px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <svg
        width="11"
        height="20"
        viewBox="0 0 11 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.00049L1 10.0005L10 19.0005"
          stroke="#31353B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h2>공지사항</h2>
    </HeaderStyle>
  );
};
export default Header;
