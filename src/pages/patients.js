import {  useEffect, useMemo, useState } from 'react';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import BasicModal from 'src/components/BasicModal'
import axios from 'axios';

const now = new Date();

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
              count={customers.length}
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
