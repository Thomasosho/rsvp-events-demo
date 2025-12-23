import { format, parseISO, isPast, isToday, isTomorrow } from 'date-fns';

export const formatEventDate = (dateString: string, timeString: string): string => {
  const date = parseISO(`${dateString}T${timeString}:00`);
  return format(date, 'MMM d, yyyy • h:mm a');
};

export const formatShortDate = (dateString: string): string => {
  const date = parseISO(dateString);
  if (isToday(date)) return 'Today';
  if (isTomorrow(date)) return 'Tomorrow';
  return format(date, 'MMM d');
};

export const isEventPast = (dateString: string, timeString: string): boolean => {
  const date = parseISO(`${dateString}T${timeString}:00`);
  return isPast(date);
};

export const getEventStatus = (dateString: string, timeString: string): 'upcoming' | 'today' | 'past' => {
  const date = parseISO(`${dateString}T${timeString}:00`);
  if (isPast(date)) return 'past';
  if (isToday(date)) return 'today';
  return 'upcoming';
};

