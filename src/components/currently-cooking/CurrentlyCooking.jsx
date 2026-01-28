const CurrentlyCooking = ({prepare}) => {
      const {recipe_name, preparing_time, calories} = prepare
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="flex justify-between my-4">
            <td className="w-3">{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
          </tr>
          
        </thead>
      </table>
    </div>
  );
};

export default CurrentlyCooking;
