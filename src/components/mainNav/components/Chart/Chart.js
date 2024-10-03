import React from "react";
import styled from "styled-components";

const Text = styled.div`
  color: #464f60cc;
  font-weight: 700;
  font-size: 12px;
`;
const Head = styled.div``;
const Wrapper = styled.div``;
const Subtext = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #464f60cc;
  padding: 5px 0;
`;
const One = styled.div``;
const Two = styled.div`
  font-size: 12px;
`;
const Container = styled.div`
  display: flex;
  gap: 50px;
`;
const Wrap = styled.div``;
const Second = styled.div``;

const Third = styled.div``;

const Fourth = styled.div``;

const Fifth = styled.div``;

const Sixth = styled.div``;
const Seventh = styled.div``;
const Eight = styled.div``;

const Ninth = styled.div``;
const Tenth = styled.div``;

const Chart = (props) => {
  const Data1 = [
    {
      Heading: "ID",
      number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ];

  const Data2 = [
    {
      Heading: "Customer Code",
      code: ["OCEC008", "OCEC008", "OCEC008", "OCEC008"],
      subHeading: "Orchestrate",
    },
  ];

  const Data4 = [
    {
      Heading: "Customer Name",
      names: [
        "Richards",
        "Richards",
        "Richards",
        "Richards",
        "Richards",
        "Richards",
      ],
    },
  ];

  const Data5 = [
    {
      Heading: "Credit Note No.",
      numbers: ["001", "001", "001", "001", "001", "001", "001"],
    },
  ];

  const Data6 = [
    {
      Heading: "Currency",
      Money: ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"],
    },
  ];

  const Data7 = [
    {
      Heading: "Posting Date",
      Date: [
        "11 February 2024",
        "11 February 2024",
        "11 February 2024",
        "11 February 2024",
        "11 February 2024",
      ],
    },
  ];

  const Data8 = [
    {
      Heading: "Due Date",
      date: [
        "12 January 2024",
        "12 January 2024",
        "12 January 2024",
        "12 January 2024",
        "12 January 2024",
        "12 January 2024",
        "12 January 2024",
      ],
    },
  ];
  const Data9 = [
    {
      Heading: "Contact Name",
      contact: [
        "(888)538-6676",
        "(888)538-6676",
        "(888)538-6676",
        "(888)538-6676",
        "(888)538-6676",
        "(888)538-6676",
      ],
    },
  ];

  const Data10 = [
    {
      Heading: "Saleperson",
      Money: ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"],
    },
  ];
  const Data11 = [
    {
      Heading: "Shipping",
      Money: ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"],
    },
  ];

  return (
    <Container>
      <Wrapper>
        {Data1.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.number.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>{value}</Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Wrapper>
      <Second>
        {Data2.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.code.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                      <Two>{item.subHeading}</Two>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Second>
      <Third>
        {Data4.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.names.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Third>
      <Fourth>
        {Data5.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.numbers.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Fourth>
      <Fifth>
        {Data6.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.Money.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Fifth>
      <Sixth>
        {Data7.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.Date.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Sixth>
      <Seventh>
        {Data8.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.date.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Seventh>
      <Eight>
        {Data9.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.contact.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Eight>
      <Ninth>
        {Data10.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.Money.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Ninth>
      <Tenth>
        {Data11.map((item, index) => {
          return (
            <Head key={index}>
              <Text>{item.Heading}</Text>
              {item.Money.map((value, idx) => {
                return (
                  <Wrap key={idx}>
                    <Subtext>
                      <One>{value}</One>
                    </Subtext>
                  </Wrap>
                );
              })}
            </Head>
          );
        })}
      </Tenth>
    </Container>
  );
};

export default Chart;
