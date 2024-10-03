import React, { useState } from "react";
import styled from "styled-components";
import UpDownIcon from "../../buttons/UpDownIcon";
// import PostedButton from "../../buttons/PostedButton";
// import ActiveButton from "../../buttons/StatusButton";
import InfiniteScroll from "react-infinite-scroll-component";
import StatusButton from "../../buttons/StatusButton";

const Wrapper = styled.div`
  width: 170rem;
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
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: "Status",
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
    },
  ];

  const [data, setData] = useState([
    {
      id: "ID",
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: <StatusButton value={"Active"} />,
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
    },
    {
      id: "ID",
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: <StatusButton value={"Active"} />,
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
    },
    {
      id: "ID",
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: <StatusButton value={"Active"} />,
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
    },
    {
      id: "ID",
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: <StatusButton value={"Active"} />,
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
    },
    {
      id: "ID",
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: <StatusButton value={"Active"} />,
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
    },
    {
      id: "ID",
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: <StatusButton value={"Active"} />,
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
    },
    {
      id: "ID",
      locationr: "Location & Racks",
      locationd: "Locations & Description",
      product: "Product Count",
      address: "Address",
      city: "City",
      country: "Country",
      status: <StatusButton value={"Active"} />,
      contact: "Contact Person",
      email: "Email Address",
      number: "Mobile Number",
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
                <Text2 width={"50px"}>{item.id}</Text2>
                <Text2 width={"150px"}>
                  {item.locationr}
                  {item.updown}
                </Text2>{" "}
                <Text2 width={"150px"}>{item.locationd}</Text2>
                <Text2 width={"100px"}>{item.product}</Text2>
                <Text2 width={"100px"}>{item.address}</Text2>
                <Text2 width={"100px"}>{item.city}</Text2>
                <Text2 width={"100px"}>{item.country}</Text2>
                <Text2 width={"100px"}>{item.status}</Text2>
                <Text2 width={"100px"}>{item.contact}</Text2>
                <Text2 width={"100px"}>{item.email}</Text2>
                <Text2 width={"100px"}>{item.number}</Text2>
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
                    <Subtext2 width={"50px"}>{text.id}</Subtext2>
                    <Subtext2 width={"150px"}>{text.locationr}</Subtext2>
                    <Subtext2 width={"150px"}>{text.locationd}</Subtext2>
                    <Subtext2 width={"100px"}>{text.product}</Subtext2>
                    <Subtext2 width={"100px"}>{text.address}</Subtext2>

                    <Subtext2 width={"100px"}>{text.city}</Subtext2>
                    <Subtext2 width={"100px"}>{text.country}</Subtext2>
                    <Subtext2 width={"100px"}>{text.status}</Subtext2>
                    <Subtext2 width={"100px"}>{text.contact}</Subtext2>
                    <Subtext2 width={"100px"}>{text.email}</Subtext2>
                    <Subtext2 width={"100px"}>{text.number}</Subtext2>
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

export default HeroSection;
