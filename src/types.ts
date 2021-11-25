export type ServerSettings = {
    apiEndpoint: string,
    jwt: string
}

export type ProjectVersionSettings = {
    licenseGuid: string,
    projectGuid: string,
    projectVersionGuid: string
}

export type FlowRequestSettings = {
    processGuid: string
}