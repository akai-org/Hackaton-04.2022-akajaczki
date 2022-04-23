import { Box } from '@mui/material';

export const setHarmfulness = (harmfulness: number) => {
    if (harmfulness < 25)
        return (
            <Box color="blue" textAlign="center" fontSize="inherit">
                Neutralne węglowo
            </Box>
        );
    if (harmfulness >= 25 && harmfulness < 50) return <Box color="green" textAlign="center" fontSize="inherit">Niska Szkodliwość</Box>;
    if (harmfulness >= 50 && harmfulness <= 75) return <Box color="yellow" textAlign="center" fontSize="inherit">Średnia Szkodliwość</Box>;
    return <Box color="red" textAlign="center" fontSize="inherit">Wysoka Szkodliwość</Box>;
};