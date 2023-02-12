import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {
  className?: string;
  title: string | JSX.Element;
}

export function Header(props: HeaderProps) {
  return (
    <div className={props?.className ?? styles['container']}>
      <h1>{props?.title}</h1>
    </div>
  );
}

export default Header;
