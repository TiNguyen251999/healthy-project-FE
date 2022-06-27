import React from "react";

const item = [
  {
    id: 1,
    text: "会員登録",
  },
  {
    id: 2,
    text: "運営会社 ",
  },
  {
    id: 3,
    text: "利用規約 ",
  },
  {
    id: 4,
    text: "個人情報の取扱について ",
  },
  {
    id: 5,
    text: "特定商取引法に基づく表記 ",
  },
  {
    id: 6,
    text: "お問い合わせ ",
  },
];
function Footer() {
  return (
    <div className="footer fixed-bottom">
      <div className="container w-footer">
        <div className="row">
          {item.map((item) => (
            <div className="col-md-4 col-xl-2 col-6">
              <a href="#">{item.text}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
