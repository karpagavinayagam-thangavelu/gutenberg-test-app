
import { Avatar, Card, Container, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import useCatalog from './Catalog';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { Trans } from 'react-i18next';

interface CatalogProps {
  key: string;
  icon?: ReactElement;
}
export const Landing: React.FC = React.memo(() => {
  const [catalog] = useCatalog();
  let navigate = useNavigate();

  const navigateTo = (data: CatalogProps) => {
    navigate(`/${(data.key).toLowerCase()}`);
  };

  return (
    <section>
      <Grid className="subTitle">

        <Container maxWidth="lg" >
          <Typography variant="h1"><Trans i18nKey={"LandingTitle"} >Gutenberg Project</Trans></Typography>
          <Typography variant="subtitle2">
            <Trans i18nKey={"LandingSubTitle"}>A social cataloging website that allows you to freely search its database of books, annotations, and reviews.</Trans>
          </Typography>

        </Container>
      </Grid>
      <Container maxWidth="lg" >
        <List dense className="catalog">
          <Grid container>
            {catalog && catalog.map((data: CatalogProps, index: number) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <ListItemButton onClick={() => { navigateTo(data); }}>
                    <ListItemIcon>
                      <Avatar className="avatar">{data.icon}</Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={<Trans i18nKey={`${data.key}`} className="capitalize">{data.key?.toLocaleLowerCase()}</Trans>}
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => { navigateTo(data); }}><ArrowForwardIcon /></IconButton>
                    </ListItemSecondaryAction>
                  </ListItemButton>
                </Card>
              </Grid>
            ))}
          </Grid>

        </List>
      </Container>
    </section>
  );
});

export default Landing;
