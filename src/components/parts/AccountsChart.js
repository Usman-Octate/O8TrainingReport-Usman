import React, { useState } from "react";
import styled from "styled-components";
import StatusButton from "../buttons/StatusButton";
import UpDownIcon from "../buttons/UpDownIcon";
import DropDownButton from "../buttons/DropDownButton";
import DropCloseIcon from "../buttons/DropCloseIcon";
// import ActiveButton from "../buttons/StatusButton";
import InfiniteScroll from "react-infinite-scroll-component";

const Wrapper = styled.div`
  @media (max-width: 1400px) {
    min-width: 80rem;
  }
`;

const Text1 = styled.input`
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  cursor: pointer;
`;
const SubHeading2 = styled.div``;

const Text2 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  text-align: left;
  color: #464f60cc;
  font-weight: 700;
  /* padding: 4px 0px; */
  margin-left: 3rem;
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
  margin-left: 3rem;
  /* width: 150px; */
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
  margin-left: 1.7rem;
  cursor: pointer;
  /* width: 170px; */
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
  margin-left: 3.2rem;
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
  margin-left: 4.3rem;
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
  margin-left: 4.9rem;
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
  margin-left: 5rem;
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
  padding: 15px 0px;
  margin-left: 5.6rem;
`;
const Text10 = styled.div`
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #464f60cc;
  font-weight: 700;
  padding: 10px 0px;
  margin-left: 5.5rem;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eef5ff;
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
  margin-left: 3rem;
  font-size: 12px;
  text-align: left;
  color: #464f60cc;
  width: 60px;
  height: 20px;
`;
const Subtext3 = styled.div`
  /* margin-left: 0rem; */
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Subtext4 = styled.div`
  margin-left: 3.2rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 90px;
  cursor: pointer;
`;
const Subtext5 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  margin-left: 50px;
  width: 50px;
`;
const Subtext6 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext7 = styled.div`
  margin-left: 2.6rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext8 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext9 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext10 = styled.div`
  margin-left: 2.5rem;
  font-size: 12px;
  text-align: center;
  color: #464f60cc;
  width: 100px;
`;
const Subtext = styled.input`
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  cursor: pointer;
`;
const Grab = styled.div``;

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
const Container = styled.div`
  border: 0.1px solid #464f601a;
  border-radius: 8px;
  box-shadow: 0px 0.702708125114441px 10.513540267944336px 0px #00000040;

  overflow-x: auto;
  overflow-y: hidden;
  /* width: 100vw; */
  @media (max-width: 935px) and (max-height: 432px) {
    width: 92vw;
  }
  @media (max-width: 435px) and (max-height: 935px) {
    width: 52.5rem;
  }
  /* @media (max-width: 1035px) and (max-height: 1375px) {
    width: 60rem;
  } */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AccountsChart = () => {
  const [isDrop, setIsDrop] = useState(null);

  const HandleOnClick = (index) => {
    setIsDrop(index === isDrop ? null : index);
  };

  const Data = [
    {
      id: 1,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Cash Account",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      number2: "NO",
      updown2: <UpDownIcon />,
      dropdown2: <DropDownButton />,
      code2: "Account Code",
      description2: "Account Description",
      status2: "Status",
      category2: "Category",
      type: "Account Type",
      balance2: "Balance",
      balanceFc2: "Balance FC",
      project2: "Project",
      id2: "ID",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 2,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 3,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 4,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 5,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 6,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 7,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 8,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 9,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 10,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 11,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
    {
      id: 12,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",

      // dropdown2: DropDown ? <DropCloseIcon /> : <DropDownButton />,
    },
  ]);

  const DropdownData = [
    {
      id: 1,
      code: "10010",
      description: "Current Asset",
      status: "Active",
      category: "Asset",
      balance: "$900.00",
      balanceFc: "$300.00",
      project: "Cash Account",
    },
  ];
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
    <Container>
      <Wrapper>
        {Data.map((item, index) => {
          return (
            <Head key={index}>
              <Text1 type="checkbox"></Text1>
              <Text2>{item.id2}</Text2>
              <Text3>
                {item.dropdown2} {item.code2} {item.updown2}
              </Text3>
              <Text4>{item.description2}</Text4>
              <Text5>{item.status2}</Text5>
              <Text6>{item.category2}</Text6>
              <Text7>{item.type}</Text7>
              <Text8>{item.balance2}</Text8>
              <Text9>{item.balanceFc2}</Text9>
              <Text10>{item.project2}</Text10>
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
                <Grab key={i}>
                  <Wrapit>
                    <Subtext1 type="checkbox"></Subtext1>
                    <Subtext2>{text.id}</Subtext2>
                    <Subtext3 onClick={() => HandleOnClick(i)}>
                      {isDrop === i ? <DropDownButton /> : <DropCloseIcon />}
                      {text.code}
                    </Subtext3>
                    <Subtext4>{text.description}</Subtext4>
                    <Subtext5>{text.status}</Subtext5>
                    <Subtext6>{text.category}</Subtext6>
                    <Subtext7>{text.project}</Subtext7>
                    <Subtext8>{text.balance}</Subtext8>
                    <Subtext9>{text.balanceFc}</Subtext9>
                    <Subtext10>{text.project}</Subtext10>
                  </Wrapit>
                  {isDrop === i &&
                    DropdownData.map((item, index) => {
                      return (
                        <SubHeading2 key={index}>
                          <Subtext type="checkbox"></Subtext>
                          <Subtext1>{item.id}</Subtext1>
                          <Subtext2>
                            {item.dropdown2}
                            {item.code}
                          </Subtext2>
                          <Subtext3>{item.description}</Subtext3>
                          <Subtext4>{item.status}</Subtext4>
                          <Subtext8>{item.category}</Subtext8>
                          <Subtext9>{item.project}</Subtext9>
                          <Subtext5>{item.balance}</Subtext5>
                          <Subtext6>{item.balanceFc}</Subtext6>
                          <Subtext7>{item.project}</Subtext7>
                        </SubHeading2>
                      );
                    })}
                </Grab>
              );
            })}
          </CustomInfiniteScroll>
        </WrapperList>
      </Wrapper>
    </Container>
  );
};

export default AccountsChart;
