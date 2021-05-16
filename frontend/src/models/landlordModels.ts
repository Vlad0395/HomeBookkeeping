export interface Landlord {
    id: number
    first_name: string
    last_name: string
    middle_name: string
    amount_of_land: string
    cost_of_year: number
    contact_number: string
    note: string
    img: string
}

export interface CreateLandLord {
    first_name: string
    last_name: string
    middle_name: string
    amount_of_land: string
    contact_number: string
    note: string
}
