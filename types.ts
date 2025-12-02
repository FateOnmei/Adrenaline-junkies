export interface Adventure {
  id: string;
  title: string;
  description: string;
  activities: string[];
  priceLevel: '€' | '€€' | '€€€';
  difficulty: 'Střední' | 'Vysoká' | 'Extrémní';
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ViewState {
  HOME,
  DETAILS
}