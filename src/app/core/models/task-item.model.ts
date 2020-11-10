export interface TaskItem {
    title: string;
    progressPercentage: number;
    accessPermission: TaskItemTable
}


export interface TaskItemTable {
    headers: Array<string>;
    data: Array<any>;
}