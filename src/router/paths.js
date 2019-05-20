/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [{
        path: '/dashboard',
        // Relative to /src/views
        name: 'Reports',
        view: 'Dashboard'
    },
    {
        path: '/user-profile',
        name: 'Acquisition',
        view: 'UserProfile'
    },
    {
        path: '/table-list',
        name: 'Logs',
        view: 'TableList'
    },
    {
        path: '/icons',
        name: 'Applications & Extensions',
        view: 'Icons'
    },
    {
        path: '/maps',
        view: 'Maps'
    },
    {
        path: '/notifications',
        view: 'Notifications'
    },
    {
        path: '/typography',
        name: 'Help',
        view: 'Typography'
    },
    {
        path: '/upgrade',
        name: 'Upgrade to PRO',
        view: 'Upgrade'
    }
]