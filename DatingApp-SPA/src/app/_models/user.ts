import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    // question mark makes a property optional
    // always put them after required properties
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
