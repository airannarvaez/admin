export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'BD Pública'
  },
  {
    name: 'Revistas',
    url: '/magazzine',
    icon: 'fa fa-leanpub',
    children: [
      {
        name: 'Nueva Revista',
        url: '/magazine/new-magazine',
        icon: 'fa fa-plus-circle'
      }
    ]
  },
  {
    title: true,
    name: 'Beta'
  },
  {
    name: 'Traducciones',
    url: '/translations',
    icon: 'icon-book-open',
    children: [
      {
        name: 'Nombres de Feature',
        url: '/translations/features',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/pages/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/pages/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/pages/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/pages/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star'
      },
      {
        name: 'Simple Line',
        url: '/icons/simple-line',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger'
  }
];
