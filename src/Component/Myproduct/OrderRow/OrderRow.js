import React from "react";

export default function OrderRow({
  order,
  handleDelete,
  StatusUpdate,
  handleStatusUpdate,
  // status,
  // stata,
}) {
  const { _id, product_name, price,status,advertige} = order;

  console.log("status advetage",status,advertige);
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>

      <td>
       
        {price}
        
      </td>
      <td>
        
          {product_name}
        
      </td>
      {advertige ? (
        <td>
          <button onClick={() => StatusUpdate(_id)} className="btn btn-accent">
            Addvertage
          </button>
        </td>
      ) : (
        <td>
          <button onClick={() => StatusUpdate(_id)} className="btn btn-secondary">
          No-advartage
          </button>
        </td>
      )}
      
      {status ? (
        <td>
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-accent"
          >
            Avaiable
          </button>
        </td>
      ) : (
        <td>
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-secondary"
          >
            Sold
          </button>
        </td>
      )}
    </tr>
  );
}
