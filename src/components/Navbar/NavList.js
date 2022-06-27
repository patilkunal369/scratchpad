import { CgGoogleTasks } from "react-icons/cg";
import { FiBarChart2 } from "react-icons/fi";
import { BsFolder2 } from "react-icons/bs";

export const NavList = [
  {
    icon: <FiBarChart2 size="1.5rem" />,
    label: "Dashboard",
    path: "/dashboard",
    selected: false,
  },
  {
    icon: <BsFolder2 size="1.5rem" />,
    label: "Project",
    path: "/",
    selected: true,
  },
  {
    icon: <CgGoogleTasks size="1.5rem" />,
    label: "Tasks",
    selected: false,
    path: "/#",
  },
];
