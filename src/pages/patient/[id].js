import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation'
import { subDays, subHours } from 'date-fns';
import { Box, Button, Container, Stack, SvgIcon, Typography, Divider } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { applyPagination } from 'src/utils/apply-pagination';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import SendIcon from '@mui/icons-material/Send';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import AddNoteButton from 'src/components/AddNoteButton';
import { PatientAppointmentTable } from 'src/sections/customer/PatientAppointmentTable';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewPrescript } from 'src/sections/overview/overview-prescript';
import { OverviewTests } from 'src/sections/overview/overview-tests';
import Link from 'next/link';


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



const Page = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const customers = useCustomers(page, rowsPerPage);
    const pathname = usePathname()
    const username = pathname.split("/")[2]

    async function getPatient(username) {
        try {
          const response = await axios.get(`http://localhost:8080/patient/${username}`);
          setPatient(response.data)
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
    }

    async function getHeartData() {
        try {
          const response = await axios.get(`http://localhost:8080/heartdata`);
          setHeartData(response.data.pop())
          console.log(response.data.pop())
        } catch (error) {
          console.error(error);
        }
    }

    async function getStepsData() {
        try {
          const response = await axios.get(`http://localhost:8080/stepsdata`);
          setStepsData(response.data.pop())
          console.log(response.data.pop())
        } catch (error) {
          console.error(error);
        }
    }

    const [patient,setPatient]=useState({})
    const [heartData,setHeartData]=useState({})
    const [stepsData,setStepsData]=useState({})
    useEffect(()=>{
        getPatient(username)
        getHeartData()
        getStepsData()
    },[])

    // const [heartrate,setHeartrate] = useState(72);
    // function generateRandomNumber() {
    //     // Generate a random number between 70 and 80
    //     const randomNumber = Math.floor(Math.random() * (80 - 70 + 1)) + 70;
      
    //     // Output the random number
    //     setHeartrate(randomNumber)
    //   }
    //   setInterval(generateRandomNumber, 10000);

    const moreheartratedata = "http://localhost:8080/heartdata"
    const morestepsdata = "http://localhost:8080/stepsdata"
    const emadata = "http://localhost:8080/ema"
    const ekfdata = "http://localhost:8080/efk"

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
                            <Stack >
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={patient.img}
                                        title="patient image"
                                    />
                                    <CardContent style={{ padding: "10px 10px 0px 15px"}}>
                                        <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
                                            {patient.name} ({patient.id})
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {"Age: "} {patient.age}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {"DOB: "} {patient.DOB}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {"Gender: "} {patient.gender}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {"BloodType: "} {patient.bloodtype}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {"Contact Number: "} {patient.contactno}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {"Email: "} {patient.email}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Stack>
                            <Stack>
                                <Card sx={{ maxWidth: 345 }}
                                style={{backgroundColor:"#ff5050"}}>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1"
                                        gutterBottom>
                                            Emergency information:-
                                        </Typography>
                                        <Typography variant="subtitle1">
                                        {patient.phone}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                        {patient.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid container xs={8}>
                            <Grid xs={3} style={{textAlign: 'center'}}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px"}}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Heart rate
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Average - {Math.floor(heartData.avg)}
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Max - {heartData.max}
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            Min - {heartData.min}
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            <Link href={moreheartratedata}>More details</Link>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={3} style={{textAlign: 'center'}}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Sp02
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {patient.sp02}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={2} style={{textAlign: 'center'}}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Steps
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {stepsData.steps}
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            <Link href={morestepsdata}>More details</Link>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={2} style={{textAlign: 'center'}}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            EMA
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            <Link href={emadata}>Click to see patient status history</Link>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={2} style={{textAlign: 'center'}}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            EKF
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            <Link href={ekfdata}>Click to see patient status history</Link>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid xs={12}>
                            <OverviewTests
                                    orders={patient.testreports}/>
                            </Grid>
                            <Grid xs={12}>
                                <Card>
                                    <CardContent style={{ padding: "10px 15px" }}>
                                        <Stack direction="row"
                                            justifyContent="space-between">
                                            <Stack>
                                                <Typography variant="h5" gutterBottom>
                                                    Notes
                                                </Typography>
                                            </Stack>
                                            <Stack xs={1}>
                                                <AddNoteButton />
                                            </Stack>
                                        </Stack>
                                        <Typography variant="subtitle1" gutterBottom>
                                            <ul>
                                                {patient.notes?.map((note)=>{
                                                    return <li>{note}</li>
                                                })}
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <OverviewPrescript
                            orders={patient.prescription}/>
                        </Grid>
                        <Grid xs={6}>
                                    <OverviewLatestProducts
              products={patient.notifications}
              sx={{ height: '100%' }}
            />
                        </Grid>
                        <Grid xs={6}>
                            <OverviewSales
                                title={"Heart rate"}
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
                        <Grid xs={6}>
                            <OverviewSales
                                title={"Sp02"}
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
                        <Grid xs={6}>
                            <OverviewSales
                                title={"Temperature"}
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
                        <Grid xs={6}>
                            <OverviewSales
                                title={"Steps"}
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

                        <Grid xs={12}>
                            <Typography variant="h5" gutterBottom>
                                Appointments
                            </Typography>
                            <PatientAppointmentTable
                                count={data.length}
                                items={customers}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Card style={{ padding: "15px 10px " }}>
                                <CardContent style={{ padding: "10px 15px" }}>
                                    <Typography variant="h5" gutterBottom>
                                        Past messages
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        <ul>
                                            <li>Doctor Jai, 10th Nov - Mr. Smith reports stable blood pressure (132/86 mmHg) and improved overall well-being. Discussed the benefits of a heart-healthy diet and provided resources for dietary guidelines. No adverse reactions to medication noted. Patient encouraged to maintain healthy lifestyle habits. Follow-up in three months for routine check-up.</li>
                                            <li>Doctor Manika, 9th Nov - Mr. Smith presented with elevated blood pressure (150/95 mmHg) and reported occasional dizziness. No significant medical history noted. Started on anti-hypertensive medication (Amlodipine, 5mg daily) and advised dietary changes. Follow-up in two weeks to assess response to medication.</li>
                                        </ul>
                                    </Typography>
                                    <TextField id="outlined-basic" label="Message" variant="outlined" />
                                    <Button variant="contained" style={{ margin: "5px 10px" }} endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
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

