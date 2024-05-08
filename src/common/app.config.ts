/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'BiG',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'BiG',
  },
  Meta: {
    Description: 'Launch BiG to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'BiG | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://big.holtzhausen.space',
    // App: 'https://get.big.holtzhausen.space',
    CardImage: 'https://big.holtzhausen.space/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/enricoros/BiG',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://discord.gg/MkH4qj2Jp9',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://big.holtzhausen.space/privacy',
  },
} as const;