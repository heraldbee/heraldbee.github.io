// Core
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Stylesheet
import styles from './index.module.scss';

const PartnersSection = () => {
    const data = useStaticQuery(graphql`
        query {
            gPartnerLogo: file(relativePath: { eq: "partners/g-partner.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            forbesCertifiedLogo: file(relativePath: { eq: "partners/forbes-member.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shopifyPartnerLogo: file(relativePath: { eq: "partners/shopify-partner.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            woocommerceLogo: file(relativePath: { eq: "partners/woocommerce-logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            gaCertifiedLogo: file(relativePath: { eq: "partners/ga-certified.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <section className={`${styles.container} section`}>
            <div className="container">
                <div className="columns">
                    <div className="column is-12">
                        <div className={`${styles.containerImg} level is-mobile`}>
                            <div className={`${styles.item} level-item`}>
                                <Img fluid={data.gPartnerLogo.childImageSharp.fluid} className={styles.itemImg}/>
                            </div>
                            <div className={`${styles.item} level-item`}>
                                <Img fluid={data.forbesCertifiedLogo.childImageSharp.fluid} className={styles.itemImg}/>
                            </div>
                            <div className={`${styles.item} level-item`}>
                                <Img fluid={data.shopifyPartnerLogo.childImageSharp.fluid} className={styles.itemImg}/>
                            </div>
                            <div className={`${styles.item} level-item`}>
                                <Img fluid={data.woocommerceLogo.childImageSharp.fluid} className={styles.itemImg}/>
                            </div>
                            <div className={`${styles.item} level-item`}>
                                <Img fluid={data.gaCertifiedLogo.childImageSharp.fluid} className={styles.itemImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;