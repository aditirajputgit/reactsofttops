import React, { Component } from "react";
import { Box, Button, Modal, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import Slider from "react-slick";

export const ProductDetails = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?t=st=1710910696~exp=1710914296~hmac=af7625bd7f659947096bf01dba31fef8f4d52f97b6af3675df963e735abce9ce&w=740",
  },
  {
    id: 2,
    name: "Iphone",
    price: 40000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/tech-device-with-nature-background_23-2150470431.jpg?t=st=1710910734~exp=1710914334~hmac=29f4edce044e67ddf298bcea0d3f030e0a8bb61b62aa652a4d639cc8518d7bb1&w=740",
  },
  {
    id: 3,
    name: "Ipad",
    price: 25000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/tablet-pen-balancing-with-green-background_23-2150271752.jpg?w=740",
  },
  {
    id: 4,
    name: "Camera",
    price: 70000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg?t=st=1710910819~exp=1710914419~hmac=4a179d60f1de6fb3c4263346d3b1627b94db29a3eec6c343b7a09e63acd4f1b4&w=740",
  },
  {
    id: 5,
    name: "Power Bank",
    price: 10000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/phone-mobile-connect-battery-power-bank_93675-129202.jpg?t=st=1710910875~exp=1710914475~hmac=0bfda989875b9913f0cd16bfae00cfbd04d34fa6a4a6614aa721f2330ede4f96&w=740",
  },
  {
    id: 6,
    name: "Ear phone",
    price: 6000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072203.jpg?t=st=1710910483~exp=1710914083~hmac=60b6cca1f019402b97f792ca3d50dd185e1e674f5a3a65cddfac86fe868895b8&w=360",
  },
  {
    id: 7,
    name: "Micro phone",
    price: 8900,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/electronic-microphone-with-purple-background_23-2150271770.jpg?t=st=1710910962~exp=1710914562~hmac=61ba82734019066e36a67c51031970fc2e12a0c5f67a1e89de2b15f3e4700209&w=740",
  },
  {
    id: 8,
    name: "watch",
    price: 3000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/new-smartwatch-balancing-with-hand_23-2150296477.jpg?t=st=1710911099~exp=1710914699~hmac=ec805ffd4ac59787a256c425a1925052b122e166c66bec3b68cd352561b3f0db&w=740",
  },
  {
    id: 9,
    name: "Cable",
    price: 3000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-vector/electrical-cables-realistic-set_1284-26538.jpg?t=st=1710911285~exp=1710914885~hmac=2350a3c0257a0b8b2fbf46349cf14ece05bc4734e3a00b5bb46f68b7bf21ff0e&w=740",
  },
  {
    id: 10,
    name: "Mouse",
    price: 2000,
    isAdded: false,
    imgsrc:
      "https://img.freepik.com/free-photo/computer-mouse-yellow-background-isolated-flat-lay_169016-26395.jpg?t=st=1710911419~exp=1710915019~hmac=75c110d1eafae3eedd98da43df2374453567ce0c06e36a56e9c806e795b5c1f4&w=740",
  },
];

interface ProductType {
  id?: number;
  name?: string;
  price?: number;
  isAdded?: boolean;
  imgsrc?: string;
}
interface S {
  productData: Array<ProductType>;
  open: boolean;
  modalProductInfo: ProductType
}
interface Props {
  onClickAddToCart: () => void;
  productDetails: Array<ProductType>;
}

export default class Product extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      productData: this.props.productDetails,
      open: false,
      modalProductInfo: {}
    };
  }

  forModalProDetails = () => {
    return (
      <>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ModalContainer>
            <Box style={{ border: "1px solid white" }}>
              <img src={this.state.modalProductInfo.imgsrc} height="100px" />
            </Box>
          </ModalContainer>
        </Modal>
        ;
      </>
    );
  };

  handleOpen = (item: ProductType) => {
    this.setState({ 
      open: true,
      modalProductInfo: item
    
    }, () => {
      console.log(this.state.open);
    });
    console.log(item.id);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  singleComponent = (item: ProductType) => {
    return (
      <>
        <SingleComponet>
          <Box className="singleProductImage">
            <img
              src={item.imgsrc}
              height="100px"
              onClick={() => {
                this.handleOpen(item);
              }}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Typography>{item.name}</Typography>
            <Typography>Rs.{item.price}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.onClickAddToCart}
            >
              Add To Cart
            </Button>
          </Box>
        </SingleComponet>
      </>
    );
  };

  render() {
    var settings = {
      dots: true,
      infinite: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      speed: 1500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <ProductSection>
          <Typography variant="h3">Product List</Typography>
          <Slider {...settings}>
            {this.state.productData.map((item) => {
              return <>{this.singleComponent(item)}</>;
            })}
          </Slider>
      {this.forModalProDetails()}
          
        </ProductSection>
      </>
    );
  }
}

const ProductSection = styled(Box)({
  textAlign: "center",
  marginTop: "20px",
  "& .ProContainer": {
    display: "flex",
    flexDirection: "row",
  },
});

const SingleComponet = styled(Box)({
  height: "min-content",
  padding: "15px",
  width: "200px",
  backgroundColor: "red",
  margin: "15px",
  display: "flex",
  borderRadius: "15px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& .singleProductImage": {
    height: "150px",
    backgroundColor: "pink",
    width: "180px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
  },
});

const ModalContainer = styled(Box)({
  height: "100px !important",
  border: " 1px solid red  !important",
  display: "flex  !important",
  justifyContent: "center  !important",
  alignItems: "center ",
  width: "100px",
});
