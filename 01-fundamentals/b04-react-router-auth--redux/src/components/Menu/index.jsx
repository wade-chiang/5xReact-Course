import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.scss';

const Menu = () => {
  return (
    <section data-name="Menu">
      <nav className={style.root}>
        <NavLink className={style.navItem} to="/">
          Home
        </NavLink>
        <NavLink className={style.navItem} to="/video">
          Video
        </NavLink>
      </nav>
    </section>
  );
};
export default React.memo(Menu, () => true);
