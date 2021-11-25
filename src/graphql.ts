import { ServerSettings } from "./types";

export function request(
    serverSettings: ServerSettings,
    query: string,
    variables: any
) {

    const headers = new Headers();
    headers.set('Authorization', `Bearer ${serverSettings.jwt}`);
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json')

    const body = {
        operationName: null,
        variables,
        query
    }

    const init = {
        method: "POST",
        body: JSON.stringify(body),
        headers
    }

    return fetch(serverSettings.apiEndpoint, init)
        .then(data => data.json())
}