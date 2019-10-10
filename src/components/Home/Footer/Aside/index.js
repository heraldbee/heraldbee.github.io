// Core
import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

// Stylesheet
import styles from './index.module.scss';

const Aside = () => {
    const data = useStaticQuery(graphql`
    query {
        logo: file(relativePath: { eq: "logo_hb_full.png" }) {
            childImageSharp {
                fixed(width: 300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
    `);
    return (
        <section className={`${styles.container} column is-5 is-4-widescreen`}>
            <div className={`${styles.header}`}>
                <div className={`${styles.image}`}>
                    <Link>
                        <Img className={styles.imageInner} fixed={data.logo.childImageSharp.fixed} alt="Heraldbee Logo"/>
                    </Link>
                </div>
                <p className={`${styles.headerContent} is-size-6`}>Z siedzibą w Polsce i ekspertami z ponad 10-letnim doświadczeniem.</p>
            </div>
            <div className={`${styles.newsfeed}`}>
                <h3 className={`${styles.newsfeedTitle} title is-family-secondary is-size-5`}>Najnowsze informacje</h3>
                <p className={`${styles.newsfeedContent} is-size-6`}>Inteligentne algorytmy Heraldbee otrzymały dofinansowanie z polskiego Narodowego Centrum Badań i Rozwoju, które jest agencją wykonawczą Ministerstwa Nauki i Szkolnictwa Wyższego.</p>
            </div>
        </section>
    );
};

export default Aside;