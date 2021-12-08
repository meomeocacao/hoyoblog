import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { ListPosts } from "../components/NavBar/ListPost/ListPost";

export const Expenses = () => {
  return <Box>Expenses</Box>;
};

export const Invoices = () => {
  return <Box>Invoices</Box>;
};

export const ReactRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ListPosts />} />
      <Route path="/ex" element={<Expenses />} />
      <Route path="/in" element={<Invoices />} />
    </Routes>
  );
};
