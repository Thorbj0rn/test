



const paramsIniState = [    {
                                id: 0,
                                name: "Наименование",
                                type: "string",
                                required: true
                            },
                            {
                                id: 1,
                                name: "Цена",
                                type: "number",
                                required: false
                            }
                        ]
const productsIniState = []



export function params(state = paramsIniState, action){
    switch (action.type){
        case 'ADD_PARAM':
            return  state.concat(
                                                            {
                                                            id: action.id,
                                                            name: action.name,
                                                            type: action.paramType,
                                                            required: action.required
                                                            }
                                                        )

        default:
            return state;

    }
}