import styled from "styled-components";

const ListStyle = styled.div`
  padding: 20px;

  border: 1px solid #f0f2f7;
  box-shadow: 0px 8px 16px -2px rgba(73, 94, 124, 0.12);
  border-radius: 10px;
  & > .listInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 8px;
    & > .left {
      & > strong {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        color: #1573ff;

        margin-right: 3px;
      }

      & > span {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  & > strong {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;

    color: #959aa7;
  }
`;

const List = () => {
  return (
    <ListStyle>
      <div className="listInfo">
        <div className="left">
          <strong>[일정]</strong>
          <span>
            2022년 10월 법정공휴일 휴무 <br />
            안내
          </span>
        </div>
        <div className="right">
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.52876 0.517582C1.81726 0.231135 2.28283 0.231134 2.57133 0.517581L7 4.91482L11.4287 0.517582C11.7172 0.231135 12.1827 0.231135 12.4712 0.517582C12.7627 0.806929 12.7627 1.27825 12.4712 1.5676L7.70458 6.30042C7.31464 6.68759 6.68536 6.68759 6.29542 6.30042L1.52876 1.5676C1.23735 1.27825 1.23735 0.806929 1.52876 0.517582Z"
              fill="#959AA7"
            />
          </svg>
        </div>
      </div>
      <strong>2022.11.30 12:00</strong>
    </ListStyle>
  );
};

export default List;
