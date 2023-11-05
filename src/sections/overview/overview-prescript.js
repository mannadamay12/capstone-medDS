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

export const OverviewPrescript = (props) => {
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
                  Medicine
                </TableCell>
                <TableCell>
                  Dosage
                </TableCell>
                <TableCell>
                  Instructions
                </TableCell>
                <TableCell>
                  Duration
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
                     {order.dose}
                    </TableCell>
                    <TableCell>
                        {order.instruct}
                    </TableCell>
                    <TableCell>
                        {order.duration}
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

OverviewPrescript.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
