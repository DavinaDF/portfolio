import itemBackground from "../assets/images/item-background.png"

const NavigationItem = ({title}) => {
    return (
        <div className="nav-item">
            <img src={itemBackground} alt="Bouton navigation" />
            <h2>{title}</h2>
        </div>
    );
};

export default NavigationItem;