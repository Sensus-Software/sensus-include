import { request } from "./graphql";
import { queries } from "./queries";
import { FlowRequestSettings, ProjectVersionSettings, ServerSettings } from "./types";

export class Sensus {
    constructor(private serverSettings: ServerSettings) { }

    public flow(projectVersionSettings: ProjectVersionSettings, flowSettings: FlowRequestSettings, target: HTMLElement) {
        const query = queries.processFlow
        const variables = { ...projectVersionSettings, ...flowSettings }
        request(this.serverSettings, query, variables)
            .then(json => json.data.projectVersion.diagram[0].activityFlow.contents)
            .then(contents => target.innerHTML = contents)
    }
}