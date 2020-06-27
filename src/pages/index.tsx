import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  return (
    <>
      <h1>Hello world h1</h1>
      <h2>Hello world h2</h2>
      <h3>Hello world h3</h3>
      <h4>Hello world h4</h4>
      <h5>Hello world h5</h5>
      <h6>Hello world h6</h6>
      <p>Hello world paragraph</p>
      <a href="">Hello world link</a>
      <br />
      <code>npm install hello-world</code>
    </>
  );
}
