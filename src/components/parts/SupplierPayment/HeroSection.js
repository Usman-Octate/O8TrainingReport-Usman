import React, { useState } from "react";
import styled from "styled-components";
// import SalesActive from "../../buttons/SalesActive";
// import left from "../../../assets2/ChartOfAccountNew/PageLeft.svg";
// import right from "../../../assets2/ChartOfAccountNew/PaegRight.svg";
import UpDownIcon from "../../buttons/UpDownIcon";
// import PostedButton from "../../buttons/PostedButton";
// import ActiveButton from "../../buttons/StatusButton";
import InfiniteScroll from "react-infinite-scroll-component";
import StatusButton from "../../buttons/StatusButton";

const Wrapper = styled.div`
  min-width: 290vh;
  @media (max-width: 2020px) {
    min-width: 160rem;
  }
`;
const Container = styled.div`
  overflow-x: auto;
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
  justify-content: left;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 2.1rem; */
  width: 50px;
`;
const Text3 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  width: 100px;
  /* margin-left: 4.7rem; */
`;
const Text4 = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 10.3rem; */
  cursor: pointer;
  width: 250px;
  /* background-color: #00ff00; */
  text-align: center;
`;
const Text5 = styled.div`
  font-size: 12px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 0.2rem; */
  /* background-color: #00ff00; */
  width: 150px;
`;
const Text6 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 5.1rem; */
  width: 150px;
  /* background-color: #00ff00; */
`;
const Text7 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 5.7rem; */
  width: 110px;
  /* background-color: #00ff00; */
`;
const Text16 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 5.7rem; */
  width: 150px;
  /* background-color: #00ff00; */
`;
const Text8 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 5.3rem; */
  cursor: pointer;
  width: 100px;
`;
const Text9 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  /* margin-left: 5.5rem; */
  width: 150px;
`;
const Text10 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  /* margin-left: 6.9rem; */
  width: 170px;
`;
const Text11 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;

  /* margin-left: 7.9rem; */
  width: 100px;
`;
const Text12 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;
  /* margin-left: 6.8rem; */
  width: 170px;
`;
const Text13 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;
  /* margin-left: 5.8rem; */
  width: 150px;
`;
const Text14 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 4px 0px;
  /* margin-left: 5.1rem; */
  width: 100px;
`;
const Text15 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #464f60cc;
  font-weight: 700;
  width: 100px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  background-color: #eef5ff;
  padding: 10px 0;
`;
const Wrapit = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #ffffff;
  border-bottom: 1px solid #464f601a;
  padding: 10px 0;
`;
const Subtext1 = styled.input`
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  cursor: pointer;
  /* width: 150px; */
`;
const Subtext2 = styled.div`
  /* margin-left: 2rem; */
  font-size: 12px;
  text-align: left;
  color: #464f60cc;

  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
  width: 50px;
`;
const Subtext3 = styled.div`
  /* margin-left: 0.5rem; */
  font-size: 12px;
  text-align: left;
  color: #464f60cc;

  display: flex;
  flex-direction: column;
  /* background-color: #00ff00; */
  width: 100px;
`;
const Subtext4 = styled.div`
  /* margin-left: 5.8rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;

  cursor: pointer;
  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
  width: 250px;
`;
const Subtext5 = styled.div`
  /* margin-left: 2.4rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;

  /* background-color: #00ff00; */
  width: 100px;
`;
const Subtext6 = styled.div`
  /* margin-left: 4.3rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;

  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
  width: 150px;
`;
const Subtext7 = styled.div`
  /* margin-left: 3.9rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;

  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
  width: 150px;
`;
const Subtext8 = styled.div`
  /* margin-left: 3.8rem; */
  font-size: 12px;
  /* text-align: center; */
  color: #464f60cc;
  /* background-color: #00ff00; */
  width: 110px;
  /* background-color: #00ff00; */
`;
const Subtext9 = styled.div`
  /* margin-left: 3.2rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;

  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
  width: 150px;
`;
const Subtext10 = styled.div`
  /* margin-left: 3.6rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;

  /* background-color: #00ff00; */
  /* background-color: #00ff00; */
  width: 100px;
`;
const Subtext11 = styled.div`
  /* margin-left: 3rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 150px;
  /* background-color: #00ff00; */
`;
const Subtext12 = styled.div`
  /* margin-left: 2rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 170px;
  /* background-color: #00ff00; */
`;
const Subtext13 = styled.div`
  /* margin-left: 3.5rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  /* background-color: #00ff00; */
`;
const Subtext14 = styled.div`
  /* margin-left: 4rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 170px;
  /* background-color: #00ff00; */
`;
const Subtext15 = styled.div`
  /* margin-left: 4.1rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 150px;
  /* background-color: #00ff00; */
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
  /* overflow-y: auto; */
  height: 79vh;
  @media (max-height: 1013px) {
    height: 78vh;
  }
  @media (max-height: 962px) {
    height: 77vh;
  }
  @media (max-height: 931px) {
    height: 76vh;
  }
  @media (max-height: 880px) {
    height: 75vh;
  }
  @media (max-height: 851px) {
    height: 74vh;
  }
  @media (max-height: 815px) {
    height: 73vh;
  }
  @media (max-height: 750px) {
    height: 70vh;
  }
  @media (max-height: 670px) {
    height: 65vh;
  }
`;

const HeroSection = () => {
  const HeaderData = [
    {
      id: "ID",
      sup: "Supplier",
      order: "Payment Reference No.",
      liaison: "Liaison",
      Ref: "Extra Refrence No.",
      payment: "Payment Type",
      Transaction: "Transaction Date",
      Post: "Posting Date",
      due: "Validity Date",
      PO: "PO Amount",
      Currency: "Currency",
      updown: <UpDownIcon />,
      status: "Status",
      hold: "On Hold",
      status2: "Document Status",
      balance: "Balance",
      ammount2: "Total Amount",
      purchaser: "Purchaser",
      delivery: "Delivery Type",
      ammount: "Amount Paid",
      contact: "Contact Person",
      advance: "Advance Payment",
      project: "Project",
      deposit: "Deposit ID No.",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 2,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 3,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 4,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 5,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 6,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 7,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 8,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
    },
    {
      id: 9,
      code: "OCEC008",
      subHeading: "Revolutionize Cross Limited",
      order: "CR001001",
      bank: "Bank Transfer",
      purchase: "John Doe",
      Date: "11 February 2024",
      Due: "12 January 2024",
      person: "Salesperson",
      curr: "USD",
      ammount: "$ 11,101.586",
      status: <StatusButton value={"Posted"} />,
      FullFoam: "United States Dollar",
      hold: "Yes",
      active: "Active",
      type: "ground type",
      contact: "Contact Person Full Name 2",
      extra: "-",
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
                  {item.sup}
                  {item.updown}
                </Text3>
                <Text4>
                  {item.order}
                  {item.updown}
                </Text4>
                <Text15>{item.payment}</Text15>
                <Text5>
                  {item.Transaction}
                  {item.updown}
                </Text5>
                <Text6>
                  {item.Post}
                  {item.updown}
                </Text6>
                <Text7>{item.Currency}</Text7>
                <Text16>{item.ammount}</Text16>
                <Text8>
                  {item.status}
                  {item.updown}
                </Text8>
                <Text9>
                  {item.contact}
                  {item.updown}
                </Text9>
                <Text10>{item.advance}</Text10>
                <Text11>{item.project}</Text11>
                <Text12>{item.Ref}</Text12>
                <Text13>{item.deposit}</Text13>
              </Head>
            );
          })}
          <WrapperList>
            <CustomInfiniteScroll
              dataLength={data.length}
              next={fetchMoreData}
              height={"79vh"}
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
                    <Subtext4>{text.code}</Subtext4>
                    <Subtext5>{text.bank}</Subtext5>
                    <Subtext6>{text.Date}</Subtext6>
                    <Subtext7>{text.Date}</Subtext7>
                    <Subtext8>
                      <Wrap>
                        <One>{text.curr}</One>
                        <Three>{text.ammount}</Three>
                      </Wrap>
                      <Three>{text.FullFoam}</Three>
                    </Subtext8>
                    <Subtext9>{text.ammount}</Subtext9>
                    <Subtext10>{text.status}</Subtext10>
                    <Subtext11>{text.contact}</Subtext11>
                    <Subtext12>{text.hold}</Subtext12>
                    <Subtext13>{text.extra}</Subtext13>
                    <Subtext14>{text.extra}</Subtext14>
                    <Subtext15>{text.extra}</Subtext15>
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
