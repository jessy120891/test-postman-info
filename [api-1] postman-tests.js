
const schema = {
    "type": "object",
    "properties": {
        "aemEnabled": { "type": "boolean" },
        "aemFnLnEnabled": { "type": "boolean" },
        "aemPhEnabled": { "type": "boolean" },
        "aemGeEnabled": { "type": "boolean" },
        "aemDbEnabled": { "type": "boolean" },
        "aemLocEnabled": { "type": "boolean" },
        "ctEpikIframeEnabled": { "type": "boolean" },
        "chromeNewUserAgentEnabled": { "type": "boolean" },
        "isEu": { "type": "boolean" },
        "isUtilizingAdvertiser1pEnabled": { "type": "boolean" },
        "mdFrequency": { "type": "number" },
        "ecmOriginTrialToken": { "type": "string" },
        "piaaEndPoint": { "type": "string" }
    },
    "required": [
        "aemEnabled",
        "aemFnLnEnabled",
        "aemPhEnabled",
        "aemGeEnabled",
        "aemDbEnabled",
        "aemLocEnabled",
        "ctEpikIframeEnabled",
        "chromeNewUserAgentEnabled",
        "isEu",
        "isUtilizingAdvertiser1pEnabled",
        "mdFrequency",
        "ecmOriginTrialToken",
        "piaaEndPoint"
    ]
};

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Validate Schema", () => {
    pm.response.to.have.jsonSchema(schema);
});

pm.test("Validate that isUtilizingAdvertiser1pEnabled is 'false'.", () => {
    let jsonData = pm.response.json();
    pm.expect(jsonData.isUtilizingAdvertiser1pEnabled).to.eql(false);
});
