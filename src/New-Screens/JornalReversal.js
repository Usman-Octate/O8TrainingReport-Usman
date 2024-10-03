import React from "react";
import styled from "styled-components";
import Header from "../components/parts/Header";
import HeaderNewButtons from "../components/buttons/HeaderNewButtons";
import JournalDetails from "./Components/HeroSections/JournalDetails";
import NewScreensNav from "./Components/NewScreensNav";

const Grab = styled.div`
  /* display: flex; */
  width: 100%;
  /* height: 100vh; */
`;
const Wrapit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 430px) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const Div = styled.div`
  height: 80vh;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 10px;
`;
const Wrap = styled.div`
  padding: 0 10px;
`;

const JornalReversal = () => {
  return (
    <Grab>
      <NewScreensNav
        height={"30%"}
        // OPTIONS
        first={"Journa Entry Details"}
        second={"Table Details"}
        third={"Attachments"}
        fourth={"Internal Notes"}
        fifth={"Linked Transactions"}
        sixth={"Activity"}
        // CLASSES FOR SCROLL
        class1={"inputSec"}
        class2={"information"}
        class3={"customField"}
        class4={"address"}
        class5={"contact"}
        class6={"bank"}
        class7={"attachment"}
        class8={"correspondence"}
        class9={"transaction"}
        class10={"activity"}
      />
      <Wrap>
        <Header
          title={"JOURNAL ENTRY REVERSAL"}
          firstNav={"Home"}
          secNav={"Finance"}
          thirdNav={"Transaction"}
          fourthNav={"Journal Entry Reversal"}
          navActive={"Journal Entry Reversal - New"}
        />
        <HeaderNewButtons />
      </Wrap>

      <Wrapper>
        {/* <AccountsSideNav
          title={"SECTION LIST"}
          first={"Journal Entry Details"}
          second={"Table Details"}
          third={"Attachments"}
          fourth={"Internal Notes"}
          fifth={"Linked Transactions"}
          sixth={"Activity"}
        /> */}
        <Div>
          <JournalDetails initialCheck={false} initialTick={false} />
        </Div>
      </Wrapper>
    </Grab>
  );
};

export default JornalReversal;
