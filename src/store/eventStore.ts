import { create } from 'zustand';
import { Event, RSVP, User } from '../types';
import { mockEvents, mockRSVPs, mockUser } from '../data/mockData';

interface EventStore {
  events: Event[];
  rsvps: RSVP[];
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  addEvent: (event: Event) => void;
  updateEvent: (eventId: string, updates: Partial<Event>) => void;
  deleteEvent: (eventId: string) => void;
  addRSVP: (rsvp: RSVP) => void;
  updateRSVP: (rsvpId: string, status: RSVP['status']) => void;
  getEventRSVPs: (eventId: string) => RSVP[];
  getUserRSVPs: (userId: string) => RSVP[];
}

export const useEventStore = create<EventStore>((set, get) => ({
  events: mockEvents,
  rsvps: mockRSVPs,
  currentUser: mockUser,
  
  setCurrentUser: (user) => set({ currentUser: user }),
  
  addEvent: (event) => set((state) => ({
    events: [event, ...state.events]
  })),
  
  updateEvent: (eventId, updates) => set((state) => ({
    events: state.events.map((e) =>
      e.id === eventId ? { ...e, ...updates } : e
    )
  })),
  
  deleteEvent: (eventId) => set((state) => ({
    events: state.events.filter((e) => e.id !== eventId)
  })),
  
  addRSVP: (rsvp) => set((state) => ({
    rsvps: [...state.rsvps, rsvp],
    events: state.events.map((e) =>
      e.id === rsvp.eventId
        ? { ...e, rsvpCount: e.rsvpCount + 1 }
        : e
    )
  })),
  
  updateRSVP: (rsvpId, status) => set((state) => {
    const rsvp = state.rsvps.find((r) => r.id === rsvpId);
    if (!rsvp) return state;
    
    const updatedRSVPs = state.rsvps.map((r) =>
      r.id === rsvpId ? { ...r, status } : r
    );
    
    return { rsvps: updatedRSVPs };
  }),
  
  getEventRSVPs: (eventId) => {
    return get().rsvps.filter((r) => r.eventId === eventId && r.status === 'going');
  },
  
  getUserRSVPs: (userId) => {
    return get().rsvps.filter((r) => r.userId === userId);
  },
}));

