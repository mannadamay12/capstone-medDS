import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import Link from 'next/link';

export const CustomersTable = (props) => {
  const items = props.items
  console.log(items) 
  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Diagnoses
                </TableCell>
                <TableCell>
                  Age
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Admitted On
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items?.map((customer) => {
                const redirect = "/patient/"+customer.redirect;
                return (
                  <TableRow
                    hover
                    key={customer.id}
                  >
                    <TableCell>
                      <Link href={redirect}>
                        <Stack
                          alignItems="center"
                          direction="row"
                          spacing={2}
                        >
                          <Avatar src={customer.avatar}>
                            {getInitials(customer.name)}
                          </Avatar>
                          <Typography variant="subtitle2">
                            {customer.name}
                          </Typography>
                        </Stack>
                      </Link>
                    </TableCell>
                    <TableCell>
                      {customer.email}
                    </TableCell>
                    <TableCell>
                      {customer.age}
                    </TableCell>
                    <TableCell>
                      {customer.contactno}
                    </TableCell>
                    <TableCell>
                      {}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
