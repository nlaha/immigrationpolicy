import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { BarChart, Bar } from "recharts";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

var tabledata = {};
var yearlyH2b = [
  {
    Year: "2013",
    "Certified Jobs": 82307,
    "H-2B Cap": 66000,
    "Visas Issued": 57600,
  },
  {
    Year: "2014",
    "Certified Jobs": 93698,
    "H-2B Cap": 66000,
    "Visas Issued": 68102,
  },
  {
    Year: "2015",
    "Certified Jobs": 101765,
    "H-2B Cap": 66000,
    "Visas Issued": 69684,
  },
  {
    Year: "2016",
    "Certified Jobs": 119232,
    "H-2B Cap": 66000,
    "Visas Issued": 84627,
  },
  {
    Year: "2017",
    "Certified Jobs": 133985,
    "H-2B Cap": 66000,
    "Visas Issued": 83600,
  },
];

var H2BJobType_Columns = [
  {
    field: "Job Type",
    headerName: "Job Type",
    width: "40%",
  },
  {
    field: "Workers",
    headerName: "Workers",
    type: "number",
    width: "40%",
  },
];

var H2BJobType = [
  {
    id: 0,
    "Job Type": "Landscaping and Groundskeeping Workers",
    Workers: 53938,
  },
  { id: 1, "Job Type": "Forest and Conservation Workers", Workers: 10918 },
  { id: 2, "Job Type": "Maids and Housekeeping Cleaners", Workers: 10064 },
  { id: 3, "Job Type": "Amusement and Recreation Attendants", Workers: 7124 },
  {
    id: 4,
    "Job Type": "Meat, Poultry, and Fish Cutters and Trimmers",
    Workers: 7021,
  },
  { id: 5, "Job Type": "Construction Laborers", Workers: 4499 },
  { id: 6, "Job Type": "Waiters and Waitresses", Workers: 3730 },
  { id: 7, "Job Type": "Cooks, Restaurant", Workers: 2598 },
  {
    id: 8,
    "Job Type": "Counter Attendants, Cafeteria, Food Concession",
    Workers: 1793,
  },
  { id: 9, "Job Type": "Nonfarm Animal Caretakers", Workers: 1638 },
];

function H2bCount() {
  fetch("H-2B_FY2018.json")
    .then((response) => response.json())
    .then((data) => (tabledata = data));

  return (
    <div className="yearlyH2B">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={yearlyH2b}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Visas Issued"
            stroke="#346eeb"
            strokeWidth="3"
          />
          <Line
            type="monotone"
            dataKey="Certified Jobs"
            stroke="#e85a4f"
            strokeWidth="3"
          />
          <Line
            type="monotone"
            dataKey="H-2B Cap"
            stroke="#5ab873"
            strokeWidth="3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function H2bJobType() {
  return (
    <TableContainer component={Paper} className="jobTypeH2B">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Type</TableCell>
            <TableCell align="right">Workers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {H2BJobType.map((row) => (
            <TableRow key={row["id"]}>
              <TableCell component="th" scope="row">
                {row["Job Type"]}
              </TableCell>
              <TableCell align="right">{row["Workers"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { H2bCount, H2bJobType };
