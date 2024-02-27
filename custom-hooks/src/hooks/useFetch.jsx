const useFetch = async ({url}) => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        
    } catch (error) {
        
    }
}