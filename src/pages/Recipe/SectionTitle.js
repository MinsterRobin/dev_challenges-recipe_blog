import styled from "styled-components";

const SectionTitle = styled.p`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-large);
    font-weight: 700;
    
    @media(max-width: 768px) {
        font-size: var(--font-size-medium);
    }
`;

export default SectionTitle;