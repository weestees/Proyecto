import React from "react";
import { Box, Grid, Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const salesData = [
  { month: "Jan", sales: 30000, purchases: 20000 },
  { month: "Feb", sales: 40000, purchases: 25000 },
  { month: "Mar", sales: 35000, purchases: 22000 },
];

const orderData = [
  { month: "Jan", pedidos: 2000 },
  { month: "Feb", pedidos: 4000 },
  { month: "Mar", pedidos: 3000 },
];

const productos = [
  { name: "Tanque21", cantidad: 30, restante: 12, precio: "$3.50" },
];

const stockBajo = [
  { name: "Tanque21", detalle: "GLP en cilindros industriales" },
];

function App() {
  return (
    <Box sx={{ padding: "16px", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" sx={{ marginBottom: "16px", textAlign: "center" }}>
        Dashboard
      </Typography>

      {/* Resúmenes principales */}
      <Grid container spacing={2}>
        {["Ventas", "Ingresos", "Ganancias", "Costos"].map((titulo, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">{titulo}</Typography>
                <Typography variant="h6">
                  {idx === 0 ? "$8,832" : idx === 1 ? "$18,300" : idx === 2 ? "$8,886" : "$12,432"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Gráficos */}
      <Grid container spacing={2} sx={{ marginTop: "16px" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Compra y Venta</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
              <Bar dataKey="purchases" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Resumen de Pedido</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pedidos" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>

      {/* Productos más vendidos y stock bajo */}
      <Grid container spacing={2} sx={{ marginTop: "16px" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Productos más vendidos</Typography>
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Cantidad Restante</TableCell>
                <TableCell>Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((producto, index) => (
                <TableRow key={index}>
                  <TableCell>{producto.name}</TableCell>
                  <TableCell>{producto.cantidad}</TableCell>
                  <TableCell>{producto.restante}</TableCell>
                  <TableCell>{producto.precio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Stock de baja cantidad</Typography>
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell>Detalle</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stockBajo.map((stock, index) => (
                <TableRow key={index}>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>{stock.detalle}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
