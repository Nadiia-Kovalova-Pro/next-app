import Link from 'next/link';
import { routes } from '../lib/routes';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href} className={styles.navLink}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}