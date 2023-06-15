import {FunctionComponent} from "react";
import MyCard from '../../components/MyCard';

export interface AdInterface {
    id: number,
    title: string,
    text: string,
    image: string,
    buttonName: string,
}

interface AdProps {
    ad?: AdInterface,
}

const AdCard: FunctionComponent<AdProps> = ({ad = {}}) => {
    return (
        <MyCard
            id={ad.id ?? 0}
            title={ad.title ?? "title"}
            text={ad.text ?? "text"}
            image={ad.image ?? "#"}
            buttonName={ad.buttonName ?? "button"}
            action={() => console.log("click")}
        />
    );
};
export default AdCard;