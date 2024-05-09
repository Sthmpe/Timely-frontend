import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tighter">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex flex-wrap">
          {restaurant.cuisines.map((item, index) => (
            <span key={index} className="flex items-center mr-2 mb-2">
              <span>{item}</span>
              {index < restaurant.cuisines.length - 1 && <Dot className="ml-1" />}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
