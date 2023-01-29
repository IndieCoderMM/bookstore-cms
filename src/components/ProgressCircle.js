import styled from 'styled-components';

const ProgressCircle = styled.div`
  --progress: ${(props) => props.progress};
  --skyBlue: #0290ff;
  --gray: #e8e8e8;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      white 80%,
      transparent 0 99.9%,
      white 0
    ),
    conic-gradient(var(--skyBlue) calc(var(--progress) * 1%), var(--gray) 0);
`;

export default ProgressCircle;
