import Inputs from '../../../../components/shared/Input/Inputs'
import Buttons from '../../../../components/shared/button/Button'
import { useEditForm } from './useEditForm'
import {
	Stack,
	FormControl,
	FormLabel,
	FormHelperText,
	Text,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import { MdAddAPhoto } from 'react-icons/md'

const EditForm = () => {
	const { values, handleBlur, handleChange, handleSubmit, userDetail } =
		useEditForm()

	return (
		<VStack as='form' onSubmit={handleSubmit} h='auto'>
			<Stack w='full' textAlign='start'>
				<FormControl
					w='72px'
					h='72px'
					bg='gray.300'
					borderRadius='50%'
					cursor='pointer'
					display='flex'
					alignItems='center'
					justifyContent='center'
					color='#fff'
				>
					<FormLabel htmlFor='add_image' m={0}>
						<MdAddAPhoto cursor='pointer' color='#777' fontSize={22} />
					</FormLabel>
					<Stack display='none'>
						<Inputs
							name='user_photo'
							value={values.user_photo}
							onchange={handleChange}
							onblur={handleBlur}
							type='file'
							id='add_image'
						/>
					</Stack>
				</FormControl>

				<FormControl>
					<FormHelperText fontSize={10}>E-posta Adresi...</FormHelperText>
					<Text fontSize={12} mt={2}>
						{userDetail.mail}
					</Text>
				</FormControl>
			</Stack>

			<Stack w='full' direction='row' spacing={8} pt={5}>
				<Inputs
					name='firstname'
					placeholder='Ad'
					border='1px solid #777'
					fontSize={14}
					value={values.firstname}
					onchange={handleChange}
					onblur={handleBlur}
					size='sm'
				/>
				<Inputs
					name='lastname'
					placeholder='Soyad'
					border='1px solid #777'
					fontSize={14}
					value={values.lastname}
					onchange={handleChange}
					onBlur={handleBlur}
					size='sm'
				/>
			</Stack>

			<Stack w='full' pt={5}>
				<Inputs
					name='username'
					placeholder='Kullanici Adi'
					fontSize={14}
					border='1px solid #777'
					value={values.username}
					onchange={handleChange}
					onblur={handleBlur}
					size='sm'
				/>
			</Stack>

			<Stack w='full' pt={5}>
				<Inputs
					name='email'
					type='email'
					fontSize={14}
					placeholder='E-mail'
					border='1px solid #777'
					value={values.email}
					onchange={handleChange}
					onblur={handleBlur}
					size='sm'
				/>
			</Stack>

			<Stack w='full' pt={5}>
				<Buttons
					title='Bilgileri Güncelle'
					fontsize={13}
					background='#007AFF'
					fontweight={100}
					color='#fff'
					type='submit'
					size='sm'
				/>
			</Stack>
		</VStack>
	)
}

export default EditForm
