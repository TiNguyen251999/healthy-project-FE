import React from "react";
import Index from "@/pages/dashboard/Index";
import { RouteObject } from "react-router-dom";

const DashboardRoute: RouteObject = {
  path: "/",
  element: <Index />,
};

export default DashboardRoute;
