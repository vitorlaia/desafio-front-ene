import { DogGridInfoResponse } from "./dog-grid-info-response.model";

export interface DogGridImageResponse {
    id: string;
    url: string;
    breeds: DogGridInfoResponse[];
    width: number;
    height: number
}