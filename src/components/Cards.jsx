function Cards(props) {
  return (
    <div>
      <div className="border border-solid flex flex-col lg:flex-row justify-between items-center p-6">
        <div className="w-[50%]">
          <img className="w-[100%]" src={props.img} />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mb-4">{props.type}</h4>
          <p className="hover:underline hover:font-bold cursor-pointer">
            {props.item1}
          </p>
          <p className="hover:underline hover:font-bold cursor-pointer">
            {props.item2}
          </p>
          <p className="hover:underline hover:font-bold cursor-pointer">
            {props.item3}
          </p>
          <p className="hover:underline hover:font-bold cursor-pointer">
            {props.item4}
          </p>
          <p className="hover:underline hover:font-bold cursor-pointer">
            {props.item5}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
