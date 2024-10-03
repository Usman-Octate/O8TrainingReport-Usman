import React, { useState } from "react";
import styled from "styled-components";
import UpDownIcon from "../buttons/UpDownIcon";
// import PostedButton from "../../buttons/PostedButton";
// import ActiveButton from "../../buttons/ActiveButton";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "170rem")};

  /* @media (max-width: 2020px) {
    min-width: 2000rem;
  } */
`;
const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  border-radius: 8px;
  box-shadow: 0px 0.702708125114441px 10.513540267944336px 0px #00000040;
  @media (max-width: 935px) and (max-height: 435px) {
    width: 92vw;
  }
  @media (max-width: 435px) and (max-height: 935px) {
    width: 52.5rem;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  background-color: #eef5ff;
  height: 40px;
`;
const Wrapit = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #ffffff;
  border-bottom: 1px solid #464f601a;
  padding: 10px 0;
`;
const Text1 = styled.input`
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  cursor: pointer;
`;
const Text2 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;
  width: ${(props) => props.width};
`;

const Subtext1 = styled.input`
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  cursor: pointer;
`;
const Subtext2 = styled.div`
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: ${(props) => props.width};
`;

const One = styled.div`
  margin-left: 0rem;
  font-size: 12px;
  text-align: left;
  color: #464f60;
  font-weight: 700;
  width: 100px;
`;
const Two = styled.div`
  margin-left: 0rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 200px;
`;
const Three = styled.div`
  margin-left: 0rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 200px;
`;
const Wrap = styled.div`
  display: flex;
  gap: 26px;
  text-align: left;
`;

const CustomInfiniteScroll = styled(InfiniteScroll)`
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const WrapperList = styled.div`
  height: ${(props) => (props.height ? props.height : "79vh")};
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-height: 1013px) {
    height: 77.5vh;
  }
  @media (max-height: 962px) {
    height: 76vh;
  }
  @media (max-height: 931px) {
    height: 75.5vh;
  }
  @media (max-height: 880px) {
    height: 74vh;
  }
  @media (max-height: 851px) {
    height: 73vh;
  }
  @media (max-height: 815px) {
    height: 72vh;
  }
  @media (max-height: 750px) {
    height: 69vh;
  }
  @media (max-height: 677px) {
    height: 65vh;
  }
  @media (max-height: 625px) {
    height: 64vh;
  }
  @media (max-height: 600px) {
    height: 62vh;
  }
  @media (max-height: 900px) {
    height: 29vh;
  }
`;

const Table = (props) => {
  const fetchMoreData = () => {
    console.log("called");
    setTimeout(() => {
      const newData = [
        // Mock new data
        // Replace this with actual data fetching logic
        {
          id: 5,
          Code: "CAD",
          Name: "Canadian Dollar",
          sign: "$",
          date: "01 Jan 2023",
          rate: "1.00",
          unrealized: "10 Jan 2023",
          realized: "Realized Gain/Loss Account",
          status: "Is Based Curency?",
          number: "40020-01",
        },
        {
          id: 6,
          Code: "JPY",
          Name: "Japanese Yen",
          sign: "¥",
          date: "01 Jan 2023",
          rate: "1.00",
          unrealized: "10 Jan 2023",
          realized: "Realized Gain/Loss Account",
          status: "Is Based Curency?",
          number: "40020-01",
        },
        {
          id: 7,
          Code: "AUD",
          Name: "Australian Dollar",
          sign: "$",
          date: "01 Jan 2023",
          rate: "1.00",
          unrealized: "10 Jan 2023",
          realized: "Realized Gain/Loss Account",
          status: "Is Based Curency?",
          number: "40020-01",
        },
      ];
      //   setData((prevData) => [...prevData, ...newData]);
    }, 500);
  };

  return (
    <>
      <Container>
        <Wrapper width={props.width}>
          {props.Hdata.map((item, index) => {
            return (
              <Head key={index}>
                {props.ViewCheck === "Checkbox" ? (
                  <Text1 type="checkbox"></Text1>
                ) : null}
                <Text2 width={props.w1}>{item.h1}</Text2>
                <Text2 width={props.w2}>{item.h2}</Text2>
                <Text2 width={props.w3}>{item.h3}</Text2>
                <Text2 width={props.w4}>{item.h4}</Text2>
                <Text2 width={props.w5}>{item.h5}</Text2>
                <Text2 width={props.w6}>{item.h6}</Text2>
                <Text2 width={props.w7}>{item.h7}</Text2>
                <Text2 width={props.w8}>{item.h8}</Text2>
                <Text2 width={props.w9}>{item.h9}</Text2>
                <Text2 width={props.w10}>{item.h10}</Text2>
                <Text2 width={props.w11}>{item.h11}</Text2>
                <Text2 width={props.w12}>{item.h12}</Text2>
                <Text2 width={props.w13}>{item.h13}</Text2>
                <Text2 width={props.w14}>{item.h14}</Text2>
                <Text2 width={props.w15}>{item.h15}</Text2>
                <Text2 width={props.w16}>{item.h16}</Text2>
                <Text2 width={props.w17}>{item.h17}</Text2>
                <Text2 width={props.w18}>{item.h18}</Text2>
              </Head>
            );
          })}
          <WrapperList height={props.height}>
            <CustomInfiniteScroll
              dataLength={props.data.length}
              next={fetchMoreData}
              height={"75.5vh"}
              scrollThreshold={0.95}
              scroll
              hasMore={true} // Whether there is more data to load
              loader={<Loader />} // Loader while loading more data
            >
              {props.data.map((text, i) => {
                return (
                  <Wrapit key={i}>
                    {props.ViewCheck === "Checkbox" ? (
                      <Subtext1 type="checkbox"></Subtext1>
                    ) : null}
                    <Subtext2 width={props.w1}>{text.c1}</Subtext2>
                    <Subtext2 width={props.w2}>{text.c2}</Subtext2>
                    <Subtext2 width={props.w3}>{text.c3}</Subtext2>
                    <Subtext2 width={props.w4}>{text.c4}</Subtext2>
                    <Subtext2 width={props.w5}>{text.c5}</Subtext2>
                    <Subtext2 width={props.w6}>{text.c6}</Subtext2>
                    <Subtext2 width={props.w7}>{text.c7}</Subtext2>
                    <Subtext2 width={props.w8}>{text.c8}</Subtext2>
                    <Subtext2 width={props.w9}>{text.c9}</Subtext2>
                    <Subtext2 width={props.w10}>{text.c10}</Subtext2>
                    <Subtext2 width={props.w11}>{text.c11}</Subtext2>
                    <Subtext2 width={props.w12}>{text.c12}</Subtext2>
                    <Subtext2 width={props.w13}>{text.c13}</Subtext2>
                    <Subtext2 width={props.w14}>{text.c14}</Subtext2>
                    <Subtext2 width={props.w15}>{text.c15}</Subtext2>
                    <Subtext2 width={props.w16}>{text.c16}</Subtext2>
                    <Subtext2 width={props.w17}>{text.c17}</Subtext2>
                    <Subtext2 width={props.w18}>{text.c18}</Subtext2>
                  </Wrapit>
                );
              })}
            </CustomInfiniteScroll>
          </WrapperList>
        </Wrapper>
      </Container>
    </>
  );
};

export default Table;
