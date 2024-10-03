import React from "react";
import styled from "styled-components";
// import AddButton2 from "../../components/buttons/AddButton2";
import AddButton from "../../components/buttons/AddButton";
import Left from "../../assets2/ButtonIcons/LeftArrow.svg";
import Right from "../../assets2/ButtonIcons/RightArrow.svg";
import { Link, animateScroll } from "react-scroll";
import DropDown2 from "./Dropdown2";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin: 0px 0px;
  height: 10%;
  flex-wrap: wrap;
  height: 50px;
  @media (max-width: 930px) {
    gap: 4px;
    /* flex-wrap: wrap; */
    /* max-width: 48rem; */
  }

  @media (max-width: 450px) {
    width: 50rem;
    flex-wrap: wrap;
  }
`;
const Btn = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
`;

const Wrapit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 1166px) {
    flex-direction: column;
    align-items: start;
    width: 100vw;
  }
`;
const Button = styled.div``;

const HeaderNewButtons = (props) => {
  const scrollToActivity = () => {
    animateScroll.scrollTo(2000, {
      duration: 500,
      smooth: true,
      offset: 0,
    });
  };

  return (
    <Wrapit>
      <Wrapper>
        <AddButton
          clickScreenChange={props.clickScreenChange}
          icon="Tick"
          title="Post"
          color={"blue"}
          disable={props.disableButton}
        />
        <AddButton
          clickScreenChange={props.AddNewClick}
          icon="GreyAdd"
          name="Add"
          title="Add New"
          disable={props.disableHeaderButtons}
        />
        <AddButton
          clickScreenChange={props.editButton}
          icon="Edit"
          name="Edit"
          title="Edit"
          disable={props.disable}
        />
        <AddButton
          clickScreenChange={props.deleteClick}
          icon="DeleteIcon"
          title="Delete"
          disable={props.disableHeaderButtons}
        />

        {props.showButton && (
          <>
            <AddButton title={"Reverse"} icon={"Reverse"} />
            <AddButton title={"Recur"} icon={"Reccure"} />
          </>
        )}
        {/* <AddButton icon="Save" title="Save" /> */}

        {/* <AddButton
          icon="GreyAdd"
          name="Trans"
          title="Transaction"
          disable={props.disableHeaderButtons}
        /> */}

        <AddButton
          icon="Duplicate"
          title="Duplicate"
          clickScreenChange={props.duplicateClick}
          disable={props.disableHeaderButtons}
        />
        {props.State ? null : (
          <AddButton
            clickScreenChange={props.sendClick}
            icon="SendIcon"
            title="Send"
          />
        )}
        <AddButton
          icon="ReportIcon"
          title="Report"
          disable={props.disableHeaderButtons}
        />
        <div>
          <DropDown2 icon={"ArrowRight"} />
        </div>
        <div>
          <DropDown2 icon={"ArrowLeft"} />
        </div>
      </Wrapper>

      <Button onClick={scrollToActivity}>
        <Link
          activeClass="active"
          to="activitySection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <AddButton icon="Approval" title="Approval" />
        </Link>
      </Button>
    </Wrapit>
  );
};

export default HeaderNewButtons;
