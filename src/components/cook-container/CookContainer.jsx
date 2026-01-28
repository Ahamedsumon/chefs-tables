import Cook from "../cookStation/Cook";
import CurrentlyCooking from "../currently-cooking/CurrentlyCooking";
import Time from "../time/Time";

const CookContainer = ({
  cooks,
  handlePreparing,
  preparing,
  times,
  calories,
}) => {
  let totalTime = 0;
  for (const time of times) {
    totalTime = totalTime + time;
  }
  let totalCalories = 0;
  for (const calore of calories) {
    totalCalories = totalCalories + calore;
  }

  return (
    <div className="col-span-5">
      {/* Tost or alert */}

      <div className=" bg-gray-100 shadow-sm">
        <div>
          <h2 className="text-center py-3">Want to Cook {cooks.length}</h2>
          <hr className="text-gray-300" />
          <table className="w-8/12">
            <tbody>
              <tr className=" my-3">
                <th className="text-left">Name:</th>
                <th className="text-left">Time</th>
                <th className="text-right">Calories</th>
              </tr>
            </tbody>
          </table>
          <div className="w-full">
            {cooks.map((cook) => (
              <Cook
                key={cook.recipe_id}
                handlePreparing={handlePreparing}
                cook={cook}
              ></Cook>
            ))}
          </div>

          <div className="text-center">
            <p className="mt-10">Currently Cooking {preparing.length}</p>
            <hr className="text-gray-300" />

            <table className="w-full">
              <thead>
                <tr className="flex justify-between my-4">
                  <td>Name:</td>
                  <td>Time</td>
                  <td>Calories</td>
                </tr>
              </thead>
            </table>
            {preparing.map((prepare, idx) => (
              <CurrentlyCooking key={idx} prepare={prepare}></CurrentlyCooking>
            ))}
            <div className="w-2/3 mx-auto flex justify-between">
              <p>Total Times: {totalTime}</p>

              <p>Total Calories: {totalCalories}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookContainer;
