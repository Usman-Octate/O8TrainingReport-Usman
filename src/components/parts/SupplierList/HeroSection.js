import React, { useState } from "react";
import styled from "styled-components";

import UpDownIcon from "../../buttons/UpDownIcon";
import ActiveButton from "../../buttons/StatusButton";
import PageIcons from "../../buttons/PageIcons";
import InfiniteScroll from "react-infinite-scroll-component";
import StatusButton from "../../buttons/StatusButton";
const Wrapper = styled.div`
  min-width: 250vh;
  @media (max-width: 2020px) {
    min-width: 160rem;
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
  /* @media (max-width: 1035px) and (max-height: 1375px) {
    width: 45rem;
  }
  @media (max-width: 1370px) and (max-height: 1024px) {
    width: 80.7rem;
  } */
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
  margin-left: 3.7rem;
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
  margin-left: 5.3rem;
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
  margin-left: 8.5rem;
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
  margin-left: 7.6rem;
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
  margin-left: 8.4rem;
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
  margin-left: 7.5rem;
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
  margin-left: 6.5rem;
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
  margin-left: 9.8rem;
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
  margin-left: 9.5rem;
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
  margin-left: 6.5rem;
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
  margin-left: 6.5rem;
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
  margin-left: 6.5rem;
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
  margin-left: 6.5rem;
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
  margin-left: 0.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext3 = styled.div`
  margin-left: 1.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext4 = styled.div`
  margin-left: 3.7rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 180px;
  cursor: pointer;
  /* background-color: #00ff00; */
`;
const Subtext5 = styled.div`
  margin-left: 0.8rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 200px;
`;
const Subtext6 = styled.div`
  margin-left: 0rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 110px;
  /* background-color: #00ff00; */
`;
const Subtext7 = styled.div`
  margin-left: 2.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 140px;
  /* background-color: #00ff00; */
`;
const Subtext8 = styled.div`
  margin-left: 4.8rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 150px;
  /* background-color: #00ff00; */
`;
const Subtext9 = styled.div`
  margin-left: 4.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext10 = styled.div`
  margin-left: 2.4rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 200px;
  /* background-color: #00ff00; */
`;
const Subtext11 = styled.div`
  margin-left: 3.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext12 = styled.div`
  margin-left: 3.8rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext13 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  /* font-weight: 700; */
  padding: 4px 0px;
  margin-left: 5.3rem;
`;
const Subtext14 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  /* font-weight: 700; */
  padding: 4px 0px;
  margin-left: 6.6rem;
`;
const Subtext15 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  /* font-weight: 700; */
  padding: 4px 0px;
  margin-left: 6.9rem;
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
     width: 21.5rem;
  }
`;
const Grab = styled.div``;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
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
      code: "Supplier",
      name: "Supplier Name",
      address: "Address",
      city: "City",
      country: "Country",
      date: "Onboarding Date",
      person: "Contact Person",
      email: "Email",
      number: "Phone Number",
      status: "Status",
      Updown: <UpDownIcon />,
      currency: "Currency",
      balance: "Balance",
      group: "Supplier Group",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
    },
    {
      id: 2,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
    },
    {
      id: 3,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
    },
    {
      id: 4,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
    },
    {
      id: 5,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
    },
    {
      id: 6,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
    },
    {
      id: 7,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
    },
    {
      id: 8,
      code: "FH100012",
      names: "Upward-Trending Conglomerate",
      email: "thompson.napoleon@blanda.com",
      address: "447 Cambridge Ave",
      city: "Lost Angeles",
      country: "United States of America",
      date: "08 Aug 2023",
      person: "Komal Tarun Sharaf",
      base: "Sales Invoice",
      number: "+63 917 2732 21",
      status: <StatusButton value={"Active"} />,
      currency: "USD",
      balance: "$11,101.568",
      group: "954659",
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
                  {item.code}
                  {item.Updown}
                </Text3>
                <Text4>
                  {item.name}
                  {item.Updown}
                </Text4>
                <Text5>{item.address}</Text5>
                <Text6>{item.city}</Text6>
                <Text7>{item.country}</Text7>
                <Text8>
                  {item.date}
                  {item.Updown}
                </Text8>
                <Text9>{item.person}</Text9>
                <Text10>{item.email}</Text10>
                <Text11>{item.number}</Text11>
                <Text12>{item.status}</Text12>
                <Text13>{item.currency}</Text13>
                <Text14>{item.balance}</Text14>
                <Text15>{item.group}</Text15>
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
                    <Subtext3>{text.code}</Subtext3>
                    <Subtext4>{text.names}</Subtext4>
                    <Subtext5>{text.address}</Subtext5>
                    <Subtext6>{text.city}</Subtext6>
                    <Subtext7>{text.country}</Subtext7>
                    <Subtext9>{text.date}</Subtext9>
                    <Subtext8>{text.person}</Subtext8>
                    <Subtext10>{text.email}</Subtext10>
                    <Subtext11>{text.number}</Subtext11>
                    <Subtext12>{text.status}</Subtext12>
                    <Subtext13>{text.currency}</Subtext13>
                    <Subtext14>{text.balance}</Subtext14>
                    <Subtext15>{text.group}</Subtext15>
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
            <PageIcons state={true} />
            <Tex>1/5</Tex>
            <PageIcons />
          </Buttons>
        </Section2>
      </BottomHeader> */}
    </>
  );
};

export default HeroSection;
