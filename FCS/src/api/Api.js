
const urlGetMovies = 'http://localhost:3000/';
async function getLoginFromApi(username, password) {
    try {
        let response = await fetch(
            urlGetMovies + 'GetLogin?username=' + username + '&password=' + password
        );
        let responseJson = await response.json();
        console.log('',responseJson)
        return responseJson[0];
    } catch (error) {
        console.error(error);
    }
}
export const Api = {
    getLoginFromApi
};