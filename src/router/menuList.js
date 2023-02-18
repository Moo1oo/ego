const menuList = [
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/GoodsManage'),
    children: [
      {
        path: 'goodslist',
        name: 'GoodsList',
        component: () => import('../views/GoodsManage/List')
      },
      {
        path: 'goodscategory',
        name: 'GoodsCategory',
        component: () => import('../views/GoodsManage/Category')
      },
      {
        path: 'addgoods',
        name: 'AddGoods',
        component: () => import('../views/GoodsManage/List/AddGoods.vue'),
        meta: {
          activeMenu: '/goods/goodslist'
        }
      }
    ]
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order'),
    children: [
      {
        path: 'orderlist',
        name: 'OrderList',
        component: () => import('../views/Order/Orderlist')
      },
      {
        path: 'orderall',
        name: 'OrderAll',
        component: () => import('../views/Order/Orderall')
      },
      {
        path: 'ordercheck',
        name: 'OrderCheck',
        component: () => import('../views/Order/Ordercheck')
      }
    ]
  },
  {
    path: '/advert',
    name: 'Advert',
    component: () => import('../views/Advert'),
    children: [
      {
        path: 'advertlist',
        name: 'AdvertList',
        component: () => import('../views/Advert/Advertlist')
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: () => import('../views/SystemManage'),
    children: [
      {
        path: 'role',
        name: 'Role',
        component: () => import('../views/SystemManage/Role')
      },
      {
        path: 'department',
        name: 'Department',
        component: () => import('../views/SystemManage/Department')
      }
    ]
  }
]

export default menuList
