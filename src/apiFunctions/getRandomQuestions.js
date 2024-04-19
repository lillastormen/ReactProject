import APIURL from "./config";

export async function getRandomQuestions() {
    const response = await fetch(APIURL + '/questions');
    const json = await response.json();
    return json;
}

export default getRandomQuestions;