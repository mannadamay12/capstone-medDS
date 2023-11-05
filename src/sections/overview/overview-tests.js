import { format } from 'date-fns';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';

export const OverviewTests = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Prescription" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Test Name
                </TableCell>
                <TableCell>
                  Remark
                </TableCell>
                <TableCell>
                    Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                     {order.name}
                    </TableCell>
                    <TableCell>
                     {order.remark}
                    </TableCell>
                    <TableCell>
                    {order.date}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
    </Card>
  );
};

OverviewTests.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
