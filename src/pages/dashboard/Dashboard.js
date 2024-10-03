import React, { useEffect, useState } from "react";
import Header from "../../components/parts/Header";
import AddButton from "../../components/buttons/AddButton";
import CardDashboard from "../../components/parts/CardDashboard";
import AddTileIcon from "../../../src/assets2/DashboardCardIcons/AddTile.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { Tabs, cardData } from "./utils";
import {
  Main,
  BtnDiv,
  Content,
  NavigatingDiv,
  NavigatingBtn,
  CardDiv,
  BusinessOverview,
  FirstDiv,
  Container2,
  Container3,
  Container4,
  MainDiv,
  SecDiv,
  TileIconDiv,
  ThirdDiv,
  Wrapper,
} from "./style";
// redux
import { useSelector } from "react-redux";
import { GetFinanceSettings } from "../../Api/Apis";
import { useDispatch } from "react-redux";
import {
  NumberValue,
  NegitiveValue,
} from "../../redux/appReducer/NumberFormat";

const Dashboard = () => {
  const dispatch = useDispatch();
  const keys = useSelector((state) => state.localization.keys);
  const themeKeys = useSelector((state) => state.localization.themeKeys);
  const defaultTab = "BUSINESS OVERVIEW";
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [add, setAdd] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleAddTile = () => {
    setAdd(true);
  };

  const getNavigationColor = (item) =>
    activeTab === item ? themeKeys.primary : themeKeys.c6;

  const getFinanceSettings = async () => {
    setLoading(true);
    try {
      const Data = await GetFinanceSettings();
      console.log(Data.data); // Assuming Data contains the response data you need
      // Handle the data as needed here
      dispatch(NumberValue(Data.data.numberSeparator));
      dispatch(NegitiveValue(Data.data.negitiveSign));
    } catch (error) {
      console.error("Error fetching finance settings:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after the async operation
    }
  };

  useEffect(() => {
    getFinanceSettings();
  }, []);

  return (
    <Main>
      <Header
        fixWidth={true}
        title={keys.KEY0003}
        firstNav={keys.KEY0002}
        navActive={keys.KEY0001}
      />
      <Content>
        <BtnDiv>
          <AddButton
            fixWidth={true}
            title={"Add Tile"}
            icon={"AddBackgroundBlue"}
            onClick={handleAddTile}
          />
          <AddButton title={"Edit Tile"} icon={"EditTitle"} fixWidth={true} />
          <AddButton title={"Customize"} icon={"Custom"} />
        </BtnDiv>
        <NavigatingDiv>
          {Tabs.map((tab) => (
            <NavigatingBtn
              color={getNavigationColor(tab)}
              key={tab}
              onClick={() => handleTabClick(tab)}
              isActive={activeTab === tab}
            >
              {keys[tab]}
            </NavigatingBtn>
          ))}
        </NavigatingDiv>
      </Content>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "22%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <BusinessOverview>
          <MainDiv>
            <Wrapper>
              <FirstDiv>
                <CardDiv>
                  {cardData.map((card, index) => (
                    <CardDashboard key={index} {...card} />
                  ))}
                </CardDiv>
                <Container2>
                  <TileIconDiv>
                    <img src={AddTileIcon} alt="a" />
                    <div>{keys["KEY100224"]}</div>
                  </TileIconDiv>
                </Container2>
              </FirstDiv>
              <SecDiv>
                <Container3>
                  <TileIconDiv>
                    <img src={AddTileIcon} alt="a" />
                    <div>{keys["KEY100224"]}</div>
                  </TileIconDiv>
                </Container3>

                <Container3>
                  <TileIconDiv>
                    <img src={AddTileIcon} alt="a" />
                    <div>{keys["KEY100224"]}</div>
                  </TileIconDiv>
                </Container3>
              </SecDiv>
            </Wrapper>
            <ThirdDiv>
              <Container4>
                <TileIconDiv>
                  <img src={AddTileIcon} alt="a" />
                  <div>{keys["KEY100224"]}</div>
                </TileIconDiv>
              </Container4>
              <Container4>
                <TileIconDiv>
                  <img src={AddTileIcon} alt="a" />
                  <div>{keys["KEY100224"]}</div>
                </TileIconDiv>
              </Container4>
            </ThirdDiv>
          </MainDiv>
        </BusinessOverview>
      )}
    </Main>
  );
};

export default Dashboard;
