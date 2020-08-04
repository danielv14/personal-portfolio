import { format } from 'date-fns';

export const formatDate = (date: string, dateFormat: string) => format(new Date(date), dateFormat);
