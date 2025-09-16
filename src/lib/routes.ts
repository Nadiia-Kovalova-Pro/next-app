export interface Route {
  href: string;
  label: string;
  description?: string;
}

export const routes: Route[] = [
  {
    href: '/',
    label: 'Home',
    description: 'Main todo application page'
  },
  {
    href: '/about',
    label: 'About',
    description: 'Learn more about the Todo App'
  },
  {
    href: '/profile',
    label: 'Profile',
    description: 'User profile management'
  }
];