import React from 'react';

import background from '../../Assets/img/infoBg.jpg';
import sushiSvg from '../../Assets/img/svg/sushi.svg';
import shopSvg from '../../Assets/img/svg/shop.svg';
const AboutUsBlock = () => {
    const [switchInfo, setSwitchInfo] = React.useState(0);

    return (
        <div className="AboutUsBlock" style={{background: `url(${background}) no-repeat center center`}}>
            {switchInfo === 0 ?
                <div className="aboutUsBlock__info">
                    <img src={sushiSvg} alt="Sushi" />
                    <div className="AboutUsBlock__text">
                        <h1>Just taste it</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat natus necessitatibus at reprehenderit doloribus aliquam. Eius, iure nobis, dicta mollitia deserunt soluta, maiores id excepturi in enim incidunt iusto.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error id minima nostrum temporibus quod ea culpa non ut assumenda aut aperiam, quis voluptatum maxime ipsa omnis consequatur. Impedit in sapiente facere ad. Hic, vel. Quos aperiam pariatur quis nulla delectus.
                        </p>
                    </div>
                </div>
            
            :
            <div className="aboutUsBlock__info">
                    <img src={shopSvg} alt="Sushi" />
                    <div className="AboutUsBlock__text">
                        <h1>always there</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat natus necessitatibus at reprehenderit doloribus aliquam. Eius, iure nobis, dicta mollitia deserunt soluta, maiores id excepturi in enim incidunt iusto.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error id minima nostrum temporibus quod ea culpa non ut assumenda aut aperiam, quis voluptatum maxime ipsa omnis consequatur. Impedit in sapiente facere ad. Hic, vel. Quos aperiam pariatur quis nulla delectus.
                        </p>
                    </div>
                </div>
            }
            <div className="switchBlock">
                <button onClick={() => setSwitchInfo(0)} className={switchInfo === 0 ? 'focusedSwitch': ''}/>
                <button onClick={() => setSwitchInfo(1)} className={switchInfo === 1 ? 'focusedSwitch': ''}/>

            </div>
        </div>
    );
}

export default AboutUsBlock;