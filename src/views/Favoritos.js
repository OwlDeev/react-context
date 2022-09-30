import { useContext } from "react";
import { Context } from "../Context";
import Card from "react-bootstrap/Card";

export default function Favoritos() {
  const { fotos } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos.map((foto) => (
          <>
            {foto.liked ? (
              <Card style={{ width: "100%" }} key={foto.id}>
                <Card.Img variant="top" src={foto.src.tiny}></Card.Img>
              </Card>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
}
