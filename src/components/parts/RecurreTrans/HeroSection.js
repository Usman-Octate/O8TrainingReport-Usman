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
  min-width: 240rem;
  @media (max-width: 1520px) {
    min-width: 190rem;
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
  margin-left: 5.2rem;
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
  margin-left: 5.5rem;
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
  margin-left: 5.5rem;
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
  margin-left: 4.7rem;
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
  margin-left: 5.4rem;
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
  margin-left: 5rem;
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
  margin-left: 8.5rem;
`;
const Text20 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  margin-left: 4.9rem;
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
  margin-left: 7.5rem;
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
  margin-left: 5rem;
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
  margin-left: 4.7rem;
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
  margin-left: 3rem;
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
  margin-left: 5rem;
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
  margin-left: 5rem;
`;
const Text19 = styled.div`
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
  margin-left: 1.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 150px;
`;
const Subtext4 = styled.div`
  margin-left: 2.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  cursor: pointer;
`;
const Subtext5 = styled.div`
  margin-left: 3.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 130px;
`;
const Subtext6 = styled.div`
  margin-left: 4.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext7 = styled.div`
  margin-left: 2.9rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext8 = styled.div`
  margin-left: 1.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 110px;
  /* background-color: #00ff00; */
`;
const Subtext9 = styled.div`
  margin-left: 2.1rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 170px;
  /* background-color: #00ff00; */
`;
const Subtext10 = styled.div`
  margin-left: 1.6rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext20 = styled.div`
  margin-left: 3.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext11 = styled.div`
  margin-left: 2.1rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext12 = styled.div`
  margin-left: 1.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext13 = styled.div`
  margin-left: 2.8rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext14 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext15 = styled.div`
  margin-left: 1.9rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext16 = styled.div`
  margin-left: 2.3rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext17 = styled.div`
  margin-left: 0.9rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext18 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext19 = styled.div`
  margin-left: 4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
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
  text-align: right;
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
  gap: 16px;
  text-align: center;
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
      type: "Transaction Type",
      Doc: "Source Doc No.",
      Doc2: "Document No.",
      Trans: "Transaction Date",
      post: "Posting Date",
      Curr: "Currency",
      Ammount: "Amount",
      status: "Status",
      Updown: <UpDownIcon />,
      Note: "Notes",
      interval: "Interval",
      Reverse: "Reverse",
      Date: "Reversal Date",
      Reccure: "Recurring",
      Freq: "Frequency",
      RecDate: "Reccurring Date",
      Ref: "Extra Ref No.",
      due: "Due Date",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      type: "Customer Payment",
      doc: "00001",
      doc2: "00002",
      transDate: "30 Feb 2023",
      post: "30 Jan 2023",
      Curr: "USD",
      ammount: "$ 0.093963",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Bank Transfer",
      Reverse: "No",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Semi-Annual",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/6",
      status2: "Posted",
      Ref: "932840",
      usd: "United State Dollar",
      due: "21 Mar 2023",
    },
    {
      id: 2,
      type: "Customer Payment",
      doc: "00001",
      doc2: "00002",
      transDate: "30 Feb 2023",
      post: "30 Jan 2023",
      Curr: "USD",
      ammount: "$ 0.093963",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Bank Transfer",
      Reverse: "No",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Semi-Annual",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/6",
      status2: "Posted",
      Ref: "932840",
      usd: "United State Dollar",
      due: "21 Mar 2023",
    },
    {
      id: 3,
      type: "Customer Payment",
      doc: "00001",
      doc2: "00002",
      transDate: "30 Feb 2023",
      post: "30 Jan 2023",
      Curr: "USD",
      ammount: "$ 0.093963",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Bank Transfer",
      Reverse: "No",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Semi-Annual",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/6",
      status2: "Posted",
      Ref: "932840",
      usd: "United State Dollar",
      due: "21 Mar 2023",
    },
    {
      id: 4,
      type: "Customer Payment",
      doc: "00001",
      doc2: "00002",
      transDate: "30 Feb 2023",
      post: "30 Jan 2023",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Bank Transfer",
      Reverse: "No",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Semi-Annual",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/6",
      status2: "Posted",
      Ref: "932840",
      usd: "United State Dollar",
      due: "21 Mar 2023",
    },
    {
      id: 5,
      type: "Customer Payment",
      doc: "00001",
      doc2: "00002",
      transDate: "30 Feb 2023",
      post: "30 Jan 2023",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Bank Transfer",
      Reverse: "No",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Semi-Annual",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/6",
      status2: "Posted",
      Ref: "932840",
      usd: "United State Dollar",
      due: "21 Mar 2023",
    },
    {
      id: 6,
      type: "Customer Payment",
      doc: "00001",
      doc2: "00002",
      transDate: "30 Feb 2023",
      post: "30 Jan 2023",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Bank Transfer",
      Reverse: "No",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Semi-Annual",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/6",
      status2: "Posted",
      Ref: "932840",
      usd: "United State Dollar",
      due: "21 Mar 2023",
    },
    {
      id: 7,
      type: "Customer Payment",
      doc: "00001",
      doc2: "00002",
      transDate: "30 Feb 2023",
      post: "30 Jan 2023",
      Curr: "USD",
      ammount: "$125,259.97",
      status: <StatusButton value={"Pending for Approval"} />,
      Note: "Bank Transfer",
      Reverse: "No",
      RevDate: "06 Sep 2023",
      reccure: "Yes",
      feq: "Semi-Annual",
      recDate: "21 Mar 2023",
      RecDate2: "Quartely",
      interval: "1/6",
      status2: "Posted",
      Ref: "932840",
      usd: "United State Dollar",
      due: "21 Mar 2023",
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
                <Text4>{item.Doc}</Text4>
                <Text5>{item.Doc2}</Text5>
                <Text6>
                  {item.Trans}
                  {item.Updown}
                </Text6>
                <Text7>
                  {item.post}
                  {item.Updown}
                </Text7>
                <Text20>
                  {item.due}
                  {item.Updown}
                </Text20>
                <Text8>{item.Curr}</Text8>
                <Text9>{item.Ammount}</Text9>
                <Text10>{item.status}</Text10>
                <Text11>{item.Reccure}</Text11>
                <Text12>{item.Freq}</Text12>
                <Text13>{item.interval}</Text13>
                <Text14>
                  {item.RecDate}
                  {item.Updown}
                </Text14>
                {/* <Text15>{item.status}</Text15> */}
                <Text16>{item.Ref}</Text16>
                <Text17>{item.Note}</Text17>
                <Text18>{item.Reverse}</Text18>
                <Text19>
                  {item.Date}
                  {item.Updown}
                </Text19>
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
                    <Subtext5>{text.doc2}</Subtext5>
                    <Subtext19>{text.transDate}</Subtext19>
                    <Subtext6>{text.post}</Subtext6>
                    <Subtext20>{text.due}</Subtext20>
                    <Subtext7>
                      <Wrap>
                        <One>{text.Curr}</One>
                        <Two>{text.ammount}</Two>
                      </Wrap>
                      <Three>{text.usd}</Three>
                    </Subtext7>
                    <Subtext8>{text.ammount}</Subtext8>
                    <Subtext9>{text.status}</Subtext9>
                    <Subtext10>{text.reccure}</Subtext10>
                    <Subtext11>{text.feq}</Subtext11>
                    <Subtext12>{text.interval}</Subtext12>
                    <Subtext13>{text.recDate}</Subtext13>
                    {/* <Subtext14>{text.status2}</Subtext14> */}
                    <Subtext15>{text.Ref}</Subtext15>
                    <Subtext16>{text.Note}</Subtext16>
                    <Subtext17>{text.Reverse}</Subtext17>
                    <Subtext18>{text.RevDate}</Subtext18>
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
