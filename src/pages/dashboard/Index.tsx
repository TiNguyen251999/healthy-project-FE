import React from "react";
import Chart from "@/components/chartBodyWeight";
import Header from "@components/layout/header";
import Footer from "@components/layout/footer";
import { Row, Col, Container } from "react-bootstrap";

export default function Index() {
  const category = [
    {
      id: 1,
      src: require("../../assets/images/fork.png"),
      text: "Morning",
    },
    {
      id: 2,
      src: require("../../assets/images/fork.png"),
      text: "Lunch",
    },
    {
      id: 3,
      src: require("../../assets/images/fork.png"),
      text: "Dinner",
    },
    {
      id: 4,
      src: require("../../assets/images/glass.png"),
      text: "Snack",
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

  const myExercise = [
    {
      id: 1,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
    {
      id: 2,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
    {
      id: 3,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
    {
      id: 4,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
    {
      id: 5,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
    {
      id: 6,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
    {
      id: 7,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
    {
      id: 8,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      minutes: 10,
    },
  ];

  const myDiary = [
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます",
      text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキスト...",
    },
    {
      id: 2,
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます",
      text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキスト...",
    },
    {
      id: 3,
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます",
      text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキスト...",
    },
    {
      id: 4,
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます",
      text: "テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキスト...",
    },
  ];

  const recommendedColumn = [
    {
      id: 1,
      title: "RECOMMENDED COLUMN",
      desc: "オススメ",
    },
    {
      id: 2,
      title: "RECOMMENDED DIET",
      desc: "ダイエット",
    },
    {
      id: 3,
      title: "RECOMMENDED BEAUTY",
      desc: "美容",
    },
    {
      id: 4,
      title: "RECOMMENDED HEALTH",
      desc: "健康",
    },
  ];

  const recommendedDiet = [
    {
      id: 1,
      src: require("../../assets/images/recommend-1.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
    {
      id: 2,
      src: require("../../assets/images/recommend-2.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
    {
      id: 3,
      src: require("../../assets/images/recommend-3.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
    {
      id: 4,
      src: require("../../assets/images/recommend-4.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
    {
      id: 5,
      src: require("../../assets/images/recommend-5.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
    {
      id: 6,
      src: require("../../assets/images/recommend-6.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
    {
      id: 7,
      src: require("../../assets/images/recommend-7.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
    {
      id: 8,
      src: require("../../assets/images/recommend-8.jpg"),
      date: "2021.05.17",
      time: "23:25",
      text: "魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に! 知っておきたい魚を食べるメリ",
      category: [
        {
          id: 1,
          cate1: "#魚料理",
        },
        {
          id: 2,
          cate1: "#和食",
        },
        {
          id: 3,
          cate1: "#DHA",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="top-page">
        <Row nogutters="true">
          <Col className="data-body p-0">
            <div className="achievement">
              <div className="cycle">
                <h5 className="pr-2">05/21</h5>
                <h3>75%</h3>
              </div>
            </div>
          </Col>
          <Col className="p-0">
            {" "}
            <Chart />
          </Col>
        </Row>
      </div>
      <Container>
        <div className="category my-3">
          <Row>
            {category.map((item) => (
              <Col className="data-body" key={item.id}>
                <div className="transit">
                  <div className="transit-list">
                    <div>
                      <img src={item.src} alt="" />
                      <br />
                      <h5>{item.text}</h5>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="meal-history mb-4">
          <div className="list-img">
            <div className="row w-list-img">
              <Row>
                {mealHistory.map((item) => (
                  <Col md={3} key={item.id}>
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
        <div className="body-record-button mt-4" id="myRecord">
          <Row>
            {bodyRecord.map((item) => (
              <Col md={4} key={item.id}>
                <div className="box-item">
                  <div className="box-img">
                    <div className="box-img-item">
                      <img className="img-list-item" src={item.src} alt="" />
                    </div>
                    <div className="cover" />
                  </div>
                  <div className="label-box">
                    <p>{item.title}</p>
                    <div>{item.desc}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="body-record mt-4 py-2">
          <div className="record-title">
            <span>
              BODY <br />
              RECORD
            </span>
            <h4 className="ml-2">2021.05.21</h4>
          </div>
          <Chart />
          <div className="btn-chart my-3">
            <button>日</button>
            <button>週</button>
            <button>月</button>
            <button className="btn-active">年</button>
          </div>
        </div>
        <div className="my-exercise mt-4">
          <div className="my-exercise-container">
            <div className="exercise-title">
              <span>
                MY <br />
                EXERCISE
              </span>
              <h4 className="pl-2">2021.05.21</h4>
            </div>
            <div className="calendar-item">
              <ul className="list-calendar">
                {myExercise.map((item) => (
                  <li className="item mt-2" key={item.id}>
                    <div>
                      <a href="">{item.title}</a>
                      <p>{item.kcal}kcal</p>
                    </div>
                    <div className="minutes">{item.minutes}min</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="my-diary my-4">
          <h5>My Diary</h5>
          <Row>
            {myDiary.map((item) => (
              <Col md={3} key={item.id}>
                <div className="box-diary p-3">
                  <h5>{item.date}</h5>
                  <h5>{item.time}</h5>
                  <p>{item.title}</p>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="btn-more mt-4">
            <button className="btn">自分の日記をもっと見る</button>
          </div>
        </div>
        <div className="recommended" id="recommend">
          <div className="column">
            <Row>
              {recommendedColumn.map((item) => (
                <Col md={3} sm={2} key={item.id}>
                  <div className="box-column py-2 px-3">
                    <h3>{item.title}</h3>
                    <hr />
                    <h4>{item.desc}</h4>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="my-history">
            <div className="list-img">
              <Row>
                {recommendedDiet.map((item) => (
                  <Col md={3} sm={2} key={item.id}>
                    <div className="img-item">
                      <img className="img-list-item" src={item.src} alt="" />
                      <div className="label-img">
                        <span className="mr-2">{item.date}</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <div className="item-content">{item.text}</div>
                    <div className="category">
                      {item.category.map((child) => (
                        <a href="/" key={child.id} className="pr-1">
                          {child.cate1}
                        </a>
                      ))}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="btn-more mt-4">
            <button className="btn">コラムをもっと見る</button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
