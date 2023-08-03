import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const Noticia = ({ noticia }) => {
  
  const { urlToImage, url, title, description, source } = noticia;

  const ina = "ina.png";
  return (
    <Grid item md={6} lg={4}>
      <Card>
        <CardMedia
          component="img"
          alt={`Imagen de la noticia: ${title}`}
          image={urlToImage ? urlToImage : ina}
          height={"250"}
        />

        <CardContent sx={{ height: "14rem" }}>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="buttton"
            width={"100%"}
            textAlign={"center"}
            sx={{ textDecoration: "none" }}
          >
            Leer Noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
