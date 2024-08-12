/**
 * Helper function for fetching data from the API.
 * 
 * @param {string} prompt question for the census
 * @returns {JSON}
 */
export async function getData(prompt) {
    let url = new URL('https://api.census.gov/')

    url.hostname = 'us-east4-census-questions.cloudfunctions.net'
    url.pathname = 'answer-question'
    url.searchParams.set('prompt', prompt)

    try {
        const response = await fetch(url)

        const json = await response.json()

        return json
    } catch (err) {
        throw err
    }
}