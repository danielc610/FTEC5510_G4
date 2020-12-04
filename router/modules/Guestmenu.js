import layoutapp from '@/views/layoutapp/Layout'
import loginLayout from '@/views/layoutapp/loginLayout/loginLayout'

const Guestmenu =[
    {
        path: '/login',
        component: loginLayout,
        redirect: 'login',
        hidden: true,
        children: [
            {
                path: 'login',
                component: () => import('@/views/layoutapp/login/index'),
                hidden: true,
                meta: {title: 'Login'}
            }
        ]
        
    },
    {
        path: '/appinitdata',
        component: loginLayout,
        redirect: '/appinitdata',
        hidden: true,
        children: [
            {
                path: '/appinitdata',
                component: () => import('@/views/layoutapp/index')
            }
        ]
    }
   
]