
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { useState } from 'react';
import AdventureIcon from '../icons/Adventure';
import DramaIcon from '../icons/Drama';
import FictionIcon from '../icons/Fiction';
import HistoryIcon from '../icons/History';
import HumourIcon from '../icons/Humour';
import PhilosophyIcon from '../icons/Philosophy';
import PoliticsIcon from '../icons/Politics';


interface CatalogProps {
  key : string;
  icon ?: ReactElement;
}
export const useCatalog = () => {
  const [catalog] = useState([
    {
      key : "FICTION",
      icon : <FictionIcon/>
    },
    {
      key : "DRAMA",
      icon : <DramaIcon/>
    },
    {
      key : "HUMOR",
      icon : <HumourIcon/>
    },
    {
      key : "POLITICS",
      icon : <PoliticsIcon/>
    },
    {
      key : "PHILOSOPHY",
      icon : <PhilosophyIcon/>
    },
    {
      key : "HISTORY",
      icon : <HistoryIcon/>
    },
    {
      key : "ADVENTURE",
      icon : <AdventureIcon/>
    },
  ]);
  return [catalog];
}

export default useCatalog;
