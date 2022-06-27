import React from "react";
import Chart from "@/components/chartBodyWeight";
import Header from "@components/layout/header";
import Footer from "@components/layout/footer";
import { Row, Col, Button, Container } from "react-bootstrap";

const category = [
  {
    id: 1,
    src: require("../../assets/images/fork.png"),
    text: "morning",
  },
  {
    id: 2,
    src: require("../../assets/images/fork.png"),
    text: "lunch",
  },
  {
    id: 3,
    src: require("../../assets/images/fork.png"),
    text: "dinner",
  },
  {
    id: 4,
    src: require("../../assets/images/glass.png"),
    text: "snack",
  },
];

const mealHistory = [
  {
    id: 1,
    image: require("../../assets/images/5-21-morning.jpg"),
    text: "05.21.Morning",
  },
  {
    id: 2,
    image: require("../../assets/images/5-20-morning.jpg"),
    text: "05.20.Morning",
  },
  {
    id: 3,
    image: require("../../assets/images/5-21-lunch.jpg"),
    text: "05.21.Lunch",
  },
  {
    id: 4,
    image: require("../../assets/images/5-20-lunch.jpg"),
    text: "05.20.Dinner",
  },
  {
    id: 5,
    image: require("../../assets/images/5-21-dinner.jpg"),
    text: "05.21.Dinner",
  },
  {
    id: 6,
    image: require("../../assets/images/5-20-dinner.jpg"),
    text: "05.20.Dinner",
  },
  {
    id: 7,
    image: require("../../assets/images/5-21-snack.jpg"),
    text: "05.21.Snack",
  },
  {
    id: 8,
    image: require("../../assets/images/5-20-snack.jpg"),
    text: "05.20.Snack",
  },
];

const bodyRecord = [
  {
    id: 1,
    src: require("../../assets/images/myRecommend-1.jpg"),
    title: "BODY RECORD",
    desc: "自分のカラダの記録",
  },
  {
    id: 2,
    src: require("../../assets/images/myRecommend-2.jpg"),
    title: "MY EXERCISE",
    desc: "自分の運動の記録",
  },
  {
    id: 3,
    src: require("../../assets/images/myRecommend-3.jpg"),
    title: "MY DIARY",
    desc: "自分の日記",
  },
];

export default function Index() {
  return (
    <>
      <Header />
      <div className="top-page">
        <Row>
          <Col className="data-body">
            <div className="achievement">
              <div className="cycle">
                <span>5/21</span>
                <span>75%</span>
              </div>
            </div>
            <div className="chart">
              <canvas id="myChart"></canvas>
            </div>
          </Col>
          <Col>
            <Chart />
          </Col>
        </Row>
      </div>
      <div className="category my-3">
        <Container>
          <Row>
            {category.map((item) => (
              <Col className="data-body">
                <div className="transit">
                  <div className="transit-list">
                    <div>
                      <img src={item.src} alt="" />
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="meal-history">
        <div className="list-img container">
          <div className="row w-list-img">
            <Row>
              {mealHistory.map((item) => (
                <Col md={3}>
                  <div className="img-item">
                    <img className="img-list-item" src={item.image} alt="" />
                    <div className="label-img">{item.text}</div>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="btn-more mt-4">
              <button className="btn">記録をもっと見る</button>
            </div>
          </div>
        </div>
      </div>
      <div className="body-record">
        <Container>
          <Row>
            {bodyRecord.map((item) => (
              <Col md={4}>
                <div className="box-item">
                  <div className="box-img">
                    <div className="box-img-item">
                      <div className="cover"></div>
                      <img className="img-list-item" src={item.src} alt="" />
                    </div>
                  </div>
                  <div className="label-box">
                    <p>{item.title}</p>
                    <div>{item.desc}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="my-exercise">my exercise</div>
      <div className="my-diary">my diary</div>
      <div className="text-center">
        <Button>Button2</Button>
      </div>
      <div className="recommended">recommended</div>
      <Footer />
    </>
  );
}
