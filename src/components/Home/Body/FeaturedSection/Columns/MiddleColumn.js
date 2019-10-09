// React
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Custom Components
import SharedColumn from './SharedColumn';

const MiddleColumn = () => {
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
            title="Reklama i marketing "
            description="Za pomocą aplikacji Heraldbee skorzystasz z najlepszych rozwiązań integracyjnych na rynku. Skonfigurujemy Ci podstawowe formy marketingu dla sklepów internetowych i znajdziem najbardziej optymalne reklamy."
        />
    );
};

export default MiddleColumn;