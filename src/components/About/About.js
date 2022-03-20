import AboutImg from "../../imgs/postajya.jpg";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="title">
            <h2
              className="about-title wow animate__zoomIn"
              data-wow-duration="1.5s"
            >
              شركـة البـوسطجية للـدعاية و الإعـلان
            </h2>
          </div>
          <p className="wow animate__zoomIn" data-wow-duration="1.5s">
            نملك الأفكار الإبداعية التى تستطيع أن تصل بمشروعك إلى الجمهور المستهدف، مع البوسطجية هتلاقى كل الأفكار الدعائية اللى نفسك فيها إعلاناتك مع البوسطجية ليها طعم مختلف .
          </p>
          <div className="about-inner">
            <div className="about-items">
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-building"></i>
                <span>
                  <h4>نشأتنا</h4>
                  <p>
                    تم تأسيس البوسطجية فى نوفمبر 2017 للدعاية و الإعلان و التسويق الرقمى فى جميع محافظات مصر
                  </p>
                </span>
              </div>
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-paint-brush"></i>{" "}
                <span>
                  <h4>رسالتنا</h4>
                  <p>
                    نسعى إلى توفير جميع البرامج الدعائية و الأفكار الإبداعية لنجاح مشروعك بأقل الأسعار مع البوسطجية هتوصل لجمهورك من غير ما تدفع كتيرر
                  </p>
                </span>
              </div>
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-chart-line"></i>{" "}
                <span>
                  <h4>هدفنا</h4>
                  <p>
                    هدفنا هو توفير أفضل الحملات الدعائية لأهلنا فى السويس 
                    خاصة و كل أهلنا فى حميع المحافظات
                  </p>
                </span>
              </div>
              <div
                className="item wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <i className="fas fa-chess-board"></i>{" "}
                <span>
                  <h4>إستراتيجياتنا</h4>
                  <p>
                    نسعى إلى الإرتقاء بمستوى و جودة الإعلانات لتناسب الجميع من خلال التنوع فى البرامج الدعائية لتناسب جميع العملاء و كل الأنشطة  
                  </p>
                </span>
              </div>
            </div>
            <div className="about-img">
              <div
                className="download-cv wow animate__zoomIn"
                data-wow-duration="1.5s"
              >
                <img src={AboutImg} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
