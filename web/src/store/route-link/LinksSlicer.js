import { createSlice } from '@reduxjs/toolkit'
import { BiRestaurant } from 'react-icons/bi'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { FaStar, FaUser, FaHeart } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'

const initialState = {
	LoginLinks: [
		{
			name: 'Rezervasyonlar',
			href: '/reservations',
			icon: <GiNotebook fontSize={18} />,
		},
		{
			name: 'Restoranlar',
			href: '/discover',
			icon: <BiRestaurant fontSize={18} />,
		},
		{
			name: 'Favori Restoranlar',
			href: '/favorites',
			icon: <FaHeart fontSize={18} />,
		},
		{
			name: 'Kategoriler',
			href: '/discover',
			icon: <FaStar fontSize={18} />,
		},
		{
			name: 'Profilim',
			href: '/profile',
			icon: <FaUser fontSize={18} />,
		},
	],

	LogoutLinks: [
		{
			name: 'Restoranlar',
			href: '/discover',
			icon: <BiRestaurant fontSize={18} />,
		},
		{
			name: 'Favori Restoranlar',
			href: '/favorites',
			icon: <FaHeart fontSize={18} />,
		},
		{
			name: 'Categoriler',
			href: '#',
			icon: <FaStar fontSize={18} />,
		},
	],

	profileLinks: [
		{
			name: 'Rezervasyonlar',
			href: '/reservations',
			icon: <GiNotebook fontSize={18} />,
		},
		{
			name: 'Favori Restoranlar',
			href: '/favorites',
			icon: <FaHeart fontSize={18} />,
		},
		{
			name: 'Kategoriler',
			href: '#',
			icon: <FaStar fontSize={18} />,
		},
		{
			name: 'Profilim',
			href: '/profile',
			icon: <FaUser fontSize={18} />,
		},

		{
			name: 'Şifre Değiştir',
			href: '/reset_password',
			icon: <BsFillShieldLockFill fontSize={18} />,
		},
	],
}

export const Links = createSlice({
	name: 'Links',
	initialState,

	reducers: {},
})

export default Links.reducer
