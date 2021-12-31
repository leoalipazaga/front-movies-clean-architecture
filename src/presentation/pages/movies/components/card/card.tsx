import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux';
import { useState } from 'react';

import { BASE_IMG_URL } from '../../../../../main/constants';
import { moviesActions } from '../../store';
import { XepModal } from '..';

export default function XepCard(props: any) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const dispatch = useDispatch();

	function openModal() {
		setIsOpenModal(true);
	};

	function closeModal() {
		setIsOpenModal(false);
	}

	function handleFavorite() {
		dispatch(moviesActions.addFavorite(props));
		closeModal();
	}

	return (
		<>
			<Card sx={{ maxWidth: 188 }} onClick={openModal}>
				<CardMedia
					component="img"
					height="282"
					image={`${BASE_IMG_URL}${props.poster}`}
					alt={props.title}
				/>
				<CardContent>
					<Typography variant="body2">
						{props.title}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{props.releaseDate}
					</Typography>
				</CardContent>
			</Card>
			<XepModal handleClose={closeModal} handleFavorite={handleFavorite} open={isOpenModal} movie={{ title: props.title, poster: `${BASE_IMG_URL}${props.poster}`, description: props.description }}></XepModal>
		</>
	);
}
