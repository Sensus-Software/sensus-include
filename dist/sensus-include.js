!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).sensus = e() } }((function () { var e = {}; Object.defineProperty(e, "__esModule", { value: !0 }), e.request = void 0, e.request = function (e, n, t) { const o = new Headers; o.set("Authorization", "Bearer " + e.jwt), o.set("Content-Type", "application/json"), o.set("Accept", "application/json"); const i = { operationName: null, variables: t, query: n }, s = { method: "POST", body: JSON.stringify(i), headers: o }; return fetch(e.apiEndpoint, s).then(e => e.json()) }; var n = {}; Object.defineProperty(n, "__esModule", { value: !0 }), n.queries = void 0, n.queries = { processFlow: "\nquery ProcessFlow($licenseGuid: UUID!, $projectGuid: UUID!, $projectVersionGuid: UUID!, $processGuid: UUID!) {\n    projectVersion(\n      licenseGuid: $licenseGuid\n      projectGuid: $projectGuid\n      projectVersionGuid: $projectVersionGuid\n    ) {\n      diagram(rootGuids: [$processGuid]) {\n        ... on ActivityFlowDiagramContext {\n          activityFlow {\n            contents\n          }\n        }\n      }\n    }\n  }  \n" }; var t = {}; return Object.defineProperty(t, "__esModule", { value: !0 }), t.Sensus = void 0, t.Sensus = class { constructor(e) { this.serverSettings = e } flow(t, o, i) { const s = n.queries.processFlow, r = Object.assign(Object.assign({}, t), o); (0, e.request)(this.serverSettings, s, r).then(e => e.data.projectVersion.diagram[0].activityFlow.contents).then(e => i.innerHTML = e) } }, t }));