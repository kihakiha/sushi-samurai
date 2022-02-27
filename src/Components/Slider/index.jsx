import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../../Assets/img/1.jpg';
import image2 from '../../Assets/img/2.jpg';

const Slider = () => {
	return (
		<AwesomeSlider bullets={false} transitionDelay={0} className='slider'>
			<div data-src={image1} />
			<div data-src={image2} />
		</AwesomeSlider>
	);
};

export default Slider;
