import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const FetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/products";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((respData) => {
        setData(respData.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error, "Deu erro mané!");
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {isLoading ? (
        <div>Carregando</div>
      ) : (
        data.map((products) => (
          <Grid 
            item 
            xs={10} 
            md={8} 
            lg={4}
            key={products.id}
            >
            <Card
              key={products.id}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "stretch",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={products.thumbnail}
                  alt={products.brand}
                />
                <CardContent style={{ flex: "1 1 auto" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {products.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {products.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button size="small" color="primary">
                  Buy
                </Button>
                <Button size="small" color="primary">
                  Read more!
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default FetchProducts;
