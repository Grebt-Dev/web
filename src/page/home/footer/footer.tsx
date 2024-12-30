import "./footer.scss";
import logo from "../../../assets/image/logo.png";
import { Typography } from "@mui/material";

type Props = {
  language: boolean;
};

export const Footer = ({ language }: Props) => {
  const companyPage = () => {
    window.open("https://www.grebt.co.kr");
  };

  return (
    <div className="wrap">
      <div className="column">
        <div className="row">
          <div>GREBT</div>
          <div className="siteMap">
            <div className="youtube" onClick={companyPage}>
              <img src={logo} className="youtubeIcon" />
            </div>
            <div className="companyPage">
              <a onClick={companyPage} className="companyName">
                <Typography>GREBT</Typography>
              </a>
            </div>
          </div>
        </div>
        <div className="service-info">
          {language ? (
            <div>
              <Typography className="adressText">
                대표 : 최항주 | 사업자등록번호 : 772-88-01437 | 대표전화 :
                010-4035-8581
              </Typography>
              <Typography className="adressText">
                세종시 집현중앙7로6, 세종시대명벨리온지식산업센터 주1동 A407호
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className="adressText">
                CEO : Choi Hang-ju | Tel : +82-10-4035-8581
              </Typography>
              <Typography className="adressText">
                Room A407, Ju1-dong, Sejong University Myeong Bellion Knowledge
                Industry Center, 6 Jiphyeonjungang 7-ro, Sejong-si
              </Typography>
            </div>
          )}
        </div>
        <p className="copyright">
          Copyright © 2022 Medical System Laboratory. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
