import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../features/ProductThunk";

const ProductList = () => {
  useEffect(() => {
    dispatch(fetchProduct());
  }, [fetchProduct]);

  const dispatch = useDispatch();

  const {products,loading,error} = useSelector((state)=> state.product)

  if(loading){
    return <h1 className="text-center">Loading</h1>
  }

  if(error){
    return <h1 className="text-center">{error}</h1>
  }

  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Price</th>
            <th>category</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>{products.map((p,index)=>{
            return(
                <tr key={p.id}>
                    <td>{index + 1}</td>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td>{p.category}</td>
                    <td><img src={p.image} alt="product img" style={{height: "100px"}}/></td>
                </tr>
            )
        })}</tbody>
      </table>
    </>
  );
};

export default ProductList;
