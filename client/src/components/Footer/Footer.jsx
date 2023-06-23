import React from 'react';
import Styles from "./Footer.module.scss"
import SectionCatalog from './SectionCatalog/SectionCatalog';

const Footer = () => {
    return (
      <footer className={Styles.footer}>
          <div className={Styles.container}>
            <SectionCatalog/>
            <section className={Styles.support}></section>
            <section className={Styles.service}></section>
            <section className={Styles.about}></section>
            <section className={Styles.contacts}></section>
            <section className={Styles.lower}></section>
          </div>
      </footer>
    );
}

export default Footer