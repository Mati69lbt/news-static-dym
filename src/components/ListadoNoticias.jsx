import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

  console.log("noticias:", noticias);
  console.log("pagina:", pagina);

  const totalpaginas = Math.ceil(totalNoticias / 20);

  const noticiasPorPagina = 12;
  const indiceInicio = (pagina - 1) * noticiasPorPagina;
  const indiceFinal = indiceInicio + noticiasPorPagina;

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        International News Headlines.
      </Typography>
      <Grid container spacing={2}>
        {noticias.slice(indiceInicio, indiceFinal).map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        sx={{ marginY: 5 }}
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Pagination
          count={totalpaginas}
          color="primary"
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
