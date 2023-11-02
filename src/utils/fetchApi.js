// function fetchApi() {

// }

const fetchApi = (params) => {
    const {temp, id} = params
    return fetch(`https://swapi.dev/api/${temp}/${id}`)
}

export default fetchApi