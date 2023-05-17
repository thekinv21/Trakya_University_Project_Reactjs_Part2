import React from "react";
import { Typography, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotfoundFavorite = () => {
  const history = useNavigate();

  const handleDiscover = () => {
    history("/discover");
  };

  return (
    <Card style={{ width: "100%", maxWidth: "720px" }}>
      <Typography>
        <Typography.Title level={4}>
          Herhangi Bir Favori Restoraniniz Bulunmamaktadir
        </Typography.Title>
        <Typography.Paragraph>
          Restoranlari Keşfederek Favori Restoran Haline Getirebilirsiniz
        </Typography.Paragraph>
      </Typography>
      <Button
        type="primary"
        size="middle"
        style={{ marginTop: "10px", fontSize: "12px", width: "100%" }}
        onClick={handleDiscover}
      >
        Restoranlari Keşfet ve Favorilini Bul
      </Button>
    </Card>
  );
};

export default NotfoundFavorite;
