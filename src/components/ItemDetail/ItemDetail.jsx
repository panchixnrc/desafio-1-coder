import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ targetItem }) => {
  const { onAddCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  return (
    <div className="detail-bg d-flex w-100 my-4 py-4 p-md-0 flex-column flex-md-row justify-content-around align-items-start m-md-4 shadow-lg h-100">
      <Carousel
        variant="dark"
        controls={targetItem.img.length > 1 ? true : false}
      >
        <Carousel.Item className="mw-100">
          <img className="d-block" src={targetItem.img[0]} alt="First slide" />
        </Carousel.Item>
        {targetItem.img[1] && (
          <Carousel.Item className="mw-100">
            <img
              className="d-block"
              src={targetItem.img[1]}
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        )}

        {targetItem.img[2] && (
          <Carousel.Item className="mw-100">
            <img
              className="d-block"
              src={targetItem.img[2]}
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h2 className="text-center mt-md-4">{targetItem.name}</h2>
        <hr />
        <p className="fs-2 fw-bolder">$ {targetItem.price}</p>
        <hr />
        <h5 className="fw-bold">DESCRIPCION</h5>
        <p className="lh-2 w-50">{targetItem.description}</p>
        {cantidad < 1 && (
          <ItemCount
            stock={targetItem.stock}
            inicial={1}
            onAdd={onAddCart}
            targetItem={targetItem}
            cantidad={cantidad}
            setCantidad={setCantidad}
          />
        )}
        {cantidad > 0 && (
          <button className="btn btn-primary palta-btn">
            {" "}
            <Link className="text-decoration-none text-white" to="/cart">
              {" "}
              Terminar Compra{" "}
            </Link>{" "}
          </button>
        )}

        <button className="btn btn-primary palta-btn mt-2">
          <Link className="text-decoration-none text-white" to={`/`}>
            Regresar
            <ion-icon size="medium" name="return-down-back-outline"></ion-icon>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
