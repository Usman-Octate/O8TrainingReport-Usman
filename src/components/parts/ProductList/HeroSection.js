import React, { useState } from "react";
import styled from "styled-components";
import UpDownIcon from "../../buttons/UpDownIcon";
// import PostedButton from "../../buttons/PostedButton";
// import ActiveButton from "../../buttons/StatusButton";
import InfiniteScroll from "react-infinite-scroll-component";
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
  height: 76vh;
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
      photo: "photo",
      code: "Item Code",
      name: "Item Name",
      class: "Class",
      group: "Item Group",
      status: "Status",
      stock: "In Stock Qty",
      location: "Location",
      racks: "Racks",
      avail: "Available Qty",
      updown: <UpDownIcon />,

      qtypo: "QTY in PO",
      qtyso: "QTY in SO",
      baseprice: "Base Price",
      prefsup: "Preferred Supplier",
      valuation: "Valuation",
      alteritem: "Alternate Item",
      commitem: "Commission Item",
      stocking: "Stocking UOM",
    },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      photo: "photo",
      code: "OCEC008",
      itemname: "Gaming PC Intel i7 2400 2.5ghz",
      class: "Stock Item",
      group: "Laptop",
      active: "Active",
      qty: "2,835",
      location: "Warehouse 1",
      racks: "Area Level 3",
      availqty: "2,834",
      qtypo: "2,834",
      qtyso: "2,834",
      price: "$21.586",

      prefsup: "Sanpdragon",
      valuation: "Avergae",
      alteritm: "Gaming PC Intel",
      commitm: "Yes",
      stocking: "PCs",
    },
    {
      id: 2,
      photo: "photo",
      code: "OCEC008",
      itemname: "Gaming PC Intel",
      class: "Stock Item",
      group: "Laptop",
      active: "Active",
      qty: "2,835",
      location: "Warehouse 1",
      racks: "Area Level 3",
      availqty: "2,834",
      qtypo: "2,834",
      qtyso: "2,834",
      price: "$21.586",

      prefsup: "Sanpdragon",
      valuation: "Avergae",
      alteritm: "Gaming PC Intel",
      commitm: "Yes",
      stocking: "PCs",
    },
    {
      id: 3,
      photo: "photo",
      code: "OCEC008",
      itemname: "Gaming PC Intel",
      class: "Stock Item",
      group: "Laptop",
      active: "Active",
      qty: "2,835",
      location: "Warehouse 1",
      racks: "Area Level 3",
      availqty: "2,834",
      qtypo: "2,834",
      qtyso: "2,834",
      price: "$21.586",

      prefsup: "Sanpdragon",
      valuation: "Avergae",
      alteritm: "Gaming PC Intel",
      commitm: "Yes",
      stocking: "PCs",
    },
    {
      id: 4,
      photo: "photo",
      code: "OCEC008",
      itemname: "Gaming PC Intel",
      class: "Stock Item",
      group: "Laptop",
      active: "Active",
      qty: "2,835",
      location: "Warehouse 1",
      racks: "Area Level 3",
      availqty: "2,834",
      qtypo: "2,834",
      qtyso: "2,834",
      price: "$21.586",

      prefsup: "Sanpdragon",
      valuation: "Avergae",
      alteritm: "Gaming PC Intel",
      commitm: "Yes",
      stocking: "PCs",
    },
    {
      id: 5,
      photo: "photo",
      code: "OCEC008",
      itemname: "Gaming PC Intel",
      class: "Stock Item",
      group: "Laptop",
      active: "Active",
      qty: "2,835",
      location: "Warehouse 1",
      racks: "Area Level 3",
      availqty: "2,834",
      qtypo: "2,834",
      qtyso: "2,834",
      price: "$21.586",

      prefsup: "Sanpdragon",
      valuation: "Avergae",
      alteritm: "Gaming PC Intel",
      commitm: "Yes",
      stocking: "PCs",
    },
    {
      id: 6,
      photo: "photo",
      code: "OCEC008",
      itemname: "Gaming PC Intel",
      class: "Stock Item",
      group: "Laptop",
      active: "Active",
      qty: "2,835",
      location: "Warehouse 1",
      racks: "Area Level 3",
      availqty: "2,834",
      qtypo: "2,834",
      qtyso: "2,834",
      price: "$21.586",

      prefsup: "Sanpdragon",
      valuation: "Avergae",
      alteritm: "Gaming PC Intel",
      commitm: "Yes",
      stocking: "PCs",
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
                <Text2 width={"80px"}>{item.photo}</Text2>
                <Text2 width={"80px"}>
                  {item.code}
                  {item.updown}
                </Text2>
                <Text2 width={"170px"}>
                  {item.name}
                  {item.updown}
                </Text2>
                <Text2 width={"100px"}>
                  {item.class}
                  {item.updown}
                </Text2>
                <Text2 width={"100px"}>
                  {item.group}
                  {item.updown}
                </Text2>
                <Text2 width={"100px"}>{item.status}</Text2>
                <Text2 width={"100px"}>{item.stock}</Text2>
                <Text2 width={"100px"}>{item.location}</Text2>
                <Text2 width={"100px"}>{item.racks}</Text2>
                <Text2 width={"100px"}>{item.avail}</Text2>
                <Text2 width={"100px"}>{item.qtypo}</Text2>
                <Text2 width={"100px"}>{item.qtyso}</Text2>
                <Text2 width={"100px"}>{item.baseprice}</Text2>
                <Text2 width={"100px"}>{item.prefsup}</Text2>
                <Text2 width={"100px"}>{item.valuation}</Text2>
                <Text2 width={"170px"}>{item.alteritem}</Text2>
                <Text2 width={"100px"}>{item.commitem}</Text2>
                <Text2 width={"100px"}>{item.stocking}</Text2>
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
                    <Subtext2 width={"80px"}>{text.photo}</Subtext2>
                    <Subtext2 width={"80px"}>{text.code}</Subtext2>
                    <Subtext2 width={"170px"}>{text.itemname}</Subtext2>
                    <Subtext2 width={"100px"}>{text.class}</Subtext2>

                    <Subtext2 width={"100px"}>{text.group}</Subtext2>
                    <Subtext2 width={"100px"}>{text.active}</Subtext2>
                    <Subtext2 width={"100px"}>{text.qty}</Subtext2>
                    <Subtext2 width={"100px"}>{text.location}</Subtext2>
                    <Subtext2 width={"100px"}>{text.racks}</Subtext2>
                    <Subtext2 width={"100px"}>{text.availqty}</Subtext2>
                    <Subtext2 width={"100px"}>{text.qtypo}</Subtext2>
                    <Subtext2 width={"100px"}>{text.qtyso}</Subtext2>
                    <Subtext2 width={"100px"}>{text.price}</Subtext2>
                    <Subtext2 width={"100px"}>{text.prefsup}</Subtext2>
                    <Subtext2 width={"100px"}>{text.valuation}</Subtext2>
                    <Subtext2 width={"170px"}>{text.alteritm}</Subtext2>
                    <Subtext2 width={"100px"}>{text.commitm}</Subtext2>
                    <Subtext2 width={"100px"}>{text.stocking}</Subtext2>
                    {/* <Subtext15>{text.ammount}</Subtext15> */}
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
