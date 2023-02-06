import "../index.css"
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer__context">{`Copyright by Daniel Quilcue  ${year}`}</footer>
  )
}

export default Footer