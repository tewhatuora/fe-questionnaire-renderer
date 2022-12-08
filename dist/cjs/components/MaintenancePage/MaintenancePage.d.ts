/// <reference types="react" />
export interface MaintenanceData {
    data: {
        inMaintenance: string;
        maintenanceMessage: string;
    };
    status: number;
}
interface Props {
    children: JSX.Element;
    pollInterval: number;
    useMaintenancePage: boolean;
    getMaintenanceMode(): Promise<any>;
}
export default function MaintenancePage({ children, getMaintenanceMode, pollInterval, useMaintenancePage }: Props): JSX.Element;
export {};
