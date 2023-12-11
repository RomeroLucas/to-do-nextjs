import { ITask } from "./tasks";

export interface CardProps {
    task: ITask,
    onChange: (id: string) => void
}

export interface TasksProps {
    tasks: ITask[]
}

export interface FormProps {
    method: string,
    task?: ITask
}