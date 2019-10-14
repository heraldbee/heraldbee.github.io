// Core
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Stylesheet
import styles from './index.module.scss';

const Aside = () => {
    const data = useStaticQuery(graphql`
        query {
            avatar: file(relativePath: { eq: "photo/marek-ciesla-zdjecie-profilowe-150x150.jpg" }) {
                childImageSharp {
                    fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <aside className={`container`}>
            <div className={`columns`}>
                <div className={`${styles.card} column is-6 is-4-widescreen`}>
                    <p className={`${styles.text} is-primary is-size-6`}>
                        Produkujemy inteligentne portfele, które komunikują się z Twoim smartfonem. Posiadamy wielojęzyczne sklepy internetowe w kilku krajach na świecie, ale tylko kilku konkurentów. Dzięki Heraldbee podnieśliśmy widoczność naszych produktów w Google i zwiększyliśmy sprzedaż o 120% w dwa miesiące! Dziękujemy. 
                    </p>
                    <div className={styles.author}>
                        <Img className={styles.authorImg} fixed={data.avatar.childImageSharp.fixed}/>
                        <div className={styles.authorDescription}>
                            <h3 className={`${styles.authorDescriptionName} title is-family-secondary is-size-5`}>Marek Cieśla</h3>
                            <h4 className={`${styles.authorDescriptionPosition} subtitle is-size-6`}>CEO Woolect.co</h4>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
    

export default Aside;