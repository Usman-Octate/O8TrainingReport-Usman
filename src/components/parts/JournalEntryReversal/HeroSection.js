import React, { useState } from "react";
import styled from "styled-components";
import ActiveButton from "../../buttons/StatusButton";
import left from "../../../assets2/ChartOfAccountNew/PageLeft.svg";
import right from "../../../assets2/ChartOfAccountNew/PaegRight.svg";
import dropdown2 from "../../../assets2/ChartOfAccountNew/dropIcon.svg";
import UpDownIcon from "../../buttons/UpDownIcon";

import InfiniteScroll from "react-infinite-scroll-component";
import StatusButton from "../../buttons/StatusButton";
const Wrapper = styled.div`
  min-width: 160rem;
  @media (max-width: 1520px) {
    min-width: 160rem;
  }
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
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  margin-left: 3.3rem;
`;
const Text3 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 4.8rem;
`;
const Text4 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  margin-left: 5rem;
  cursor: pointer;
`;
const Text5 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  margin-left: 4.1rem;
`;
const Text6 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  margin-left: 5rem;
`;
const Text7 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  margin-left: 5rem;
`;
const Text8 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  margin-left: 5.2rem;
  cursor: pointer;
`;
const Text9 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 5.4rem;
`;
const Text10 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 7.3rem;
`;
const Text11 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 7.4rem;
`;
const Text12 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 5rem;
`;
const Text13 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 4.6rem;
`;
const Text14 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 4.5rem;
`;
const Text15 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 5rem;
`;
const Text16 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 5.5rem;
`;
const Text17 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 4.8rem;
`;
const Text18 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 7.3rem;
`;
const Subtext18 = styled.div`
  margin-left: 4.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eef5ff;
  padding: 10px 0;
`;
const Wrapit = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  background-color: #ffffff;
  border-bottom: 1px solid #464f601a;
`;
const Subtext1 = styled.input`
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  cursor: pointer;
`;
const Subtext2 = styled.div`
  margin-left: 1.3rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 70px;
`;
const Subtext3 = styled.div`
  margin-left: 1.1rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 90px;
`;
const Subtext4 = styled.div`
  margin-left: 2.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  cursor: pointer;
`;
const Subtext5 = styled.div`
  margin-left: 3.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 130px;
`;
const Subtext6 = styled.div`
  margin-left: 3.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext7 = styled.div`
  margin-left: 5.1rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 50px;
  /* background-color: #00ff00; */
`;
const Subtext8 = styled.div`
  margin-left: 4.8rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 110px;
  /* background-color: #00ff00; */
`;
const Subtext9 = styled.div`
  margin-left: 2.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 40px;
  /* background-color: #00ff00; */
`;
const Subtext10 = styled.div`
  margin-left: 4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 170px;
`;
const Subtext11 = styled.div`
  margin-left: 1rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext12 = styled.div`
  margin-left: 1.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext13 = styled.div`
  margin-left: 2.3rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext14 = styled.div`
  margin-left: 2.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext15 = styled.div`
  margin-left: 2.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext16 = styled.div`
  margin-left: 3.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext17 = styled.div`
  margin-left: 4.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const One = styled.div`
  margin-left: 0rem;
  font-size: 12px;
  text-align: left;
  color: #464f60;
  font-weight: 700;

  /* background-color: #00ff00; */
`;
const Two = styled.div`
  margin-left: 0rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 170px;
  /* background-color: #00ff00; */
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
  justify-content: space-between;
  gap: 13px;
  text-align: center;
`;

const Btn1 = styled.button`
  width: 24px;
  height: 20px;
  background-color: #f7f9fc;
  border-radius: 6px;
  border: 1px solid #464f603d;
`;
const Btn2 = styled.button`
  width: 24px;
  height: 20px;
  background-color: #f7f9fc;
  border-radius: 6px;
  border: 1px solid #464f603d;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #687182;
`;
const Section2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const CustomInfiniteScroll = styled(InfiniteScroll)`
  /* Hide scrollbar track */
  &::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar handle */
    /* Border radius of the scrollbar handle */
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar handle on hover */
  }
`;
const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  background-color: #eef5ff;

  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4.702708125114441px 10.513540267944336px 0px #00000040;
  @media (max-width: 435px) and (max-height: 935px) {
    width: 83vw;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Tex = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 3%;
  color: #687182;
`;
const WrapperList = styled.div`
  height: 76vh;

  @media (max-height: 940px) {
    height: 75vh;
  }

  @media (max-height: 885px) {
    height: 74vh;
  }
  @media (max-height: 856px) {
    height: 72vh;
  }
  @media (max-height: 815px) {
    height: 71vh;
  }
  @media (max-height: 770px) {
    height: 70vh;
  }
  @media (max-height: 755px) {
    height: 67vh;
  }
  @media (max-height: 710px) {
    height: 65vh;
  }
  @media (max-height: 660px) {
    height: 63vh;
  }
  @media (max-height: 620px) {
    height: 55vh;
  }
`;
const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  border-radius: 8px;
  box-shadow: 0px 0.702708125114441px 10.513540267944336px 0px #00000040;
  @media (max-width: 935px) and (max-height: 435px) {
    width: 92vw;
  }
  @media (max-width: 435px) and (max-height: 935px) {
    width: 52.5rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
const HeroSection = () => {
  const HeaderData = [
    {
      id: 1,
      id2: "ID",
      type: "Type",
      Doc: "Jornal Entry No.",
      Trans: "Transaction Date",
      post: "Posting Date",
      Ref: "Extra Ref No.",
      Curr: "Currency",
      Ammount: "Amount",
      status: "Status",
      Updown: <UpDownIcon />,
      Note: "Notes",
      Reverse: "Reverse",
      Date: "Reversal Date",
      Reccure: "Recurring",
      Freq: "Frequency",
      RecDate: "Recurring Date",
      interval: "Interval",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      type: "Auto",
      doc: "00001",
      Trans: "10 Jan 2023",
      post: "30 Feb 2023",
      Ref: "812131",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Expense Claims",
      Reverse: "Yes",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Quartley",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/4",
      fullFoam: "United State Dollar",
    },
    {
      id: 2,
      type: "Auto",
      doc: "00001",
      Trans: "10 Jan 2023",
      post: "30 Feb 2023",
      Ref: "812131",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Expense Claims",
      Reverse: "Yes",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Quartley",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/4",
      fullFoam: "United State Dollar",
    },
    {
      id: 3,
      type: "Auto",
      doc: "00001",
      Trans: "10 Jan 2023",
      post: "30 Feb 2023",
      Ref: "812131",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Expense Claims",
      Reverse: "Yes",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Quartley",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/4",
      fullFoam: "United State Dollar",
    },
    {
      id: 4,
      type: "Auto",
      doc: "00001",
      Trans: "10 Jan 2023",
      post: "30 Feb 2023",
      Ref: "812131",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Expense Claims",
      Reverse: "Yes",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Quartley",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      fullFoam: "United State Dollar",
      interval: "1/4",
    },
    {
      id: 5,
      type: "Auto",
      doc: "00001",
      Trans: "10 Jan 2023",
      post: "30 Feb 2023",
      Ref: "812131",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Expense Claims",
      Reverse: "Yes",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Quartley",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      fullFoam: "United State Dollar",
      interval: "1/4",
    },
    {
      id: 6,
      type: "Auto",
      doc: "00001",
      Trans: "10 Jan 2023",
      post: "30 Feb 2023",
      Ref: "812131",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Expense Claims",
      Reverse: "Yes",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Quartley",
      fullFoam: "United State Dollar",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/4",
    },
    {
      id: 7,
      type: "Auto",
      doc: "00001",
      Trans: "10 Jan 2023",
      post: "30 Feb 2023",
      Ref: "812131",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Expense Claims",
      Reverse: "Yes",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Quartley",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      fullFoam: "United State Dollar",
      interval: "1/4",
    },
  ]);
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
      setData((prevData) => [...prevData, ...newData]);
    }, 500);
  };
  return (
    <>
      <Container>
        <Wrapper>
          {HeaderData.map((item, index) => {
            return (
              <Head key={index}>
                <Text1 type="checkbox"></Text1>
                <Text2>{item.id2}</Text2>
                <Text3>{item.type}</Text3>
                <Text4>
                  {item.Doc}
                  {item.Updown}
                </Text4>
                <Text5>
                  {item.Trans}
                  {item.Updown}
                </Text5>
                <Text6>
                  {item.post}
                  {item.Updown}
                </Text6>
                <Text7>{item.Ref}</Text7>
                <Text8>{item.Curr}</Text8>
                <Text9>{item.Ammount}</Text9>
                <Text10>{item.status}</Text10>
                <Text11>{item.Note}</Text11>
                <Text12>{item.Reverse}</Text12>
                <Text13>
                  {item.Date}
                  {item.Updown}
                </Text13>
                <Text14>{item.Reccure}</Text14>
                <Text15>{item.Freq}</Text15>
                <Text18>{item.interval}</Text18>
                <Text16>
                  {item.RecDate}
                  {item.Updown}
                </Text16>
                {/* <Text17>
                  {item.RecDate}
                  {item.Updown}
                </Text17> */}
              </Head>
            );
          })}
          <WrapperList>
            <CustomInfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              height={"75.5vh"}
              scrollThreshold={0.95}
              scroll
              hasMore={true} // Whether there is more data to load
              loader={<h4>Loading...</h4>} // Loader while loading more data
            >
              {data.map((text, i) => {
                return (
                  <Wrapit key={i}>
                    <Subtext1 type="checkbox"></Subtext1>
                    <Subtext2>{text.id}</Subtext2>
                    <Subtext3>{text.type}</Subtext3>
                    <Subtext4>{text.doc}</Subtext4>
                    <Subtext5>{text.Trans}</Subtext5>
                    <Subtext6>{text.post}</Subtext6>
                    <Subtext7>{text.Ref}</Subtext7>
                    <Subtext8>
                      <Wrap>
                        <One>{text.Curr}</One>
                        <Two>{text.ammount}</Two>
                      </Wrap>
                      <Three>{text.fullFoam}</Three>
                    </Subtext8>
                    <Subtext9>{text.ammount}</Subtext9>
                    <Subtext10>{text.status}</Subtext10>
                    <Subtext11>{text.Note}</Subtext11>
                    <Subtext12>{text.Reverse}</Subtext12>
                    <Subtext13>{text.RevDate}</Subtext13>
                    <Subtext14>{text.reccure}</Subtext14>
                    <Subtext15>{text.feq}</Subtext15>
                    <Subtext18>{text.interval}</Subtext18>
                    <Subtext16>{text.recDate}</Subtext16>
                    {/* <Subtext17>{text.RecDate2}</Subtext17> */}
                  </Wrapit>
                );
              })}
            </CustomInfiniteScroll>
          </WrapperList>
        </Wrapper>
      </Container>
      {/* <Grab> */}
      {/* <BottomHeader>
        <Text>1-9 of 197</Text>
        <Section2>
         
          <Buttons>
            <Btn1 style={{ cursor: "pointer" }}>
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  width={"8px"}
                  height={"8px"}
                  src={left}
                  alt="i"
                />
              </div>
            </Btn1>
            <Tex>1/5</Tex>
            <Btn2 style={{ cursor: "pointer" }}>
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  width={"8px"}
                  height={"8px"}
                  src={right}
                  alt="i"
                />
              </div>
            </Btn2>
          </Buttons>
        </Section2>
      </BottomHeader> */}
      {/* </Grab> */}
    </>
  );
};

export default HeroSection;
