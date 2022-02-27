import './styles/App.scss';
import Header from './Components/Header/';
import Slider from './Components/Slider/';
import Menu from './Components/Menu/';
import AboutUsBlock from './Components/AboutUsBlock/';
import SubService from './Components/SubService/';
import Footer from './Components/Footer/';
import Cart from './Components/Cart/';
import { OrderProvider } from './providers/OrderProvider';
function App() {
	return (
		<>
			<OrderProvider>
				<Header />
				<Slider />
				<Cart />
				<main>
					<Menu />
					<AboutUsBlock />
				</main>
				<SubService />
				<Footer />
			</OrderProvider>
		</>
	);
}

export default App;
