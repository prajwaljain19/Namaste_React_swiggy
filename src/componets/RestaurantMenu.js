import { ShimmerPostList } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    const resInfo =  useRestaurantMenu(resId);


    // useEffect (() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId );
    //         const json = await data.json();

    //         console.log("menuData", json);
    //         setResInfo(json.data); 
    // };

    if(resInfo === null) return <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />; 

    const { name,cuisines, costForTwoMessage } = 
    resInfo?.cards[0]?.card?.card?.info; 

    const { itemCards} = 
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    ?.card;
 
    console.log("itemcard",itemCards);
    
    return ( 
         <div className="menu">
            <h1>{name}</h1>
            <p>{
            cuisines.join(", ")}- {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                {item.card.info.name} -{"RS."}
                {item.card.info.price / 100}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;