ngDescribe({
    name: 'Test routes configuration',
    inject:['$location','$state'],
    modules: 'app',
    tests: function (deps) {
        function goTo(url) {
            deps.$location.path(url);
            deps.$rootScope.$digest();
        }
        describe('path', function () {

            describe('when /', function () {
                it('should go to the app.images state', function () {
                    goTo('/');
                    expect(deps.$state.$current.name).toEqual('app.login');
                });
            });

            describe('when /login', function () {
                it('should go to the app.login state', function () {
                    goTo('/login');
                    expect(deps.$state.$current.name).toEqual('app.login');
                });
            });

            describe('when /register', function () {
                it('should go to the app.register state', function () {
                    goTo('/register');
                    expect(deps.$state.$current.name).toEqual('app.register');
                });
            });

        });
    }
});