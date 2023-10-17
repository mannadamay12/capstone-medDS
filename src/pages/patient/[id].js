import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography, Divider } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import SendIcon from '@mui/icons-material/Send';
import { OverviewSales } from 'src/sections/overview/overview-sales';

const now = new Date();

const data = [
    {
        id: '5e887ac47eed253091be10cb',
        address: '69',
        avatar: '/assets/avatars/avatar-carson-darrin.png',
        createdAt: subDays(subHours(now, 7), 1).getTime(),
        email: 'Heart attack',
        name: 'Carson Darrin',
        phone: '304-428-3097'
    },
    {
        id: '5e887b209c28ac3dd97f6db5',
        address: '29',
        avatar: '/assets/avatars/avatar-fran-perez.png',
        createdAt: subDays(subHours(now, 1), 2).getTime(),
        email: 'Fracture',
        name: 'Fran Perez',
        phone: '712-351-5711'
    },
    {
        id: '5e887b7602bdbc4dbb234b27',
        address: '49',
        avatar: '/assets/avatars/avatar-jie-yan-song.png',
        createdAt: subDays(subHours(now, 4), 2).getTime(),
        email: 'Concussion',
        name: 'Jie Yan Song',
        phone: '770-635-2682'
    },
    {
        id: '5e86809283e28b96d2d38537',
        address: '39',
        avatar: '/assets/avatars/avatar-anika-visser.png',
        createdAt: subDays(subHours(now, 11), 2).getTime(),
        email: 'Hepatitis',
        name: 'Anika Visser',
        phone: '908-691-3242'
    },
    {
        id: '5e86805e2bafd54f66cc95c3',
        address: '39',
        avatar: '/assets/avatars/avatar-miron-vitold.png',
        createdAt: subDays(subHours(now, 7), 3).getTime(),
        email: 'Dermatitis',
        name: 'Miron Vitold',
        phone: '972-333-4106'
    },
    {
        id: '5e887a1fbefd7938eea9c981',
        address: '19',
        avatar: '/assets/avatars/avatar-penjani-inyene.png',
        createdAt: subDays(subHours(now, 5), 4).getTime(),
        email: 'Heart attack',
        name: 'Penjani Inyene',
        phone: '858-602-3409'
    },
    {
        id: '5e887d0b3d090c1b8f162003',
        address: '19',
        avatar: '/assets/avatars/avatar-omar-darboe.png',
        createdAt: subDays(subHours(now, 15), 4).getTime(),
        email: 'Heart attack',
        name: 'Omar Darobe',
        phone: '415-907-2647'
    },
    {
        id: '5e88792be2d4cfb4bf0971d9',
        address: '19',
        avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
        createdAt: subDays(subHours(now, 2), 5).getTime(),
        email: 'Heart attack',
        name: 'Siegbert Gottfried',
        phone: '702-661-1654'
    },
    {
        id: '5e8877da9a65442b11551975',
        address: '19',
        avatar: '/assets/avatars/avatar-iulia-albu.png',
        createdAt: subDays(subHours(now, 8), 6).getTime(),
        email: 'Heart attack',
        name: 'Iulia Albu',
        phone: '313-812-8947'
    },
    {
        id: '5e8680e60cba5019c5ca6fda',
        address: '19',
        avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
        createdAt: subDays(subHours(now, 1), 9).getTime(),
        email: 'Heart attack',
        name: 'Nasimiyu Danai',
        phone: '801-301-7894'
    }
];

const useCustomers = (page, rowsPerPage) => {
    return useMemo(
        () => {
            return applyPagination(data, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
};

const useCustomerIds = (customers) => {
    return useMemo(
        () => {
            return customers.map((customer) => customer.id);
        },
        [customers]
    );
};

const Page = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const customers = useCustomers(page, rowsPerPage);
    const customersIds = useCustomerIds(customers);
    const customersSelection = useSelection(customersIds);

    const handlePageChange = useCallback(
        (event, value) => {
            setPage(value);
        },
        []
    );

    const handleRowsPerPageChange = useCallback(
        (event) => {
            setRowsPerPage(event.target.value);
        },
        []
    );

    const patient = {
        name: "Ishaan Bhola",
        dob: "10/12/2001",
        age: "20",
        gender: "Male",
        id: "123",
        email: "ishaanbhola@gmail.com",
        phone: "987654321",
        emergencyContacts: [],
        medicines: [],
        allergies: [],
        doctorNotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore rerum quia atque consequatur voluptate placeat eos ad doloremque, sequi quasi ipsam sunt voluptatem, modi cupiditate minus laborum nulla. Dolorum!",
        stats: [{
            name: "Heart rate",
            value: "72"
        }, {
            name: "Sp02",
            value: "95"
        }, {
            name: "steps",
            value: "10k"
        }, {
            name: "temperature",
            value: "97 F"
        },],
        prevMessages: [],
        testResults: [],
        appointments: [],
        bloodType: "A-ve",
        history: ""
    }

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid xs={4}>
                            <Stack>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                                        title="green iguana"
                                    />
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {patient.name} ({patient.id})
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.age}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.dob}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.gender}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.bloodType}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Contact information:-
                                            {patient.phone} -  {patient.email}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Stack>
                            <Stack>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Emergency information:-
                                            {patient.phone} -  {patient.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid container xs={8}>
                            <Grid xs={3}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Heart rate
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.stats[0].value}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={3}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Sp02
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.stats[1].value}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={3}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Steps
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.stats[2].value}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={3}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Temperature
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.stats[3].value}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={12}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="h5" gutterBottom>
                                            Test reports
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            <ol>
                                                <li>Heart report - OK - Date</li>
                                                <li>Heart report - Not OK - Date</li>
                                                <li>Heart report - Date</li>
                                            </ol>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid xs={12}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="h5" gutterBottom>
                                            Notes
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            <ul>
                                                <li>Doctor name, Date- Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda dolor esse saepe atque magnam et expedita nulla, laudantium, hic modi voluptates porro at! Officiis harum dolorum amet reiciendis iste.</li>
                                                <li>Doctor name, Date- Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda dolor esse saepe atque magnam et expedita nulla, laudantium, hic modi voluptates porro at! Officiis harum dolorum amet reiciendis iste.</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid>
                        <OverviewSales
                            chartSeries={[
                                {
                                    name: 'Cold',
                                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                                },
                                {
                                    name: 'Infection',
                                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                                },
                                {
                                    name: 'Other',
                                    data: [2, 7, 5, 10, 22, 3, 3, 4, 6, 9, 1, 4]
                                }
                            ]}
                            sx={{ height: '100%' }}
                        />
                    </Grid>

                    <Grid>
                        <CustomersTable
                            count={data.length}
                            items={customers}
                        />
                    </Grid>
                    <Grid>
                        <Card>
                            <CardContent style={{ padding: "10px 15px" }}>
                                <Typography variant="h5" gutterBottom>
                                    Past messages
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    <ul>
                                        <li>Doctor name, Date- Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda dolor esse saepe atque magnam et expedita nulla, laudantium, hic modi voluptates porro at! Officiis harum dolorum amet reiciendis iste.</li>
                                        <li>Doctor name, Date- Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur assumenda dolor esse saepe atque magnam et expedita nulla, laudantium, hic modi voluptates porro at! Officiis harum dolorum amet reiciendis iste.</li>
                                    </ul>
                                </Typography>
                                <TextField id="outlined-basic" label="Message" variant="outlined" />
                                <Button variant="contained" style={{margin:"5px 10px"}} endIcon={<SendIcon />}>
                                    Send
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
