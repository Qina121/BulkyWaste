import Vue from 'vue'
import VueRouter from 'vue-router'
import mainview from '../views/mainview.vue'
import AboutUser from '../components/AboutUser.vue'
import AdministratorRecordForm from '../components/AdministratorRecordForm.vue'
import OtherRecordForm from '../components/OtherRecordForm.vue'

import AppletUser from '../components/AppletUser.vue'
import BackgroundUser from '../components/BackgroundUser.vue'
import Gps from '../components/Gps.vue'
import NewOrder from '../components/NewOrder.vue'
import NewOrders from '../components/NewOrders.vue'
import Order from '../components/Order.vue'
import Notice from '../components/Notice.vue'
import OrderDetail from '../components/OrderDetail.vue'
import CompleteOrder from '../components/CompleteOrder.vue'
import RejectOrder from '../components/RejectOrder.vue'
import TaskCompleted from '../components/TaskCompleted.vue'
import MissionOn from '../components/MissionOn.vue'
import SendTask from '../components/SendTask.vue'
import OnAccess from '../components/OnAccess.vue'
import Car from '../components/Car.vue'
import QuantitativeStatistics from '../components/QuantitativeStatistics.vue'
import TrainStatistics  from '../components/TrainStatistics.vue'
import DriverStatistics  from '../components/DriverStatistics.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
  const routes = [
  {
    path: '/',
    name: 'mainview',
    component: mainview
  },
  
  {
    path: '/home',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
    children:[
      {
        path: 'AboutUser',
        name: 'AboutUser',
        component: AboutUser,
      },
      {
        path: 'AdministratorRecordForm',
        name: 'AdministratorRecordForm',
        component: AdministratorRecordForm,
      },
      {
        path: 'OtherRecordForm',
        name: 'OtherRecordForm',
        component: OtherRecordForm,
      },
      {
        path: 'AppletUser',
        name: 'AppletUser',
        component: AppletUser,
      },
      {
        path: 'BackgroundUser',
        name: 'BackgroundUser',
        component: BackgroundUser,
      },
      {
        path: 'Gps',
        name: 'Gps',
        component: Gps,
      },
      {
        path: 'NewOrder',
        name: 'NewOrder',
        component: NewOrder,
      },
      {
        path: 'NewOrders',
        name: 'NewOrders',
        component: NewOrders,
      },
      {
        path: 'Order',
        name: 'Order',
        component: Order,
      },
      {
        path: 'Notice',
        name: 'Notice',
        component: Notice,
      },
      {
        path: 'OrderDetail',
        name: 'OrderDetail',
        component: OrderDetail,
      },
      {
        path: 'CompleteOrder',
        name: 'CompleteOrder',
        component: CompleteOrder,
      },
        {
            path: 'RejectOrder',
            name: 'RejectOrder',
            component: RejectOrder,
        },
      {
        path: 'TaskCompleted',
        name: 'TaskCompleted',
        component: TaskCompleted,
      },
      {
        path: 'MissionOn',
        name: 'MissionOn',
        component: MissionOn,
      },
      {
        path: 'SendTask',
        name: 'SendTask',
        component: SendTask,
      },
      {
        path: 'OnAccess',
        name: 'OnAccess',
        component: OnAccess,
      },
      {
        path: 'Car',
        name: 'Car',
        component: Car,
      },
      {
        path: 'QuantitativeStatistics',
        name: 'QuantitativeStatistics',
        component: QuantitativeStatistics,
      },
        {
        path: 'TrainStatistics',
        name: 'TrainStatistics',
        component: TrainStatistics,
      },
      {
        path: 'DriverStatistics',
        name: 'DriverStatistics',
        component: DriverStatistics,
      },



    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
