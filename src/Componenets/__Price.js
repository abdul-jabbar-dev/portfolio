import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const tiers = [
    {
        title: 'Starter',
        price: '1000',
        description: [
            'Landing page',
            'Portfolio website',
            'Corporate website',
            'Directory website',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            'eCommerce website',
            'Web portal',
            'Educational website',
            'SaaS websitet',
            'Backend support',
            'More 5+ facilities ',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            'Entertainment website',
            'Marketplace website	',
            'Social media website',
            'Backend support',
            'More 10+ facilities ',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];
const Price = () => {
    return (
        <>
            <br /><br />
            <Typography
                component="h1"
                variant="h2"

                align="center"
                gutterBottom
            >
                Pricing
            </Typography>
            <Container>
                <Grid container spacing={6} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card sx={{ bgcolor: '#302F4E', color: 'white' }}>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: '#302F4E',
                                        color: '#fff'
                                    }}
                                />
                                <CardContent sx={{ bgcolor: '#302F4E' }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" >
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" >
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                                style={{ listStyle: 'none' }}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions sx={{ bgcolor: '#302F4E' }}>
                                    <Button fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <br /><br /><br />
        </>
    );
};

export default Price;