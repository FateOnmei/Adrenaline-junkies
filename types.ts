export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Adventure {
  id: string;
  title: string;
  description: string;
  longDescription: string; // New: Detailed intro
  activities: string[];
  priceLevel: '€' | '€€' | '€€€';
  difficulty: 'Střední' | 'Vysoká' | 'Extrémní';
  imageUrl: string;
  itinerary: ItineraryDay[]; // New: Day by day plan
  included: string[]; // New: What is covered
  requirements: string[]; // New: Physical/mental reqs
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ViewState {
  HOME,
  ABOUT,
  CONTACT
}