import { Car, LineChart, Map } from "lucide-react";
import { ServicesProps } from "../../types/types";

export const SERVICES: ServicesProps[] = [
    {
        icon: Car,
        title: "Traffic Engineering",
        description:
            "I conduct comprehensive traffic impact studies, transportation demand management, and parking analysis, using specialized software like Synchro and VISSIM to optimize traffic flow and safety.",
    },
    {
        icon: Map,
        title: "Geospatial Analysis",
        description:
            "I develop custom GIS solutions and plugins that integrate complex spatial datasets to visualize and analyze transportation networks, helping stakeholders make informed infrastructure decisions.",
    },
    {
        icon: LineChart,
        title: "Transportation Data Science",
        description:
            "I leverage Python and data analysis tools to extract insights from large transportation datasets, identifying patterns and trends that drive evidence-based planning and design solutions.",
    },
];