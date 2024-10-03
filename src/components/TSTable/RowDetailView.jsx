import styled from "styled-components";
import moment from "moment";
import React from "react";

const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.bgColor || "transparent"};
  text-align: ${(props) => props.textAlign || "left"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};
`;

const Box = styled.div`
  flex: ${(props) => props.flex || "1"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "0"};
  background-color: ${(props) => props.bgColor || "transparent"};
  border-radius: ${(props) => props.borderRadius || "0"};
  overflow: ${(props) => props.overflow || "visible"};
`;

const Image = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "cover"};
  border-radius: ${(props) => props.borderRadius || "0"};
`;

export default function RowDetailView({ user }) {
  return (
    <div>No data</div>
    // <Flex
    //   // height="150px"
    //   gap="16px"
    //   padding="16px"
    //   bgColor="#f9f9f9"
    //   borderRadius="8px"
    //   boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    // >
    //   {/* <Box width="150px" borderRadius="8px" overflow="hidden">
    //     <Image
    //       src={user.avatar}
    //       height="100%"
    //       width="100%"
    //       borderRadius="8px"
    //     />
    //   </Box> */}
    //   <Flex
    //     direction="column"
    //     justifyContent="center"
    //     alignItems="flex-start"
    //     width="50%"
    //   >
    //     <Box>
    //       <p>
    //         <strong>Name:</strong> {user.name}
    //       </p>
    //       {/* <p><strong>Age:</strong> {user.age}</p>
    //       <p><strong>DOB:</strong> {moment(user.birthDate).format("DD/MM/YYYY")}</p> */}
    //     </Box>
    //   </Flex>
    // </Flex>
  );
}
