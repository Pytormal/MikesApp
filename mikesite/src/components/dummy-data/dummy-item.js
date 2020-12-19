import React from "react";
import {
    Route,
    Switch,
    NavLink,
    useParams,
    useRouteMatch
} from "react-router-dom";
import ItemDescription from "./dummy-item-d";
import ItemShipping from "./dummy-item-s";

function Item(props) {
    console.log("Props from Item: ", props);
    const { itemId } = useParams();
    const { path, url } = useRouteMatch();

    const activeItem = props.items.find((item) => item.id === Number(itemId));
    return (
        <div className="item-wrapper">
            <div>
                {/* continue with setting up the Item page, show the prop info in the appropriate locations */}
                <img src={activeItem.imageUrl} alt={activeItem.name} />
            </div>
            <div>
                <h2>{activeItem.name}</h2>
                <h4>{activeItem.price}</h4>
            </div>
            <nav className="item-sub-nav">
                <NavLink to={`${url}/description`}>Description</NavLink>
                <NavLink to={`${url}/shipping`}>Shipping</NavLink>
            </nav>
            <Switch>
                <Route path={`${path}/description`}>
                    <ItemDescription item={activeItem} />
                </Route>
                <Route path={`${path}/shipping`}>
                    <ItemShipping item={activeItem} />
                </Route>
            </Switch>
        </div>
    );
}
export default Item;
