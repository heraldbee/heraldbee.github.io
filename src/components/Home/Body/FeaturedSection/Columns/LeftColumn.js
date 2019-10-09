// React
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Custom Components
import SharedColumn from './SharedColumn';

const LeftColumn = () => {
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
            title="Sklep internetowy szyty na miarę"
            description="Przygotujemy Ci projekt graficzny sklepu. Wdrożymy go. Zapewnimy hosting. Wprowadzimy pełną analitykę za pomocą nowoczesnych rozwiązań technologicznych."
        />
    );
};

export default LeftColumn;