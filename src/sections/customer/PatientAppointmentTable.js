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

export const PatientAppointmentTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => { },
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Doctor name
                </TableCell>
                <TableCell>
                  Diagnoses
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                const isSelected = selected.includes(customer.id);
                const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={isSelected}
                  >
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      {customer.email}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      {"10:20pm"}
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

PatientAppointmentTable.propTypes = {
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
