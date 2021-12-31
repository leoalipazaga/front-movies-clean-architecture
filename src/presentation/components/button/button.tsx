import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function XepButton(props: any) {
  const CustomButton = styled(Button)({
    backgroundColor: '#5031A9',
    height: '60px',
    borderRadius: '6px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#4928a8'
    }
  });

  return <CustomButton variant='contained' {...props}>{props.children}</CustomButton>;
}