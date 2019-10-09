// React
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Custom Components
import SharedColumn from './SharedColumn';

const RightColumn = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholder: file(relativePath: { eq: "image-placeholder-350x350.png" }) {
                childImageSharp {
                    fixed(width: 100, height: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <SharedColumn
            img={data.placeholder.childImageSharp.fixed}
            title="Szkolenie i doardztwo"
            description="Nauczymy Cię samodzielnie prowadzić swoją reklamę, analizować wyniki działań marketingowych i w pełni zarządzać samodzielnie swoim sklepem."
        />
    );
};

export default RightColumn;