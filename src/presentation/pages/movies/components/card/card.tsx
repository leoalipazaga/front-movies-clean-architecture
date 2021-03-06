import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { BASE_IMG_URL } from '../../../../../main/constants';
import { useMoviesStoreImpl } from "../../../../../features/movies/data";
import { XepModal } from '..';
import { useCard } from './card.hooks';
import styles from './card.module.css';

export default function XepCard(props: any) {
	const {
		openModal,
        handleFavorite,
        isOpenModal,
		closeModal
	} = useCard(useMoviesStoreImpl());

	return (
		<>
			<Card sx={{ maxWidth: 188 }} onClick={openModal.bind(null, props)} className={styles.card}>
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
						{ props.releaseDate }
					</Typography>
				</CardContent>
			</Card>
			<XepModal handleClose={closeModal} handleFavorite={handleFavorite} open={isOpenModal} movie={{ title: props.title, poster: `${BASE_IMG_URL}${props.poster}`, description: props.description, isFavorite: props.isFavorite }}></XepModal>
		</>
	);
}
