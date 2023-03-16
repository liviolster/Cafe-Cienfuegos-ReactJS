import styles from "./navbar.module.scss";

const Navbar = ({icono}) => {
    return <div className={styles.container}>
        <p> <a href=""> Home </a></p> 
        <p> <a href=""> Comprar </a></p> 
        <p> <a href=""> Ingresar </a></p>
        <p><a href="">Sobre nosotros</a></p>
        <img src={icono} alt="" width="40px" height="40px" />
    <p>6</p>
    </div>
}

export default Navbar;