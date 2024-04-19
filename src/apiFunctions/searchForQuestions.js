import APIURL from "./config";

//requires a token, can't be used rn
export async function searchForQuestions(category) {

    return fetch(APIURL + '/questions/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            category: category,
        })
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fatch data');
        }
    })
    .catch(error => {
        throw error;
    })
}