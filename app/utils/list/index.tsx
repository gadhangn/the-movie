import IconHome from '@assets/icons/IconHome'
import IconIncentive from '@assets/icons/IconIncentive'
import IconChart from '@assets/icons/IconChart'
import IconSMPStatus from '@assets/icons/IconSMPStatus'
import IconListReceipt from '@assets/icons/IconListReceipt'

const MENU_HEADER = [
  {
    id: 'Home-01',
    name: 'Home',
    href: '/',
    icon: 'IconHome',
    submenu: [],
  },
  {
    id: 'WatchList-02',
    name: 'WatchList',
    href: '/watch-list',
    icon: 'IconListReceipt',
    submenu: [],
  },
  // {
  //   id: 'Incentive-03',
  //   name: 'Incentive',
  //   href: '/incentive',
  //   icon: 'IconIncentive',
  //   submenu: [],
  // },
  // {
  //   id: 'Chart-04',
  //   name: 'Chart',
  //   href: '/chart',
  //   icon: 'IconChart',
  //   submenu: [],
  // },
  // {
  //   id: 'SMPStatus-05',
  //   name: 'SMP Status',
  //   href: '/smpstatus',
  //   icon: 'IconSMPStatus',
  //   submenu: [],
  // },
]

const ICON_MENU = {
  IconHome: ({ color }: { color: string }) => <IconHome width={20} height={20} color={color} />,
  IconListReceipt: ({ color }: { color: string }) => <IconListReceipt width={20} height={20} color={color} />,
  IconIncentive: ({ color }: { color: string }) => <IconIncentive width={20} height={20} color={color} />,
  IconChart: ({ color }: { color: string }) => <IconChart width={20} height={20} color={color} />,
  IconSMPStatus: ({ color }: { color: string }) => <IconSMPStatus width={20} height={20} color={color} />,
}

export { MENU_HEADER, ICON_MENU }
