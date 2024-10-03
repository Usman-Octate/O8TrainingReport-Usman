import React, { useState } from "react";
import styled from "styled-components";
import TitleOfSection from "../../New-Screens/Components/TitleOfSection";
import EditIcon from "../../assets2/CompanySettings/Edit2.svg";
import WhatsappIcon from "../../assets2/CompanySettings/WhatsApp.svg";
import InstagramIcon from "../../assets2/CompanySettings/Instagram.svg";
import FacebookIcon from "../../assets2/CompanySettings/Facebook.svg";
import LinkedinIcon from "../../assets2/CompanySettings/Linkedin.svg";
import AddNotesButton from "../../New-Screens/Components/MantineTable/Buttons/AddNotesButton";
import { MdEdit } from "react-icons/md";
import { Button, Drawer } from "@mantine/core";
import UpdateComInfo from "../../components/Modals/UpdateComInfo";



const Wrapper = styled.div``;
const CompInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Wrap = styled.div`
  margin: 15px 0px;
`;
const Text = styled.div`
  font-size: 12px;
  color: #2e90fa;
  font-weight: 400;
`;
const Edit = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #eaf3fe;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
`;
const Line2 = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 0.7px;
`;
const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0px 15px;
`;
const CompImage = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #c7cacf;
  border: 1px solid #b5b8bf;
  width: 150px;
  text-align: center;
  padding: 60px 0px;
  border-radius: 8px;
  margin: 15px 0;
`;
const DocumentInfo = styled.div``;

const Title = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #464f60;
  margin: 15px 15px;
  opacity: 0.8;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-bottom: 15px;
`;

const HeadText = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.5;

  margin: 5px 15px;
`;
const InfoText = styled.text`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.8;
  margin: 5px 15px;
  display: flex;
  
  
  text-align: left;

`;
const InfoText2 = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.8;
  margin: 10px 15px 0px 15px;
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
 
  justify-content: left;
  gap: 10px;
`;
const Wrap2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #464f60;
  font-weight: 500;
  margin: 8px 15px;
  text-align: left;
`;

const DarkText = styled.text`
  font-size: 12px;
  font-weight: 400;
  color: #464f60;
  opacity: 0.8;
`;

const DimText = styled.text`
  font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.5;
`;

const Line = styled.div`
  background-color: #7f7f7f;
  width: 100%;
  height: 0.5px;
  opacity: 0.1;
`;
const SocialText =styled.div`
 font-size: 12px;
  font-weight: 500;
  color: #464f60;
  opacity: 0.5;

`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 330px;
  gap: 10px;
  align-items: flex-start;  /* Ensures text starts from top left */
`;

const Section2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
  align-items: flex-start;  /* Ensures text starts from top left */
`;
const CompanyProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Wrapper>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Update Company Information"
        radius="md"
        offset={8}
        size={"40%"} // Adjust the size of the drawer (small, md, lg, etc.)
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        {/* The UpdateComInfo component inside the Drawer */}
        <UpdateComInfo />
      </Drawer>
      <CompInfo>
        <Wrap>
          <TitleOfSection title={"COMPANY INFORMATION"} />
        </Wrap>
        <AddNotesButton
                    title={"Update Company Info"}
                    icon={MdEdit}
                    onClick={openDrawer}
                  />
      </CompInfo>
      <Line2 />
      <CompanyLogo>
        <CompImage>COMPANY LOGO</CompImage>
        <DocumentInfo>
          <div
            style={{
              color: "#464F60",
              fontSize: "12px",
              fontWeight: "500",
              margin: "6px 0",
            }}
          >
            The logo will be displayed on email attachment, document layout &
            reports.
          </div>
          <div style={{ fontSize: "12px", color: "#90959f", margin: "6px 0" }}>
            Image Specification: 120 x 100 pixels
          </div>
          <div style={{ fontSize: "12px", color: "#90959f", margin: "6px 0" }}>
            Format: JPG or PNG
          </div>
          <div style={{ fontSize: "12px", color: "#90959f", margin: "6px 0" }}>
            File Size: Maximum 1MB
          </div>
        </DocumentInfo>
      </CompanyLogo>
      <Line2 />
      <Title>COMPANY DETAILS</Title>
      <Details>
        <Section>
          <Section2>
          <HeadText>Company Name</HeadText>
          <InfoText>Company Name</InfoText>
          </Section2>
          <Line />
        </Section>
        
        <Section>
          <Section2>
          <HeadText>Business Type</HeadText>
          <InfoText>Business Type</InfoText>
          </Section2>
          <Line />
        </Section>
      
        <Section>
          <Section2>
          <HeadText>Industry</HeadText>
          <InfoText>Industry</InfoText>
          </Section2>
          <Line />
        </Section>
       
        <Section>
          <Section2>
          <HeadText>Company Start Date</HeadText>
          <InfoText>Company Start Date</InfoText>
          </Section2>
          <Line />
        </Section>
       
        <Section>
          <Section2>
          <HeadText>Head Office Location</HeadText>
          <InfoText>Head Office Location</InfoText>
          </Section2>
        </Section>
      </Details>
      <Line2 />
      <Title>ADDRESS DETAILS</Title>
      <Details>
       <Section>
        <Section2>
          <HeadText>Address</HeadText>
          <InfoText>Address</InfoText>
          </Section2>
          <Line />
          </Section>
          
          <Section>
           <Section2>
          <HeadText>City</HeadText>
          <InfoText>City</InfoText>
          </Section2>
          <Line />
          </Section>
         
          <Section>
            <Section2>
          <HeadText>State</HeadText>
          <InfoText>State</InfoText>
          </Section2>
          <Line />
          </Section>
         
          <Section>
            <Section2>
          <HeadText>Country</HeadText>
          <InfoText>Country</InfoText>
          </Section2>
          </Section>
         
          
          
      
      </Details>
      <Line2 />
      <Title>SOCIAL MEDIA ACCOUNTS</Title>
      <Details>
       <Section>
        <Section2>
          <Wrap2>
            <img src={WhatsappIcon} style={{ width: "17px" }} alt="Whatsapp" />{" "}
            <SocialText>Whatsapp</SocialText>
          </Wrap2>
          <InfoText2>Address</InfoText2>
          </Section2>
          <Line/>
          </Section>
         
          <Section>
            <Section2>
          <Wrap2>
            <img src={LinkedinIcon} style={{ width: "17px" }} alt="Linkedin" />{" "}
            <SocialText>
            Linkedin
            </SocialText>
          </Wrap2>
          <InfoText2>City</InfoText2>
          </Section2>
          <Line/>
          </Section>
         
          <Section>
            <Section2>
          <Wrap2>
            <img
              src={InstagramIcon}
              style={{ width: "17px" }}
              alt="Instagram"
            />{" "}
            <SocialText>
            Instagram
            </SocialText>
          </Wrap2>
          <InfoText2>State</InfoText2>
          </Section2>
          <Line/>
          </Section>
         
          <Section>
            <Section2>
          <Wrap2>
            <img src={FacebookIcon} style={{ width: "17px" }} alt="Facebook" />{" "}
            <SocialText>
            Facebook
            </SocialText>
          </Wrap2>
          <InfoText2>Country</InfoText2>
          </Section2>
          </Section>
        
       
          <Line2 />
         
         
         
       
      </Details>
      <Line2 />
    </Wrapper>
  );
};

export default CompanyProfile;
