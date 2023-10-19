import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '25/08/2023',
    description: '10pm-11pm',
    logo: '/assets/avatars/avatar-alcides-antonio.png',
    title: 'Patient 231',
    // downloads: '594'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '26/08/2023',
    description: '10pm-11pm',
    logo: '/assets/avatars/avatar-anika-visser.png',
    title: 'Patient 69',
    // downloads: '625'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: '10pm-11pm',
    logo: '/assets/avatars/avatar-cao-yu.png',
    title: 'Patient 322',
    // downloads: '857'
  },
  // {
  //   id: '1efecb2bf6a51def9869ab0f',
  //   createdAt: '04/04/2019',
  //   description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
  //   logo: '/assets/logos/logo-lyft.png',
  //   title: 'Lyft',
  //   downloads: '406'
  // },
  // {
  //   id: '1ed68149f65fbc6089b5fd07',
  //   createdAt: '04/04/2019',
  //   description: 'GitHub is a web-based hosting service for version control of code using Git.',
  //   logo: '/assets/logos/logo-github.png',
  //   title: 'GitHub',
  //   downloads: '835'
  // },
  // {
  //   id: '5dab321376eff6177407e887',
  //   createdAt: '04/04/2019',
  //   description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
  //   logo: '/assets/logos/logo-squarespace.png',
  //   title: 'Squarespace',
  //   downloads: '835'
  //}
];

const Page = () => (
  <>
    <Head>
      <title>
        Appointments
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Appointments
              </Typography>
            </Stack>
            <div>
              <Button
                variant="contained"
              >
                View past
              </Button>
            </div>
          </Stack>
          <Typography variant="h5">
            Requests
          </Typography>
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
          </Box>

          <Typography variant="h5">
            Upcoming
          </Typography>
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
          </Box>
        </Stack>

        
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
