import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import "./ListaProdutos.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
    objectFit: 'contain',
    width: 'auto',
  },
});

function ListaProdutos() {

    let navigate = useNavigate();
    const [produtos, setProdutos] = useState<any[]>([])

    const token = useSelector<TokenState, TokenState['tokens']>(
      (state)=> state.tokens
    ) 

    const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);



async function getProdutos() {
  await busca("/produtos", setProdutos, {
      headers: {'Authorization': token}
    })
}

useEffect(() => {
  getProdutos()
}, [produtos.length])

const classes = useStyles();

const numberFormat = (value: any) =>
new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(value);

return (

  <main className="listaCards">
    {produtos.map((produtos) => (
      <Card key={produtos.id}>
          <CardActionArea>
          <Link to={`/produtos/${produtos.id}`} className='text-decorator-none' >
            <CardMedia
              className={classes.media}
              image={produtos.foto}
              title={produtos.nome}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className='titleDescription'>
                {produtos.nome}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className="productDescription"
              >
                {produtos.descricao}
              </Typography>
              <Typography variant="body2" component="p">
               Quantidade: {produtos.quantidade}
              </Typography>
              <Typography variant="body2" component="p">
                Preço: {numberFormat(produtos?.preco)}
              </Typography>
              <Typography variant="body2" component="p">
                Categoria: {produtos.categoria?.tipo}
              </Typography>
              <Typography variant="body2" component="p">
                Vendido por: {produtos.usuario?.nome}
              </Typography>

            </CardContent>
            </Link>
          </CardActionArea>
          <CardActions className='cardActions'>
            <Link to={`/produtos/${produtos.id}`} className='text-decorator-none'>
              <Button size="small" color="primary" variant="contained" fullWidth className='btn-lista'>
                Ver mais
              </Button>
            </Link>
          



              
           {produtos.usuario?.id === +userId ? (
              <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/atualizarProduto/${produtos.id}`}
                    className="tdn"
                  >
                    <Box mx={1}>
                      <Button variant="contained" size="small" color="primary">
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarProduto/${produtos.id}`}
                    className="tdn"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
            ) : (
              <Box display="flex" justifyContent="center" mb={1.5}>
                  
                    <Box mx={1}>
                      <Button variant="contained" size="small" color="primary" disabled>
                        atualizar
                      </Button>
                    </Box>
                  
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        disabled
                      >
                        deletar
                      </Button>
                    </Box>
                  
                </Box>
            )}

          </CardActions>
        </Card>
      
    ))}
  </main>
);
}

export default ListaProdutos