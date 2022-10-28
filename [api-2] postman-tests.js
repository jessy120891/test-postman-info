pm.test("Validate it contains 'Sql error'", function () {
    pm.expect(pm.response.text()).to.include("Sql error");
});

pm.test("Status code is 500", function () {
    pm.response.to.have.status(500);
});