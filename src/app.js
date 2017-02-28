export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Pragma Products';
        config.map([
            {route: ['', 'welcome'], name: 'welcome',      moduleId: 'views/welcome/welcome',      nav: true, title: 'Welcome'},
            {route: ['help'], name: 'help',      moduleId: 'views/help/help',      nav: true, title: 'Help'}
        ]);

        this.router = router;
    }

    help() {
        this.router.navigateToRoute('help');
    }
}