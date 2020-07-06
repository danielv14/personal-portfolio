import { format } from 'date-fns';

const dateFormat = 'yyyy-MM-dd';

export const formatDate = (date: string) => format(new Date(date), dateFormat);
