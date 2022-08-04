import React, { Component } from 'react';
import Slider from "react-slick";


export default class Activitiess extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };
      return (
        <div className="">
                  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <Slider className="-mx-2 relative" {...settings}>
                  <div>
                      <div className="h-[360px] w-[640px] bg-center bg-no-repeat bg-cover" href="/community" 
                           style={{backgroundImage: 'url(https://media.kommunity.com/communities/sufle-cloud/events/sufle-webinar-series-aws-account-security-151b2324/43234/1200x627-35.png?p=event-640)'}}></div>
                  </div>
          <div>
                      <div className="h-[360px] w-[640px] bg-center bg-no-repeat bg-cover"
                           style={{backgroundImage: 'url(https://media.kommunity.com/communities/sufle-cloud/events/sufle-webinar-series-aws-account-security-151b2324/43234/1200x627-35.png?p=event-640)'}}></div>
                  </div>
                  <div>
                      <div className="h-[360px] w-[640px] bg-center bg-no-repeat bg-cover"
                           style={{backgroundImage: 'url(https://media.kommunity.com/communities/dahaiyiol/22829/1.png?p=community-370)'}}></div>
                  </div>
                  <div>
                      <div className="h-[360px] w-[640px] bg-center bg-no-repeat bg-cover"
                           style={{backgroundImage: 'url(https://media.kommunity.com/communities/dahaiyiol/22829/1.png?p=community-370)'}}></div>
                  </div>
                  <div>
                      <div className="h-[360px] w-[640px] bg-center bg-no-repeat bg-cover"
                           style={{backgroundImage: 'url(https://media.kommunity.com/communities/late-night-talks/events/late-night-talks-83-bf79d4d0/43002/ltn.jpeg?p=event-640)'}}></div>
                  </div>
              </Slider>
        </div>
      );
    }
  }
  
  const cssstyle = `
  .container {
    margin: 0 auto;
    padding: 0px 4px 4px 4px;
    width: 9000px;
  }
  h3 {
      background: #5f9ea0;
      color: #fff;
      font-size: 36px;
      line-height: 100px;
      margin: 10px;
      padding: 2%;
      position: relative;
      text-align: center;
  
  }
  .div{
      heigh: 5000px;
      padding: 10px;
  
  
  }
  .slick-next:before, .slick-prev:before {
      color: #001;
  }
  `