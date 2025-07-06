import  { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext'; // Adjust path as needed

const Products = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Manage Products</h2>
      <table className="w-full bg-white dark:bg-gray-800 border rounded-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 text-left">Image</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {food_list.map((prod) => (
            <tr key={prod._id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-2">
                <img src={prod.image} alt={prod.name} className="w-12 h-12 rounded" />
              </td>
              <td className="p-2">{prod.name}</td>
              <td className="p-2">{prod.category}</td>
              <td className="p-2">${prod.price}</td>
              <td className="p-2 space-x-2">
                <button className="text-blue-600 hover:underline">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
