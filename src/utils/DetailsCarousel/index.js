import { map } from 'lodash';

export const extractImgArrayFromDataCluster = cluster => map(cluster, data => data.childImageSharp.fluid);