import React, { useState } from "react";
import left from "../../../assets2/ChartOfAccountNew/PageLeft.svg";
import right from "../../../assets2/ChartOfAccountNew/PaegRight.svg";
import styled from "styled-components";
import UpDownIcon from "../../buttons/UpDownIcon";
import InfiniteScroll from "react-infinite-scroll-component";
const Wrapper = styled.div`
  min-width: 90vw;
  @media (max-width: 2020px) {
    min-width: 150rem;
  }
`;
const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  /* border: 0.1px solid #464f601a; */
  border-radius: 8px;
  box-shadow: 0px 0.702708125114441px 10.513540267944336px 0px #00000040;
  /* margin-bottom: 20px; */
  @media (max-width: 935px) and (max-height: 435px) {
    width: 92vw;
  }
  @media (max-width: 435px) and (max-height: 935px) {
    width: 52.5rem;
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
  margin-left: 2.1rem;
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
  margin-left: 6.5rem;
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
  margin-left: 7.5rem;
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
  margin-left: 5.4rem;
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
  margin-left: 4.2rem;
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
  margin-left: 5.8rem;
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
  margin-left: 5.3rem;
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
  margin-left: 5.3rem;
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
  margin-left: 5.8rem;
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
  margin-left: 6.2rem;
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
  margin-left: 6.1rem;
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
  margin-left: 5.8rem;
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
  margin-left: 2.1rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 60px;
  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
`;
const Subtext3 = styled.div`
  margin-left: 0.5rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 100px;
  display: flex;
  flex-direction: column;
  /* background-color: #00ff00; */
`;
const Subtext4 = styled.div`
  margin-left: 5.9rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 140px;
  cursor: pointer;
  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
`;
const Subtext5 = styled.div`
  margin-left: 0.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 110px;
  /* background-color: #00ff00; */
`;
const Subtext7 = styled.div`
  margin-left: 7.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 50px;
  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
`;
const Subtext8 = styled.div`
  margin-left: 6.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
`;
const Subtext9 = styled.div`
  margin-left: 4.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 70px;
  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
`;
const Subtext10 = styled.div`
  margin-left: 2.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 130px;
  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
`;
const Subtext11 = styled.div`
  margin-left: 2.8rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext12 = styled.div`
  margin-left: 4.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext13 = styled.div`
  margin-left: 3.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext14 = styled.div`
  margin-left: 5.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext15 = styled.div`
  margin-left: 2.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext16 = styled.div`
  margin-left: 2.5rem;
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
  gap: 28px;
  text-align: center;
`;

const Pages = styled.div`
  display: flex;
  align-items: left;
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
  margin-bottom: 15px;
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

const HeroSection = () => {
  const HeaderData = [
    {
      id: "ID",
      custom: "Customer",
      name: "Customer Name",
      note: "Credit Note No.",
      Curr: "Currency",
      date: "Posting Date",
      due: "Due Date",
      contact: "Contact Name",
      person: "Sales Agent",
      ship: "Shipping",
      uprdown: <UpDownIcon />,
      Trans: "Transaction Date",
      ammount: "Amount",
      ammountfc: "Amount FC",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 2,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 3,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 4,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 5,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 6,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 7,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 8,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 9,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
    },
    {
      id: 10,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      name: "Madison rodriguez",
      note: "0001",
      curr: "USD",
      date: "12 February 2024",
      due: "15 January 2024",
      contact: "(888)538-6676",
      person: "USD",
      FullFoam: "United States Dollar",
      ammount: "$3243242",
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
                <Text2>{item.id}</Text2>
                <Text3>
                  {item.custom}
                  {item.uprdown}
                </Text3>

                <Text5>
                  {item.note}
                  {item.uprdown}
                </Text5>
                <Text6>{item.Curr}</Text6>
                <Text12>
                  {item.Trans}
                  {item.uprdown}
                </Text12>
                <Text7>
                  {item.date}
                  {item.uprdown}
                </Text7>
                <Text8>
                  {item.due}
                  {item.uprdown}
                </Text8>
                <Text9>
                  {item.contact}
                  {item.uprdown}
                </Text9>
                <Text10>{item.person}</Text10>
                <Text11>{item.ship}</Text11>
                <Text12>{item.ammount}</Text12>
                <Text13>{item.ammountfc}</Text13>
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
                    <Subtext3>
                      <One>{text.code}</One>
                      <Two>{text.subHeading}</Two>
                    </Subtext3>

                    <Subtext7>{text.note}</Subtext7>
                    <Subtext9>
                      <Wrap>
                        <One>{text.curr}</One>
                        <Two>{text.ammount}</Two>
                      </Wrap>
                      <Three>{text.FullFoam}</Three>
                    </Subtext9>
                    <Subtext8>{text.date}</Subtext8>
                    <Subtext14>{text.date}</Subtext14>

                    <Subtext10>{text.due}</Subtext10>
                    <Subtext11>{text.contact}</Subtext11>
                    <Subtext12>{text.person}</Subtext12>
                    <Subtext13>{text.person}</Subtext13>
                    <Subtext16>{text.ammount}</Subtext16>
                    <Subtext15>{text.ammount}</Subtext15>
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
      </BottomHeader>*/}
    </>
  );
};

export default HeroSection;
