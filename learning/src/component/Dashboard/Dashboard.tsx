import {
  Badge,
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { Component } from "react";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AddIcon from "@material-ui/icons/Add";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import CopyrightOutlinedIcon from "@material-ui/icons/CopyrightOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CallReceivedOutlinedIcon from "@material-ui/icons/CallReceivedOutlined";
import CallMadeOutlinedIcon from "@material-ui/icons/CallMadeOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { ProductDetails } from "./Product";
import Product from "./Product";

interface Historytype {
  imgSrc: any;
  name: string;
  buy: string;
  money: string;
  time: string;
}
const History = [
  {
    imgSrc:
      "https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAROBs",
    name: "Nike Store",
    buy: "purchase",
    money: "-$28.60",
    time: "11.45Am",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-photo/portrait-woman-teaching-sign-language_23-2148719688.jpg?t=st=1710833376~exp=1710836976~hmac=a0ed0d264da1ff694f492008830a1301cbe1729d83060163785569202288bf51&w=740",
    name: "Mom",
    buy: "Replesnishment",
    money: "+$18.60",
    time: "9.45Am",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-photo/focus-selective-shot-small-red-bird-sitting-branch_181624-60059.jpg?t=st=1710833562~exp=1710837162~hmac=2da51210f801ba0b83b6a715b62a013c52bf6f1e5f9ed0ad550d2b58ce6f2031&w=740",
    name: "Auchan",
    buy: "purchase",
    money: "-$18.60",
    time: "12.45Am",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAROBs",
    name: "Total",
    buy: "purchase",
    money: "-$18.10",
    time: "11.45Am",
  },
];
const YesterDay = [
  {
    imgSrc:
      "https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAROBs",
    name: "Nike Store",
    buy: "purchase",
    money: "-$28.60",
    time: "11.45Am",
  },
  {
    imgSrc:
      "https://img.freepik.com/free-photo/portrait-woman-teaching-sign-language_23-2148719688.jpg?t=st=1710833376~exp=1710836976~hmac=a0ed0d264da1ff694f492008830a1301cbe1729d83060163785569202288bf51&w=740",
    name: "Mom",
    buy: "Replesnishment",
    money: "+$18.60",
    time: "9.45Am",
  },
];
interface ProductType {
  id: number;
  name: string;
  price: number;
  isAdded: boolean;
  imgsrc: string;
}
interface S {
  dashboardState: Array<Historytype>;
  yesterDayState: Array<Historytype>;
  productData: Array<ProductType>;
  count: number;
}
export default class Dashboard extends Component<{}, S> {
  constructor(props: {}) {
    super(props);
    this.state = {
      dashboardState: History,
      yesterDayState: YesterDay,
      productData: ProductDetails,
      count: 0,
    };
  }

  onClickAddToCart = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  fromBankDetails = (item: Historytype) => {
    return (
      <>
        <Box className="bankDetailRightHistoryDe">
          <Box className="bankDetailRightHistoryDetailsPurchase">
            <Avatar alt="Remy Sharp" src={item.imgSrc} />
            <Box style={{ marginLeft: "15px", alignItems: "flex-end" }}>
              <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
                {item.name}
              </Typography>
              <Typography style={{ color: "#b3b5c4", fontSize: "13px" }}>
                {item.buy}
              </Typography>
            </Box>
          </Box>
          <Box style={{ marginLeft: "15px", alignItems: "flex-end" }}>
            <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
              {item.money}
            </Typography>
            <Typography style={{ color: "#b3b5c4", fontSize: "13px" }}>
              {item.time}
            </Typography>
          </Box>
        </Box>
      </>
    );
  };
  bankDetailsLeft = () => {
    return (
      <>
        <Box>
          <Box className="bankDetailsLeftAccount">
            <Typography style={{ fontSize: "21px" }}>Accounts</Typography>
            <AddIcon style={{ color: "#536ffe" }} />
          </Box>
          <Box className="bankDetailsLeftEuroAccount">
            <Box className="bankDetailsLeftEuroAccountHeading">
              <Typography variant="h6">$3,524.60</Typography>
              <MoreHorizIcon />
            </Box>
            <Typography
              style={{
                fontSize: "10px",
                color: "rgb(194,198,215)",
                fontWeight: "bold",
              }}
            >
              {" "}
              Euro Account
            </Typography>
            <Box className="bankDetailsLeftCard">
              <Paper className="bankDetailsLeftCardPaper">9315</Paper>
              <Paper
                className="bankDetailsLeftCardPaper"
                style={{
                  marginLeft: "9px",
                  background:
                    "linear-gradient(to right bottom, #fa7d07, #8502b9)",
                }}
              >
                9872
              </Paper>
            </Box>
          </Box>
          <Box
            className="bankDetailsLeftEuroAccount"
            style={{ marginTop: "15px" }}
          >
            <Box className="bankDetailsLeftEuroAccountHeading">
              <Typography variant="h6">$3,524.60</Typography>
              <MoreHorizIcon />
            </Box>
            <Typography
              style={{
                fontSize: "10px",
                color: "rgb(194,198,215)",
                fontWeight: "bold",
              }}
            >
              {" "}
              Dollar Account
            </Typography>
            <Box className="bankDetailsLeftCard">
              <Paper
                className="bankDetailsLeftCardPaper"
                style={{
                  background:
                    "linear-gradient(to right bottom, #e25161,#452324 )",
                }}
              >
                876
              </Paper>
            </Box>
          </Box>
          <Box
            className="bankDetailsLeftEuroAccount"
            style={{ marginTop: "15px" }}
          >
            <Box className="bankDetailsLeftEuroAccountHeading">
              <Typography variant="h6">$3,524.60</Typography>
              <MoreHorizIcon />
            </Box>
            <Typography
              style={{
                fontSize: "10px",
                color: "rgb(194,198,215)",
                fontWeight: "bold",
              }}
            >
              {" "}
              Crpto Account
            </Typography>
            <Box>
              <AvatarGroup max={4} style={{ marginTop: "10px" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-vector/modern-bitcoin-design_23-2147794846.jpg?t=st=1710847259~exp=1710850859~hmac=65795cd7e040d4ffc384bcc05ed7fc108cd3dc43d125edcc3a6e96bbb9c7a427&w=740"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://img.freepik.com/premium-psd/3d-icon-tenge-money-sign-illustration_487474-1555.jpg?w=740"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://img.freepik.com/premium-psd/3d-render-cryptocurrency-icon-dogecoin-2-processor-exchange-with-trasparent-background_544758-460.jpg?w=740"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://img.freepik.com/free-photo/male-hand-with-golden-litecoin-blue-background_155003-9378.jpg?t=st=1710847362~exp=1710850962~hmac=bc260127e30fcdd4bec863cf647f7776208c4111e6a20f92a0a8cca646aeaef3&w=740"
                />
              </AvatarGroup>
            </Box>
          </Box>
          <Box className="bankDetailsLeftHidden">
            <VisibilityOffOutlinedIcon />
            <Typography
              style={{
                marginLeft: "10px",
              }}
            >
              Hide balance
            </Typography>
          </Box>
          <Box className="bankDetailsLeftHidden">
            <DashboardOutlinedIcon />
            <Typography
              style={{
                marginLeft: "10px",
              }}
            >
              Explore
            </Typography>
          </Box>
          <Box className="bankDetailsLeftfooterSection">
            <CopyrightOutlinedIcon />
            <Typography
              style={{
                marginLeft: "10px",
              }}
            >
              2012-2023
            </Typography>
          </Box>
        </Box>
      </>
    );
  };
  bankDetailsCenter = () => {
    return (
      <>
        <BankDetailsCenter>
          <FormControl
            fullWidth
            variant="outlined"
            style={{
              backgroundColor: "white",
              color: "blue",
              borderRadius: "20px",
            }}
          >
            <OutlinedInput
              placeholder="Search"
              style={{
                backgroundColor: "white",
                color: "blue",
                borderRadius: "20px",
                height: "40px",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlinedIcon style={{ color: "#9da3bf" }} />
                </InputAdornment>
              }
            />
          </FormControl>
          <Box className="bankDetailCenterAction">
            <Typography style={{ fontSize: "21px" }}>Actions</Typography>
            <Typography>All Actions</Typography>
          </Box>
          <Box className="bankDetailCenterTransferDetails">
            <Box className="bankDetailCenterTransfer">
              <Typography>Transfer</Typography>
              <CallMadeOutlinedIcon style={{ marginTop: "20px" }} />
            </Box>
            <Box className="bankDetailCenterTransfer">
              <Typography>Receive</Typography>
              <CallReceivedOutlinedIcon style={{ marginTop: "20px" }} />
            </Box>
          </Box>
          <Box className="bankDetailCenterTransferDetails">
            <Box className="bankDetailCenterTransfer">
              <Typography>Send to Jacob</Typography>
              <Avatar
                style={{ marginTop: "14px" }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </Box>
            <Box className="bankDetailCenterTransfer">
              <Typography>Send to Mom</Typography>
              <Avatar
                style={{ marginTop: "14px" }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </Box>
          </Box>
          <Box className="bankDetailCenterTransferDetails">
            <Box className="bankDetailCenterTransferTopeoples">
              <Box className="bankDetailCenterAction">
                <Typography>Transfers to people</Typography>
                <SettingsOutlinedIcon />
              </Box>
              <Box className="bankDetailCenterTransferToP">
                <MoreHorizIcon />
                <Typography style={{ fontSize: "13px" }}> 9315</Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Typography style={{ fontSize: "14px" }}>$7,562.12</Typography>
                <Typography style={{ color: "#adb2c9", fontSize: "14px" }}>
                  from $10,000
                </Typography>
              </Box>
              <Box className="graphbar">
                <Box
                  style={{
                    flex: 0.7,
                    backgroundColor: "#3052ff",
                    borderRadius: "16px 0 0 16px",
                  }}
                ></Box>
              </Box>
              <Typography
                style={{
                  color: "#bfc3de",
                  fontSize: "13px",
                  marginTop: "10px",
                }}
              >
                {" "}
                Limits will be updated on July 5
              </Typography>
            </Box>
            <Box className="bankDetailCenterTransferSpendingInJune">
              <Typography>Spending in June</Typography>
              <Box style={{ marginTop: "30px" }}>
                <Typography>$12,562.53</Typography>
                <Box className="graphbar">
                  <Box
                    style={{
                      flex: 0.5,
                      backgroundColor: "#ef9690",
                      borderRadius: "16px 0 0 16px",
                    }}
                  ></Box>
                  <Box
                    style={{
                      flex: 0.2,
                      backgroundColor: "#88c8e4",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="bankDetailCenterProtectYourMoney">
            <Typography variant="h4">Protect Your Money</Typography>
            <Typography>
              Set the two factor authentication to protect your card when
              shopping
            </Typography>
          </Box>
        </BankDetailsCenter>
      </>
    );
  };
  bankDetailsRight = () => {
    return (
      <>
        <BankDetailsRight>
          <Box className="bankDetailsRightViva">
            <Box className="bankDetailRightVisaIssues">Viva isuues</Box>
            <Box className="bankDetailRightVisaIssues">Mortgage Item</Box>
            <Box className="bankDetailRightVisaIssues">Cashback</Box>
          </Box>
          <Typography style={{ fontSize: "25px", marginTop: "15px" }}>
            History
          </Typography>
          <Box className="bankDetailRightHistory">
            <Typography variant="h6">Today,13 June</Typography>
            <Box className="bankDetailRightHistoryDetails">
              {this.state.dashboardState.map((item) => {
                return <>{this.fromBankDetails(item)}</>;
              })}
            </Box>
            <Typography style={{ marginTop: "12px" }}>
              Yesterday , 12 June
            </Typography>
            <Box className="bankDetailRightHistoryDetails">
              {this.state.yesterDayState.map((item) => {
                return <>{this.fromBankDetails(item)}</>;
              })}
            </Box>
            <Button variant="contained" fullWidth className="bankDetailsButton">
              All Operations
            </Button>
          </Box>
        </BankDetailsRight>
      </>
    );
  };
  render() {
    return (
      <>
        <DashboardBox>
          <Box className="dashboardInnerBox">
            <Box className="dashboardNavBar">
              <Box className="dashboardNavBars">
                <Box className="logo">Gf</Box>
                <Typography className="navbarMenu"> Dashboard</Typography>
                <Typography className="navbarMenu">Payments</Typography>
                <Typography className="navbarMenu">Analysis</Typography>
                <Typography className="navbarMenu">Cards</Typography>
                <Typography className="navbarMenu">History</Typography>
                <Typography className="navbarMenu">Services</Typography>
                <Typography className="navbarMenu">Help</Typography>
              </Box>
              <Box className="dashboardSettingAndNotification">
                <SettingsOutlinedIcon />
                <Badge color="secondary" badgeContent={this.state.count}>
                  <NotificationsOutlinedIcon />
                </Badge>
                <Typography className="navbarname">Mathieu</Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-photo/side-view-smiling-man-posing_23-2148364859.jpg?t=st=1710843149~exp=1710846749~hmac=0e80226d3d56555291e46aa48bac1b9bd51d131a22e92813615c98cc5a865530&w=740"
                />
              </Box>
            </Box>
            <Box className="bankDetailsAndHistory">
              <Box className="bankDetailsLeft">{this.bankDetailsLeft()}</Box>
              <Box className="bankDetailsCenter">
                {" "}
                {this.bankDetailsCenter()}
              </Box>

              <Box className="bankDetailsRight">{this.bankDetailsRight()}</Box>
            </Box>
          </Box>
        </DashboardBox>
        <Product
          onClickAddToCart={this.onClickAddToCart}
          productDetails={this.state.productData}
        />
      </>
    );
  }
}

const DashboardBox = styled(Box)({
  backgroundColor: "rgb(29,33,39)",
  height: "100%",
  padding: "20px",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  "& .dashboardInnerBox": {
    backgroundColor: "#f6f6f6",
    height: "90%",
    width: "95%",
    border: "16px solid rgb(23,25,31)",
    borderRadius: "10px",
  },
  "& .dashboardNavBar": {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: "35px",
    alignItems: "center",
    padding: "15px",
    flexDirection: "row",
    "@media(max-width:739px)": {
      alignItems: "start",
    },
  },
  "& .dashboardNavBars": {
    display: "flex",
    width: "70%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    "@media(max-width:772px)": {
      justifyContent: "flex-start",
      alignItems: "start",
    },
  },
  "& .navbarname": {
    "@media(max-width:739px)": {
      display: "none",
    },
  },
  "& .navbarMenu:hover": {
    background: "rgb(243,245,254)",
    padding: 8,
    borderRadius: "8px",
  },
  "& .navbarMenu": {
    fontSize: "1rem",
    "@media(max-width:772px)": {
      display: "none",
    },
  },

  "& .logo": {
    borderRadius: "50%",
    backgroundColor: "rgb(193,253,51)",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .dashboardSettingAndNotification": {
    display: "flex",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-around",
  },
  "& .bankDetailsAndHistory": {
    display: "flex",
    padding: "30px",
    flexWrap: "wrap",
  },

  "& .bankDetailsLeft": {
    flex: 0.23,
    height: "min-content",
    "@media(max-width: 865px)": {
      flex: 0.4,
    },
    "@media(max-width: 587px)": {
      flex: 0.99,
    },
  },
  "& .bankDetailsLeftAccount": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .bankDetailsLeftEuroAccount": {
    height: "100px",
    borderRadius: "10px",
    backgroundColor: "white",
    marginTop: "12px",
    padding: "8px",
  },
  "& .bankDetailsLeftEuroAccountHeading": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .bankDetailsLeftCard": {
    display: "flex",
    marginTop: "10px",
  },
  "& .bankDetailsLeftHidden": {
    display: "flex",
    marginTop: "19px",
  },
  "& .bankDetailsLeftfooterSection": {
    display: "flex",
    marginTop: "133px",
    color: "#cacdda",
    "@media(max-width: 558px)": {
      marginTop: "80px",
    },
  },
  "& .bankDetailsCenter": {
    flex: 0.45,
    "@media(max-width: 865px)": {
      flex: 0.6,
    },
    "@media(max-width: 558px)": {
      marginTop: "40px",
      flex: 0.99,
    },
    // backgroundColor: "red",
    marginLeft: "22px",
    paddingRight: "15px",
  },
  "& .bankDetailsRight": {
    flex: 0.32,
    "@media(max-width: 863px)": {
      flex: 0.99,
      marginTop: "40px",
    },
  },
  "& .bankDetailsLeftCardPaper": {
    background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    height: "40px",
    width: "65px",
    color: "white",
    display: "flex",
    alignItems: "flex-end",
  },
});

const BankDetailsCenter = styled(Box)({
  paddingRight: "15px",
  "& .bankDetailCenterSearchBar": {
    backgroundColor: "white",
    borderRadius: "15px",
    height: "35px",
  },
  "& .bankDetailCenterAction": {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  "& .bankDetailCenterTransferDetails": {
    display: "flex",
    marginTop: "15px",
    justifyContent: "space-between",
  },
  "& .bankDetailCenterTransfer": {
    backgroundColor: "white",
    flex: 0.48,
    height: "80px",
    borderRadius: "15px",
    padding: "10px",
  },
  "& .bankDetailCenterTransferTopeoples": {
    height: "min-content",
    backgroundColor: "white",
    flex: 0.68,
    padding: "10px",
    borderRadius: "15px",
  },
  "& .bankDetailCenterTransferSpendingInJune": {
    height: "122px",
    flex: 0.28,
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "15px",
  },
  "& .bankDetailCenterProtectYourMoney": {
    marginTop: "28px",
    borderRadius: "15px",
    backgroundColor: "#b269d1",
    height: "115px",
    color: "white",
    padding: "22px",
  },
  "& .bankDetailCenterTransferToP": {
    display: "flex",
    color: "#abb0c7",
  },
  "& .graphbar": {
    height: "10px",
    backgroundColor: "#acace5",
    borderRadius: "16px",
    display: "flex",
  },
});

const BankDetailsRight = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .bankDetailsRightViva": {
    display: "flex",
    justifyContent: "space-between",
  },
  "& .bankDetailRightVisaIssues": {
    height: "78px",
    width: "78px",
    flex: 0.3,
    background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    outline: "2px solid blue",
    outlineOffset: "2px",
    borderRadius: "15px",
    display: "flex",
    color: "white",
    padding: "10px",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    fontSixe: "10px",
  },
  "& .bankDetailRightVisaIssues:hover": {
    background: "linear-gradient(to right bottom, red, black)",
    transform: "scale(1.1, 1.1)",
  },
  "& .bankDetailRightHistory": {
    backgroundColor: "white",
    borderRadius: "15px",
    marginTop: "10px",
    padding: "13px",
  },
  "& .bankDetailRightHistoryDetails": {
    display: "flex",
    flexDirection: "column",
    marginTop: "13px",
  },
  "& .bankDetailRightHistoryDe": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
  },
  "& .bankDetailRightHistoryDetailsPurchase": {
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
  },
  "& .bankDetailsButton": {
    marginTop: "15px",
    marginBottom: "3px",
    textTransform: "capitalize",
    color: "blue",
    backgroundColor: "#edf0ff",
  },
});
