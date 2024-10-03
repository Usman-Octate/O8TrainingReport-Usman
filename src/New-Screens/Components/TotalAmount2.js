import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #ebf1ff;
`;

const Grid = styled.div`
  width: 140px;
  /* background-color: green; */
  /* border-top-left-radius: 8px; */
  /* border-bottom: 1px solid #dadbdf; */
  /* border-right: 1px solid #dadbdf; */
  /* background-color: #ebf1ff; */
  border-left: 1px solid #dadbdf;
  border-top: 1px solid #dadbdf;
  text-align: left;
  font-size: 12px;
  color: #5f656f;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-left: 20px;
  ${({ Last }) =>
    Last &&
    `
     border-bottom-left-radius: 8px;
     border-bottom:1px solid #dadbdf;
  `}
  ${({ First }) =>
    First &&
    `
   border-top-left-radius: 8px;
  `}
`;
const Grid6 = styled.div`
  width: 180px;
  padding-top: 18px;
  padding-bottom: 13px;
  padding-right: 10px;
  /* border-bottom: 1px solid #dadbdf; */
  border-right: 1px solid #dadbdf;
  border-top: 1px solid #dadbdf;
  text-align: right;
  font-size: 12px;
  color: #5f656f;
  ${({ isLast }) =>
    isLast &&
    `
     border-bottom-right-radius: 8px;
     border-bottom:1px solid #dadbdf;
  `}
  ${({ isFirst }) =>
    isFirst &&
    `
 border-top-right-radius: 8px;
    
  `}
`;
const Total = styled.div`
  width: 350px;
  height: 371px;
  /* border: 1px solid #dadbdf; */
  border-radius: 9px;
  display: flex;
  margin-right: 20px;
  margin-top: 20px;
`;
const Grab = styled.div`
  /* background-color: green; */
  border-bottom-right-radius: 8px;
`;

const TotalAmount2 = ({ Total: total, Data: data }) => {
  return (
    <Total>
      <div>
        <Wrap>
          {total.map((item, index) => (
            <Grid
              First={index === 0}
              Last={index === data.length - 1}
              key={index}
            >
              {item.Label}
            </Grid>
          ))}
        </Wrap>
      </div>
      <div>
        <Grab>
          {data.map((item, index) => (
            <Grid6
              isFirst={index === 0}
              isLast={index === data.length - 1}
              key={index}
            >
              {item.Amount}
            </Grid6>
          ))}
        </Grab>
      </div>
    </Total>
  );
};

export default TotalAmount2;
