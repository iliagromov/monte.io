import React, { FC } from 'react';

import './AppUi.scss';
import { StaticImage } from 'gatsby-plugin-image';

const AppUiComponent: FC = () => {
    
    return (

        <section className="app-ui section">
      <div className="container">
        <div className="row">
          <div className="app-ui__text">
            <h2 className="app-ui__title h1">
              Everything you need from <br />the chip-tuning
            </h2>
          </div>
          <div className="app-ui__img">
            <div className="app-ui-img">
              <StaticImage
                  className="app-ui-img__car"
                  src='../../../assets/images/app-ui-Mercedes-with-bg.png'
                  alt={` image`}
                  />
            </div>
          </div>
        </div>

          <div className="everything-description">
            <div className="everything-description__item">
                <StaticImage
                  className="description-item__screen"
                  src='../../../assets/images/mode.png'
                  alt={` image`}
                  />
                <div className="description-item__title">Switch between modes</div>
                <div className="description-item__text">Control your car performance right from the smartphone, Drive faster or save fuel with a push of the button.</div>
            </div>
            <div className="everything-description__item">
                <StaticImage
                  className="description-item__screen"
                  src='../../../assets/images/vehicle.png'
                  alt={` image`}
                  />
               
                <div className="description-item__title">Unlimited vehicle change</div>
                <div className="description-item__text">Upload your vehicle specific tune from our cloud based database of our 9000 vehicles right from your smartphone.</div>
                </div>
              <div className="everything-description__item">
              <StaticImage
                  className="description-item__screen"
                  src='../../../assets/images/speed.png'
                  alt={` image`}
                  />
              <div className="description-item__title">Watch speed in real time</div>
              <div className="description-item__text">Turn your phone into speedometer to accurately project your current speed.</div>
              </div>
              <div className="everything-description__item">
                <StaticImage
                  className="description-item__screen"
                  src='../../../assets/images/Bluetooth.png'
                  alt={` image`}
                  />
                  
                  <div className="description-item__title">Easy pairing with Bluetooth </div>
                  <div className="description-item__text">Control your car performance right from the smartphone, Drive faster or save fuel with a push of the button.</div>
              </div>
            </div>
      </div>
    </section>

    );
}


export { AppUiComponent };

