const processFlow = `
query ProcessFlow($licenseGuid: UUID!, $projectGuid: UUID!, $projectVersionGuid: UUID!, $processGuid: UUID!) {
    projectVersion(
      licenseGuid: $licenseGuid
      projectGuid: $projectGuid
      projectVersionGuid: $projectVersionGuid
    ) {
      diagram(rootGuids: [$processGuid]) {
        ... on ActivityFlowDiagramContext {
          activityFlow {
            contents
          }
        }
      }
    }
  }  
`

export const queries = {
  processFlow
}