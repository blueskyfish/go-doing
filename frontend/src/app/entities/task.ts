
export type TaskEntity = {
  id: number;
  title: string;
  description: string;
  done: boolean;
  date: string;
}

export type TaskPayload = {
  title: string;
  description: string;
  done: boolean;
  date: string;
}
