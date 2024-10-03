import React, { useState } from "react";
import styled from "styled-components";
import UpDownIcon from "../../buttons/UpDownIcon";
// import Header from "../Header";
import left from "../../../assets2/ChartOfAccountNew/PageLeft.svg";
import right from "../../../assets2/ChartOfAccountNew/PaegRight.svg";
import dropdown2 from "../../../assets2/ChartOfAccountNew/dropIcon.svg";
// import StatusButton from "../../buttons/StatusButton";
// import ActiveButton from "../../buttons/StatusButton";
// import ApprovalButton from "../../buttons/ApprovalButton";
// import SalesActive from "../../buttons/SalesActive";
// import PostedButton from "../../buttons/PostedButton";
import InfiniteScroll from "react-infinite-scroll-component";
import StatusButton from "../../buttons/StatusButton";
const Wrapper = styled.div`
  min-width: 90rem;
  @media (max-width: 1520px) {
    min-width: 90rem;
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
  margin-left: 7.5rem;
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
  margin-left: 9.4rem;
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
  margin-left: 8.3rem;
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
  margin-left: 8.5rem;
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
  margin-left: 7.8rem;
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
  margin-left: 7.9rem;
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
  margin-left: 5.6rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 90px;
`;
const Subtext4 = styled.div`
  margin-left: 6rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 170px;
  cursor: pointer;
`;
const Subtext5 = styled.div`
  margin-left: 3.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext6 = styled.div`
  margin-left: 5.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  /* width: 100px; */
`;
const Subtext7 = styled.div`
  margin-left: 5.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  /* width: 150px; */
`;
const Subtext8 = styled.div`
  margin-left: 6.2rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 170px;
`;
const Subtext9 = styled.div`
  margin-left: 4.4rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 170px;
  display: flex;
  flex-direction: column;
`;
const Subtext10 = styled.div`
  margin-left: 5.1rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;

const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
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
const Img = styled.img``;
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
const Grab = styled.div``;

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
  /* overflow-y: auto; */
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
  /* border: 0.1px solid #464f601a; */
  border-radius: 8px;
  box-shadow: 0px 0.702708125114441px 10.513540267944336px 0px #00000040;
  @media (max-width: 935px) and (max-height: 435px) {
    width: 92vw;
  }
  @media (max-width: 435px) and (max-height: 935px) {
    width: 52.5rem;
  }
  /* @media (max-width: 1035px) and (max-height: 1375px) {
    width: 60rem;
  }
  @media (max-width: 1370px) and (max-height: 1024px) {
    width: 80.7rem;
  } */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const InnerView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
`;

const One = styled.div`
  color: #808080;
  font-weight: 700;
  font-size: 12px;
`;
const Two = styled.div`
  color: #464f6080;
  font-size: 12px;
`;

const HeroSection = () => {
  const HeaderData = [
    {
      id: 1,
      CustomerId: "ID",
      Code: "Forecast Code",
      desc: "Description",
      date: "Date",
      Net: "Net",
      flow: "Workflow",
      status: "Status",
      UpDown: <UpDownIcon />,
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      Code: "YEAREND2022",
      desc: "Fiscal Year 2022 Annual Budget",
      date: "31 Dec 2022",
      net: "$184,032.00",
      approve: <StatusButton value={"Approved"} />,
      status: <StatusButton value={"Posted"} />,
    },
    {
      id: 2,
      Code: "YEAREND2022",
      desc: "Fiscal Year 2022 Annual Budget",
      date: "31 Dec 2022",
      net: "$184,032.00",
      approve: <StatusButton value={"Approved"} />,
      status: <StatusButton value={"Posted"} />,
    },
    {
      id: 3,
      Code: "YEAREND2022",
      desc: "Fiscal Year 2022 Annual Budget",
      date: "31 Dec 2022",
      net: "$184,032.00",
      approve: <StatusButton value={"Approved"} />,
      status: <StatusButton value={"Posted"} />,
    },
    {
      id: 4,
      Code: "YEAREND2022",
      desc: "Fiscal Year 2022 Annual Budget",
      date: "31 Dec 2022",
      net: "$184,032.00",
      approve: <StatusButton value={"Approved"} />,
      status: <StatusButton value={"Posted"} />,
    },
    {
      id: 5,
      Code: "YEAREND2022",
      desc: "Fiscal Year 2022 Annual Budget",
      date: "31 Dec 2022",
      net: "$184,032.00",
      approve: <StatusButton value={"Approved"} />,
      status: <StatusButton value={"Posted"} />,
    },
    {
      id: 6,
      Code: "YEAREND2022",
      desc: "Fiscal Year 2022 Annual Budget",
      date: "31 Dec 2022",
      net: "$184,032.00",
      approve: <StatusButton value={"Approved"} />,
      status: <StatusButton value={"Posted"} />,
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
                <Text2>{item.CustomerId}</Text2>
                <Text3>
                  {item.Code}
                  {item.UpDown}
                </Text3>
                <Text4>{item.desc}</Text4>
                <Text5>
                  {item.date}
                  {item.UpDown}
                </Text5>
                <Text6>{item.Net}</Text6>
                <Text7>{item.flow}</Text7>
                <Text8>{item.status}</Text8>
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
                    <Subtext3>{text.Code}</Subtext3>
                    <Subtext4>{text.desc}</Subtext4>
                    <Subtext5>{text.date}</Subtext5>
                    <Subtext6>{text.net}</Subtext6>
                    <Subtext7>{text.approve}</Subtext7>
                    <Subtext8>{text.status}</Subtext8>
                  </Wrapit>
                );
              })}
            </CustomInfiniteScroll>
          </WrapperList>
        </Wrapper>
      </Container>
      {/* <BottomHeader>
        <Text>1-9 of 197</Text>
        <Section2>
          
          <Buttons>
            <Btn1 style={{ cursor: "pointer" }}>
              <div>
                <img
                  style={{ cursor: "pointer" }}
                  height={"8px"}
                  width={"8px"}
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
                  height={"8px"}
                  width={"8px"}
                  src={right}
                  alt="i"
                />
              </div>
            </Btn2>
          </Buttons>
        </Section2>
      </BottomHeader> */}
    </>
  );
};

export default HeroSection;
