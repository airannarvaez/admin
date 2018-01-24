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
        name: 'Fuentes',
        url: '/magazine/magazine',
        icon: 'fa fa-clone'
      },
      {
        name: 'Ediciones y Datos',
        url: '/magazine/editions-data',
        icon: 'fa fa-database'
      },
      {
        name: 'Estado del Estudio',
        url: '/magazine/study',
        icon: 'fa fa-bar-chart'
      },
      {
        name: 'Subir CSV',
        url: '/magazine/csv',
        icon: 'fa fa-cloud-upload'
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
    icon: 'fa fa-font',
    children: [
      {
        name: 'Nombres de Feature',
        url: '/translations/features',
        icon: 'icon-equalizer'
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
  }
];
