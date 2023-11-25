import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
import BasicModal from 'src/components/BasicModal'
import axios from 'axios';

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
  const [customers,setCustomers] = useState([])

  async function getPatients() {
    try {
      const response = await axios.get('http://localhost:8080/allpatients');
      setCustomers(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(()=>{
    getPatients()
  },[])

  

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
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Patients
                </Typography>
              </Stack>
              <div>
                <BasicModal />
              </div>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
            />
          </Stack>
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
