import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { BASE_IMG_URL } from '../../../../../main/constants';
import { addFavorite, removeFavorite } from '../../../../../features/movies/data/movies.actions';
import { XepModal } from '..';
import styles from './card.module.css';

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
		props.isFavorite ? dispatch(removeFavorite({ movie: props })) : dispatch(addFavorite({ movie: props }));
		closeModal();
	}

	function _formatDateEs(date: string) {
		const newDate = new Date(date.replace('-', '/'));

		return newDate.toLocaleDateString('es-pe', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	}

	return (
		<>
			<Card sx={{ maxWidth: 188 }} onClick={openModal} className={styles.card}>
				<CardMedia
					component="img"
					height="282"
					image={`${BASE_IMG_URL}${props.poster}`}
					alt={props.title}
				/>
				<CardContent className={styles.card__content}>
					<Typography variant="body2">
						{props.title}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{_formatDateEs(props.releaseDate)}
					</Typography>
				</CardContent>
			</Card>
			<XepModal handleClose={closeModal} handleFavorite={handleFavorite} open={isOpenModal} movie={{ title: props.title, poster: `${BASE_IMG_URL}${props.poster}`, description: props.description, isFavorite: props.isFavorite }}></XepModal>
		</>
	);
}
