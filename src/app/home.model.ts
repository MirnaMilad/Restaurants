export class Home {
    categories: Category[]
    sliders: Slider[]
    newoffers: Newoffer[]
}

export class Category {
    name: string
    photo: string
    id: number
}

export class Slider {
    photo: string
}

export class Newoffer {
    name: string
    RestauranthId: number
    description: string
    cover: string
    cuisines: Cusinies[]

}
export class Cusinies {
    name: string
}