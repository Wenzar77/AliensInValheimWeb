import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  CssBaseline,
  AppBar,
  Tabs,
  Tab,
  Box,
  Container,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  } as const;
}

function App(): JSX.Element {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 40, marginRight: 12 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aliens in Valheim
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Pestañas de contenido del mod Aliens in Valheim"
          >
            <Tab label="Introducción" {...a11yProps(0)} />
            <Tab label="Items & Reglas" {...a11yProps(1)} />
            <Tab label="Fase 1 - Abducción" {...a11yProps(2)} />
            <Tab label="Fase 2 - Ataque" {...a11yProps(3)} />
            <Tab label="Fase 3 - Señales" {...a11yProps(4)} />
            <Tab label="Fase 4 - Colmena" {...a11yProps(5)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography variant="h5" gutterBottom>
            Resumen
          </Typography>
          <Typography paragraph>
            Aliens in Valheim es un mod narrativo dividido en fases que integra
            ciencia ficción con la mitología nórdica. El contenido evoluciona
            progresivamente y enfatiza la cooperación, la progresión y eventos
            globales en el servidor.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h6" gutterBottom>
            Items del mundo
          </Typography>
          <Typography paragraph>
            Personajes: alienígenas grises, humanoides mutados y soldados
            biomecánicos.
          </Typography>
          <Typography paragraph>
            Objetos: fragmentos tecnológicos, armas experimentales (rayos,
            escudos, chips de control), ítems de progresión narrativa.
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Reglas de negocio
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Detección de jugadores solitarios para eventos." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cooperación como mecánica central." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Progresión lineal de fases sincronizada con el servidor." />
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h6" gutterBottom>
            Fase 1 - Abducción
          </Typography>
          <Typography paragraph>
            Durante noches oscuras aparece un OVNI que detecta jugadores
            solitarios y comienza una secuencia de abducción. El jugador
            abducido debe resistir mediante un minijuego; aliados pueden
            intervenir para salvarlo.
          </Typography>
          <Typography paragraph>
            Mecánicas clave: minijuego de resistencia, intervención cooperativa,
            escudo de la nave, crash dinámico y eventos impredecibles.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h6" gutterBottom>
            Fase 2 - Ataque Total
          </Typography>
          <Typography paragraph>
            Tras las abducciones la invasión escala a ataques coordinados contra
            concentraciones de jugadores: lluvia de rayos, criaturas
            biotecnológicas y tropas élite en tierra con poderes psíquicos.
          </Typography>
          <Typography paragraph>
            Mecánicas: detección de actividad grupal, ataques aéreos, poderes
            que alteran controles y visión, eventos &quot;nido temporal&quot; y
            sistema de reputación.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Typography variant="h6" gutterBottom>
            Fase 3 - Señales y Exploración
          </Typography>
          <Typography paragraph>
            Tras el ataque viene la exploración: los jugadores deben localizar
            señales, fragmentos y ruinas que apuntan a la colmena. Se introducen
            herramientas de escaneo, traducción de glifos y una progresión
            colectiva de descubrimiento.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Typography variant="h6" gutterBottom>
            Fase 4 - Combate Final: La Colmena
          </Typography>
          <Typography paragraph>
            La colmena es una megastructura viviente; el enfrentamiento final se
            divide en etapas con mecánicas de desactivación de nodos, combate
            contra copias del jefe y una fase núcleo con manipulación de energía
            y gravedad.
          </Typography>
          <Typography paragraph>
            Recompensas: armaduras alienígenas épicas, armas tecnológicas y el
            arma legendaria &quot;Martillo de Thor&quot; como recompensa secreta.
          </Typography>
        </TabPanel>
      </Container>
    </>
  );
}

export default App;
