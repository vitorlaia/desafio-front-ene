export interface DogGridInfoResponse {
    weight: DogGridInfoResponseMetric;
    height: DogGridInfoResponseMetric;
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
}

export interface DogGridInfoResponseMetric {
    imperial: string;
    metric: string;
}