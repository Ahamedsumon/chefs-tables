const Cook = ({ cook, handlePreparing }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = cook;
  return (
    <div className="flex justify-between items-center bg-gray-200 my-3 p-2">
      <p className="max-w-5">{recipe_name}</p>
      <p className="max-w-0.5 text-center">{preparing_time} minutes</p>
      <p className="max-w-0.5">{calories} Calories</p>
      <button
        onClick={() => handlePreparing(recipe_id, cook, preparing_time,calories)}
        className="btn bg-[#0BE58A] border-none text-black rounded-xl"
      >
        Preparing
      </button>
    </div>

    // <div className="flex items-center gap-2 bg-gray-200 mb-4">
    //   <table className=" w-full">
    //     <thead></thead>
    //     <tbody>
    //       <tr className="text-left col-span-8">
    //         <td>
    //           <div>good</div>
    //         </td>
    //         <td className="w-5 border">{recipe_name}</td>
    //         <td className="w-10 border">{preparing_time} minutes</td>
    //         <td className="w-5 border">{calories} Calories</td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <button
    //     onClick={() => handlePreparing(recipe_id)}
    //     className="btn bg-[#0BE58A] border-none text-black rounded-3xl"
    //   >
    //     Preparing
    //   </button>
    // </div>
  );
};

export default Cook;
