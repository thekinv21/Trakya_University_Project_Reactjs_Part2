import MainContainer from '../../components/container/MainContainer'
import Aminities from './components/amenities/Aminities'
import Banner from './components/banner/Banner'
import Categories from './components/category/Categories'
import Quetions from './components/questions/Quetions'
import RestList from './components/restaurant_list/RestList'
import React from 'react'

const Main = () => {
	return (
		<React.Fragment>
			{/*========================CONTAİNER===================== */}
			<MainContainer>
				{/*========================BANNER===================== */}
				<Banner />
				{/*========================RESTAURANTLİST=================*/}
				<RestList />

				{/*========================AMINITIES===================== */}
				<Aminities />
				{/*=====================Menus Category===================== */}
				<Categories />
				{/*=====================User Quetions======================= */}
				<Quetions />
			</MainContainer>
		</React.Fragment>
	)
}

export default Main
