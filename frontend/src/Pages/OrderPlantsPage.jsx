import Card from "../components/LandingPage/Card"
import { marqueeData } from "../../public/assets/data/Data"
import OrderPants from "../components/OrderPlants/OrderPants"


const OrderPlantsPage = () => {
  return (
    <div className="mt-32 px-16">
      <OrderPants/>
      <div>
      <div className="flex flex-wrap justify-center gap-10">
      {marqueeData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
      </div>
      </div>
    </div>
  )
}

export default OrderPlantsPage