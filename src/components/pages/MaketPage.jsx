import ItemCard from "../large components/ItemCard";

const MarketPage = ({ items }) => {
   return (
      <div className="d-flex justify-content-center mt-4">
         <div className="col-8 row row-cols-4">
            {
               items.map(item => (
                  <div className="col">
                     <ItemCard item={item} />
                  </div>
               ))
            }
         </div>
      </div>
   );
}

export default MarketPage;